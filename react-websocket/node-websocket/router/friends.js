const express = require('express')

const router = express.Router()
let { resFormat } = require('../utils/resFormat')
// 朋友列表
router.get('/friends', (req, res) => {
    let { user } = req.query;
    let path = `../data/friends_${user}.json`
    let data = require(path);
    res.send(resFormat(data));
})

module.exports = router;
