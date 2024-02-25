let arr = [1,2,3]
let arrOne = [2]

console.log(String(arr))
console.log(String(arrOne))


[
  {
    "k": "采购人",
    "v": "1"
  },
  {
    "k": "代理机构",
    "v": "2"
  }
]



{"districName":"zcy","isShowBasic":true,"isShowFile":true,"isShowPublishNotice":true,"correctNoticePanel":{"title":"更正公告制作","key":"correctionNotice","config":[{"contentType":"formGrid","key":"correctInfo","config":[{"label":"更正日期","key":"correctDate","type":"datepicker","sensitiveWords":false,"rules":[{"required":true,"message":"请选择更正日期！"}]},{"label":"更正理由","key":"reason","type":"textArea","sensitiveWords":true,"formItemConfig":{"autoChange":true},"rules":[{"required":true,"message":"请输入更正理由！"}]},{"label":"其他补充事宜","key":"remark","type":"textArea","sensitiveWords":true,"formItemConfig":{"maxLength":3000,"autoChange":true},"rules":[{"required":false,"message":"请输入其他补充事宜！"}]}]},{"contentType":"table","key":"correctionItems","isShowFooter":true,"isSub":false,"config":[{"label":"序号","key":"index","type":"text","width":80,"sensitiveWords":false,"required":false},{"label":"更正项","key":"name","className":"input-grid-format","type":"textArea","sensitiveWords":true,"required":true,"formItemConfig":{"maxLength":500,"autoChange":true},"rules":[{"required":true,"message":"请输入更正项"}]},{"label":"更正前内容","key":"contentBefore","className":"input-grid-format","type":"textArea","sensitiveWords":true,"required":false,"formItemConfig":{"maxLength":3000,"autoChange":true},"rules":[{"required":false,"message":"请输入更正前内容"}]},{"label":"更正后内容","key":"contentAfter","className":"input-grid-format","type":"textArea","sensitiveWords":true,"required":true,"formItemConfig":{"maxLength":3000,"autoChange":true},"rules":[{"required":true,"message":"请输入更正后内容"}]},{"label":"操作","key":"operate","type":"operateComponent","width":80,"required":false}]},{"title":"采购结果","key":"correctionPurchaseResults","contentType":"table","isSub":true}]},"proxyFeePanle":{"title":"联系信息与其他","key":"noticeInfoContactParam","config":[{"title":"采购人信息","contentType":"table","key":"purchaserList","isCanAdd":true,"config":[{"label":"名称","key":"purchaserLinkman","type":"input","sensitiveWords":true,"required":true,"formItemConfig":{"maxLength":20},"rules":[{"required":true,"message":"请输入名称"}]},{"label":"地址","key":"purchaserAddr","type":"input","sensitiveWords":true,"required":true,"formItemConfig":{"maxLength":500},"rules":[{"required":true,"message":"请输入地址"}]},{"label":"联系方式","key":"purchaserTel","type":"input","sensitiveWords":false,"required":true,"formItemConfig":{"maxLength":30},"rules":[{"required":true,"message":"请输入联系方式"}]},{"label":"操作","key":"operate","type":"purchaserOperateComponent","width":80,"required":false}]},{"title":"采购代理机构信息","contentType":"formGrid","key":"agentList","config":[{"label":"名称","key":"agentLinkman","type":"input","sensitiveWords":true,"formItemConfig":{"maxLength":20},"rules":[{"required":true,"message":"请输入名称"}]},{"label":"地址","key":"agentAddr","type":"input","sensitiveWords":true,"formItemConfig":{"maxLength":500},"rules":[{"required":true,"message":"请输入地址"}]},{"label":"联系方式","key":"agentTel","type":"input","sensitiveWords":false,"formItemConfig":{"maxLength":30},"rules":[{"required":true,"message":"请输入联系方式"}]}]},{"title":"项目联系方式","contentType":"formGrid","key":"projectContactInformation","config":[{"label":"项目联系人","key":"projectContactPerson","type":"input","sensitiveWords":true,"formItemConfig":{"maxLength":20},"rules":[{"required":true,"message":"请输入项目联系人"}]},{"label":"电话","key":"projectContactPhone","type":"input","sensitiveWords":false,"formItemConfig":{"maxLength":30},"rules":[{"required":true,"message":"请输入电话"}]}]}]},"correctSupplierModal":{"config":[{"title":"中标（成交）供应商","contentType":"table","key":"bidSuppliers","isEditTable":false,"oneConfig":[{"label":"排名","key":"rank","type":"text","width":62},{"label":"供应商名称","key":"supplierName","type":"text","width":166}],"config":[{"label":"证件号码","key":"providerSocialCreditCode","type":"text","width":186},{"label":"供应商地址","key":"supplierAddr","type":"text","width":200,"isShowEllipsis":true},{"label":"操作","key":"operate","width":180,"required":false,"columnsConfig":{"fixed":"right"},"config":[{"name":"编辑","code":"edit"}]}]}]}}



[
  {
    "k": "由委托采购方负责保存档案，保存期限从采购结束之日起至少十五年",
    "v": "code"
  },
  {
    "k": "由受托代理方负责保存档案，保存期限从采购结束之日起至少十五年",
    "v": "code1"
  }
]

{
  "projectNo": {
      "mergeStartField": "purchasePackageDTOList",
      "mergePathField": "purchasePackageDTOList.formPurchasePlanDTOS"
  }
}


{
  "projectNo": {
      "mergeStartField": "purchasePackageDTOList",
      "mergePathField": "purchasePackageDTOList.formPurchasePlanDTOS"
  },
  "purchasePackageDTOList": {
    "mergeStartField": "purchasePackageDTOList.formPurchasePlanDTOS",
    "mergePathField": "formPurchasePlanDTOS"
  }
}


