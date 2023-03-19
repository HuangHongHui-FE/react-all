const express = require('express')

const router = express.Router()

const { resFormat } = require('../utils/resFormat');

const fs = require('fs');
const { strWrite } = require('../utils/strWrite');


// 点击聊天，获取聊天记录,单人聊天
router.get('/chatMsg', (req, res) => {
    // 透传过来的server
    let io = req.io

    let { user, toUser } = req.query;

    // socket


    io.on('connection', (socket) => {
        // console.log('socket---', socket);
        console.log(`⚡: ${socket.id} 用户已连接!`);

        // 发送时
        let eventName = `${user}to${toUser}`
        let eventNameEnter = eventName.split('to')[1] + "to" + eventName.split('to')[0];

        socket.on(eventName, (data) => {
            from_path = `../data/${data.from}.json`;
            to_path = `../data/${data.to[0]}.json`;
            let old_data = require(from_path);
            let old_data_to = require(to_path);
            old_data.push(data);
            old_data_to.push(data)

            strWrite(data.from + '.json', JSON.stringify(old_data));
            strWrite(data.to[0] + '.json', JSON.stringify(old_data_to));

            // 通知对应的聊天者

            let res = []
            old_data_to.map((item, index) => {
                if (item.to[0] === `user_${toUser}` && !item.weixin) {
                    res.push(item)
                }
            })

            old_data.map((item, index) => {
                if (item.to[0] === `user_${user}` && !item.weixin) {
                    res.push(item)
                }
            })

            res.sort((a, b) => a.time - b.time);
            io.emit(eventNameEnter, res);
        });






        // 发送人之外的所有人
        // socket.broadcast.emit('hi');

        socket.on('disconnect', (socket) => {
            console.log(`🔥:${socket.id} 一个用户已断开连接`);
        });
    });




    // 聊天记录的处理

    let userPath = `../data/user_${user}.json`;
    let userMsg = require(userPath);
    let toUserPath = `../data/user_${toUser}.json`;
    let toUserMsg = require(toUserPath);

    let data = []
    userMsg.map((item, index) => {
        if (item.to[0] === `user_${toUser}` && !item.weixin) {
            data.push(item)
        }
    })

    toUserMsg.map((item, index) => {
        if (item.to[0] === `user_${user}` && !item.weixin) {
            data.push(item)
        }
    })

    data.sort((a, b) => a.time - b.time);

    res.send(resFormat(data));
})



// 点击聊天，获取聊天记录,多人聊天
router.get('/chatTogetherMsg', (req, res) => {
    // 透传过来的server
    let io = req.io

    let { user, toUser } = req.query;

    // socket


    io.on('connection', (socket) => {
        // console.log('socket---', socket);
        console.log(`⚡: ${socket.id} 用户已连接!`);

        // 发送时
        let eventName = `${user}to${toUser}`
        let eventNameEnter = eventName.split('to')[1] + "to" + eventName.split('to')[0];

        socket.on(eventName, (data) => {
            from_path = `../data/${data.from}.json`;
            to_path = `../data/${data.to[0]}.json`;
            let old_data = require(from_path);
            let old_data_to = require(to_path);
            old_data.push(data);
            old_data_to.push(data)

            strWrite(data.from + '.json', JSON.stringify(old_data));
            strWrite(data.to[0] + '.json', JSON.stringify(old_data_to));

            // 通知对应的聊天者

            let res = []
            old_data_to.map((item, index) => {
                if (item.to[0] === `user_${toUser}` && !item.weixin) {
                    res.push(item)
                }
            })

            old_data.map((item, index) => {
                if (item.to[0] === `user_${user}` && !item.weixin) {
                    res.push(item)
                }
            })

            res.sort((a, b) => a.time - b.time);
            io.emit(eventNameEnter, res);
        });






        // 发送人之外的所有人
        // socket.broadcast.emit('hi');

        socket.on('disconnect', (socket) => {
            console.log(`🔥:${socket.id} 一个用户已断开连接`);
        });
    });




    // 聊天记录的处理

    let userPath = `../data/user_${user}.json`;
    let userMsg = require(userPath);
    let toUserPath = `../data/user_${toUser}.json`;
    let toUserMsg = require(toUserPath);

    let data = []
    userMsg.map((item, index) => {
        if (item.to[0] === `user_${toUser}` && !item.weixin) {
            data.push(item)
        }
    })

    toUserMsg.map((item, index) => {
        if (item.to[0] === `user_${user}` && !item.weixin) {
            data.push(item)
        }
    })

    data.sort((a, b) => a.time - b.time);

    res.send(resFormat(data));
})

module.exports = router
