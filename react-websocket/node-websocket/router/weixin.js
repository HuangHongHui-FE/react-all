const express = require('express')

const router = express.Router()

const {resFormat} = require('../utils/resFormat');

let weixin = require('../data/weixin.json')


router.get('/', (req, res) => {
    res.send(resFormat(weixin))
})

module.exports = router
