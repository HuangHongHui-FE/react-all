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
  let initLen = Math.ceil(iframeArrAll.length / num);
  if (cluster.isMaster) {
    var numWorkers = require("os").cpus().length;
    // 各个进程的结果
    let res = {}, current = 0;
    for (var i = 0; i < num; i++) {
      const worker = cluster.fork();
      worker.on("message", function (payload) {
        if (payload.type == "z") {
          // 所有进程都进行完了
          if (current == num) {
            fs.writeFile();
          }
        }
      });
    }
    let start = 0, end = initLen;
    setTimeout(() => {
      for (var wid in cluster.workers) {
        cluster.workers[wid].send({
          type: "a",
          data: {
            start: start,  // 数据切割分给不同的进程
            end: end,
          },
        });
      }
    }, 2000);
  } else {
    process.on("message", function (message) {
      if (message.type === "a") {
        const { start, end } = message.data;
        myXCrawl.startPolling({ d: 1 }, async (count, stopPolling) => {
          let targets = iframeArrAll.slice(start, end);
          await myXCrawl.crawlPage({...});
          process.send({
            type: "z",
            data: {},
          });
        });
      }
    });
  }
});
