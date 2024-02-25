// 根据iframe链接获取完整的video链接，多进程

var cluster = require("cluster");
const fs = require("fs");
const xCrawl = require("x-crawl");
const myXCrawl = xCrawl({
  mode: "sync",
  enableRandomFingerprint: true, // 设置设备指纹识别是为了避免通过指纹识别从不同位置识别和跟踪我们。
  // maxRetry: 1,
  // intervalTime: { max: 5000, min: 4000 },
  timeout: 30000,
});
let num = 4; // 用四个进程
fs.readFile("./x-crawl_demo/static/000/iframe.js", "utf-8", (err, data) => {
  if (err) {
    return console.log("读取失败");
  }
  let iframeArrAll = JSON.parse(data);

  let initLen = Math.ceil(iframeArrAll.length / num);

  if (cluster.isMaster) {
    var numWorkers = require("os").cpus().length;
    console.log("Master cluster setting up " + numWorkers + " workers...");

    // 各个进程的结果
    let res = {}, current = 0;
    for (var i = 0; i < num; i++) {
      const worker = cluster.fork();
      worker.on("message", function (payload) {
        if (payload.type == "z") {
          res[payload.data.id] = payload.data.result;
          current++;
          // 所有进程都进行完了
          if (current == num) {
            const result = [];
            for (let i = 1; i <= num; i++) {
              result.push(...res[i + ""]);
            }
            fs.writeFile(
              "./x-crawl_demo/static/000/videos_all.js",
              JSON.stringify(result),
              (err) => {
                if (err) {
                  return console.log("视频地址写入错误");
                }
                console.log("视频地址写入成功");
              }
            );
          }
        }
      });
    }

    cluster.on("online", function (worker) {
      console.log("Worker " + worker.process.pid + " is online");
    });

    let start = 0,
      end = initLen;
    setTimeout(() => {
      for (var wid in cluster.workers) {
        cluster.workers[wid].send({
          type: "a",
          from: "master",
          data: {
            start: start,
            end: end,
          },
        });
        start = end;
        end = end + initLen;
      }
    }, 2000);
  } else {
    process.on("message", function (message) {
      if (message.type === "a") {
        const { start, end } = message.data;
        const videoAllArrAll = [];
        myXCrawl.startPolling({ d: 1 }, async (count, stopPolling) => {
          let targets = iframeArrAll.slice(start, end);
          await myXCrawl.crawlPage({
            targets,
            viewport: { width: 1920, height: 1080 },
            onCrawlItemComplete: async (res) => {
              let { page } = res.data;
              const videoAll = await page.$$eval("#video > source", (con) => {
                const videoAllArr = [];
                con.forEach((item, index) => {
                  videoAllArr.push(item?.src);
                });
                return videoAllArr;
              });
              videoAllArrAll.push(...videoAll);
              page.close();
            },
          });

          await new Promise((r) => setTimeout(r, 5000));

          process.send({
            type: "z",
            from: "Worker " + process.pid,
            data: {
              id: cluster.worker.id,
              result: videoAllArrAll,
            },
          });
        });
      }
    });
  }
});
