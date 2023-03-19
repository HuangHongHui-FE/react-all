const express = require('express')

const router = express.Router()

// 朋友列表
router.use(require('./friends'))

router.use('/weixin', require('./weixin'))

// 以往信息
router.use(require('./chat'));

module.exports = router