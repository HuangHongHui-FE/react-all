const withDeployEnv = (getParamsFunc) => {
  return (WrappedComponent) => {
    const NewComp = (props) => {
      const deployEnv = useDeployEnv(getParamsFunc());
      return <WrappedComponent {...props} deployEnv={deployEnv} />;
    };
    return NewComp;
  };
};

export default withDeployEnv;

withDeployEnv(() => {
  const params = location.a;
  return params;
})(Comp);

const {
  noticeDetail: { bidProjectInfo: { project: { projectId = "" } = {} } = {} },
} = props;
return {
  page: "111",
  projectId,
};







"view": {
    "appId": "3019",
    "buttons": [],
    "code": "sv_XFYvRrDgpPYXM",
    "createAt": 1618556393000,
    "designType": true,
    "flowCode": "entrust_agent_order_process_key",
    "forms": [
      {
        "businessOptions": {},
        "code": "plans",
        "codePath": "plans",
        "editAble": false,
        "fieldList": [
          {
            "addAble": true,
            "auditAble": false,
            "code": "planCodeHtml",
            "codePath": "plans.planCodeHtml",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16213946527444124",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购计划文号",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "textarea",
            "widgetOptions": {
              "detailDisplay": "return value",
              "autoChange": false,
              "maxLength": "500",
              "autosize": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "planCode",
            "codePath": "plans.planCode",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16195902790523748",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购计划文号",
            "placeHolder": "",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplay": "",
              "columnWidth": 0
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "planName",
            "codePath": "plans.planName",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16195902824909308",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "预算项目名称",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {}
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "categoryName",
            "codePath": "plans.categoryName",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16195902836764324",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购目录",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {}
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "purchaseContent",
            "codePath": "plans.purchaseContent",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16195902847351936",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购内容",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {}
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "organType",
            "codePath": "plans.organType",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16195908046953548",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "组织形式",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {}
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "purchaseWay",
            "codePath": "plans.purchaseWay",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16195908054486138",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购方式",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {}
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "itemQuantity",
            "codePath": "plans.itemQuantity",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16195908060351806",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "\t 数量",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {}
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "budgetAmount",
            "codePath": "plans.budgetAmount",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "1619590834256174",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "金额(万元)",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {}
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "purchaseIntentionUrl",
            "codePath": "plans.purchaseIntentionUrl",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16195908345969384",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购意向公开链接",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {
              "maxLength": 500
            },
            "visible": false,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isKey": false,
              "itemExtra": "",
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "planId",
            "codePath": "plans.planId",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "1621303587072165",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": " 采购计划id",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "colSpan": 1,
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          }
        ],
        "help": "",
        "helpModal": {},
        "id": "16195898950586264",
        "isBizField": 0,
        "multi": 1,
        "name": "采购计划",
        "toolTips": "",
        "type": 3,
        "visible": true,
        "widget": "gridForm",
        "widgetOptions": {
          "overflowX": false,
          "showActions": false,
          "isObjectPanel": false,
          "showNo": false,
          "lineAdd": true,
          "showSysActions": true,
          "isSub": false,
          "rightTopCom": "",
          "hoverHelp": {},
          "showFooter": false,
          "hideRightTopAddBtn": true,
          "visibleCode": "exp: return Number(_.get(root, 'form.orderSourceType')) === 0;"
        }
      },
      {
        "businessOptions": {},
        "code": "projects_show",
        "codePath": "projects_show",
        "editAble": false,
        "fieldList": [
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "projectNo",
            "codePath": "projects_show.projectNo",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16752338599511986",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购项目信息",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "textarea",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseProjectInfo');",
              "nameCode": "var alias =  _.get(root, 'extraParams.aliasMap.purchaseProject', '采购项目');\nreturn alias + '信息';",
              "showColumn": true,
              "detailDisplay": "",
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false,
              "autoChange": false,
              "maxLength": "500",
              "autosize": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "purchasePackageDTOList",
            "codePath": "projects_show.purchasePackageDTOList",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16752349385829652",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "标项信息",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseProjectPackage');",
              "nameCode": "var alias =  _.get(root, 'extraParams.aliasMap.itemName', '标项');\nreturn alias + '信息';",
              "showColumn": true,
              "detailDisplay": "",
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "formPurchasePlanDTOS",
            "codePath": "projects_show.formPurchasePlanDTOS",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16752349393977320",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购计划",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseProject_plan');",
              "nameCode": "var alias =  _.get(root, 'extraParams.aliasMap.purchaseNo', '采购计划');\nreturn alias;",
              "showColumn": true,
              "detailDisplay": "",
              "isDestroyed": false,
              "isKey": false,
              "columnWidth": 166,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "budgetAmount",
            "codePath": "projects_show.budgetAmount",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16752354583265898",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "资金总额(万元)",
            "needUpperCase": false,
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {},
            "visible": true,
            "widget": "money-input",
            "widgetOptions": {
              "unit": "fen",
              "showColumn": true,
              "detailDisplay": "return '<div style=\"color: #ff780f; text-align: right\">' + tableItem['purchasePackageDTOList-formPurchasePlanDTOS-budgetAmount'] + '</div>';",
              "isDestroyed": false,
              "isKey": false,
              "format": true,
              "columnWidth": 154,
              "unitSetting": "yuan",
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "projectPlanId",
            "codePath": "projects_show.projectPlanId",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16752355662489092",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购计划信息",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseProject_planInfo');",
              "nameCode": "var alias =  _.get(root, 'extraParams.aliasMap.purchaseNo', '采购计划');\nreturn alias + '信息';",
              "showColumn": true,
              "detailDisplay": "",
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "projectName",
            "codePath": "projects_show.projectName",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16752349375048996",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购项目名称（隐藏）",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": false,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "projectId",
            "codePath": "projects_show.projectId",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16764503410958300",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购项目ID（隐藏）",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": false,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "projectDetailUrl",
            "codePath": "projects_show.projectDetailUrl",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "1682254116818488",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购项目详情页链接(隐藏)",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": false,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          }
        ],
        "help": "",
        "helpModal": {},
        "id": "16738337270577496",
        "isBizField": 0,
        "multi": 1,
        "name": "采购项目",
        "toolTips": "",
        "type": 3,
        "visible": true,
        "widget": "gridForm",
        "widgetOptions": {
          "showActions": false,
          "isObjectPanel": false,
          "lineAdd": false,
          "isSub": false,
          "hoverHelp": {},
          "showFooter": false,
          "hideRightTopAddBtn": true,
          "overflowX": false,
          "nameCode": "var alias =  _.get(root, 'extraParams.aliasMap.purchaseProject', '采购项目');\nreturn alias;",
          "showNo": false,
          "showSysActions": false,
          "cellMergeRules": "{\n  \"projectNo\": {\n      \"mergeStartField\": \"purchasePackageDTOList\",\n      \"mergePathField\": \"purchasePackageDTOList.formPurchasePlanDTOS\"\n  },\n  \"purchasePackageDTOList\": {\n    \"mergeStartField\": \"purchasePackageDTOList.formPurchasePlanDTOS\",\n    \"mergePathField\": \"formPurchasePlanDTOS\"\n  }\n}",
          "visibleCode": "exp: return Number(_.get(root, 'form.orderSourceType')) === 2;"
        }
      },
      {
        "businessOptions": {},
        "code": "programs",
        "codePath": "programs",
        "editAble": false,
        "fieldList": [
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "programId",
            "codePath": "programs.programId",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16757563117765852",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购方案id",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": false,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "programCode",
            "codePath": "programs.programCode",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16754167582257916",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购方案编号",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseProgramCode');",
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "programName",
            "codePath": "programs.programName",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16754167611305680",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购方案名称",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseProgramName');",
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "purchaseTypeCodeName",
            "codePath": "programs.purchaseTypeCodeName",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16754167622216672",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "协议类型",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseProgramPurchaseType');",
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "columnWidth": 188,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "detailUrl",
            "codePath": "programs.detailUrl",
            "defaultValue": "",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16763439894067304",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购方案url",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": false,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          }
        ],
        "help": "",
        "helpModal": {},
        "id": "16738339652365604",
        "isBizField": 0,
        "multi": 1,
        "name": "采购方案",
        "toolTips": "",
        "type": 3,
        "visible": true,
        "widget": "gridForm",
        "widgetOptions": {
          "overflowX": false,
          "showActions": false,
          "isObjectPanel": false,
          "showNo": false,
          "lineAdd": false,
          "showSysActions": true,
          "isSub": false,
          "hoverHelp": {},
          "showFooter": false,
          "hideRightTopAddBtn": true,
          "visibleCode": "exp: return Number(_.get(root, 'form.orderSourceType')) === 3;"
        }
      },
      {
        "businessOptions": {},
        "code": "requirements",
        "codePath": "requirements",
        "editAble": false,
        "fieldList": [
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "projectCode",
            "codePath": "requirements.projectCode",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "1678863404299279",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购项目编号",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseRequirementCode');",
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "projectName",
            "codePath": "requirements.projectName",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16788634092071580",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购项目名称",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseRequirementName');",
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "projectId",
            "codePath": "requirements.projectId",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16790237964528496",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购项目id",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": false,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "detailURL",
            "codePath": "requirements.detailURL",
            "detailAble": false,
            "editAble": false,
            "helpModal": {},
            "id": "16794567393098384",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "采购项目url",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": false,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "totalBudget",
            "codePath": "requirements.totalBudget",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16912904889149432",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "预算金额(元)",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "detailDisplayOfReactNode": "return pageComponent.renderCell({ tableItem }, 'purchaseRequirementTotalBudget');",
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "component-9835",
            "codePath": "requirements.component-9835",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16912905982596208",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "进口产品核准单",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "type": 1,
            "validator": {
              "needTipsValidate": false
            },
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isDestroyed": false,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          }
        ],
        "help": "",
        "helpModal": {},
        "id": "16788631707743280",
        "isBizField": 0,
        "multi": 1,
        "name": "采购项目信息",
        "toolTips": "",
        "type": 3,
        "visible": true,
        "widget": "gridForm",
        "widgetOptions": {
          "overflowX": false,
          "showActions": false,
          "isObjectPanel": false,
          "showNo": false,
          "lineAdd": false,
          "showSysActions": true,
          "isSub": false,
          "hoverHelp": {},
          "showFooter": false,
          "hideRightTopAddBtn": true,
          "visibleCode": "exp: return Number(_.get(root, 'form.orderSourceType')) === 4;"
        }
      },
      {
        "businessOptions": {},
        "code": "amountSumContainer",
        "codePath": "amountSumContainer",
        "editAble": false,
        "fieldList": [
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "totalAmount",
            "codePath": "amountSumContainer.totalAmount",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16195958503604996",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "创建委托单-采购计划金额总合",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "colSpan": 2,
              "wrapperCol": {
                "span": 24
              },
              "labelCol": {
                "span": 0
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "zcy.order.create.amount",
            "widgetOptions": {}
          }
        ],
        "help": "",
        "helpModal": {},
        "id": "16195929352375790",
        "isBizField": 0,
        "multi": 0,
        "name": " ",
        "skip": true,
        "toolTips": "",
        "type": 3,
        "visible": true,
        "widget": "form",
        "widgetOptions": {
          "gutter": 32,
          "formGridBordered": true,
          "isVerticalLayout": true,
          "hoverHelp": {},
          "visibleCode": "exp: return Number(_.get(root, 'form.orderSourceType')) !== 3;"
        }
      },
      {
        "businessOptions": {},
        "code": "commissionBasis",
        "codePath": "commissionBasis",
        "editAble": true,
        "fieldList": [
          {
            "addAble": true,
            "auditAble": false,
            "code": "commissionOrder",
            "codePath": "commissionBasis.commissionOrder",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "commissionOrder",
              "codePath": "commissionBasis.commissionOrder",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "commissionOrderCode",
                  "codePath": "commissionBasis.commissionOrder.commissionOrderCode",
                  "column": "order_code",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16160363550369372",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "委托单编号",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "commissionOrderName",
                  "codePath": "commissionBasis.commissionOrder.commissionOrderName",
                  "column": "order_name",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16160363555213900",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "委托单名称",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {
                    "maxLengthMsg": "长度不可超过50个字符",
                    "maxLength": 50
                  },
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "protocolType",
                  "codePath": "commissionBasis.commissionOrder.protocolType",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16197524836539542",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "委托协议类型",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": false,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "protocolId",
                  "codePath": "commissionBasis.commissionOrder.protocolId",
                  "column": "commission_protocol_id",
                  "detailAble": false,
                  "editAble": false,
                  "helpModal": {},
                  "id": "1620290882960221",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "委托协议ID",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "先搞成可见的，到时候隐藏",
                  "validator": {
                    "needTipsValidate": false,
                    "regExp": ""
                  },
                  "visible": false,
                  "widget": "text",
                  "widgetOptions": {
                    "isDestroyed": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "orderSourceType",
                  "codePath": "commissionBasis.commissionOrder.orderSourceType",
                  "column": "order_source_type",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "167358041178663",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "委托来源",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "先搞成可见的，到时候隐藏",
                  "type": 1,
                  "validator": {},
                  "visible": false,
                  "widget": "number",
                  "widgetOptions": {
                    "isDestroyed": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "projects",
                  "codePath": "commissionBasis.commissionOrder.projects",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16756530036337520",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "采购项目数据",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "type": 1,
                  "validator": {
                    "needTipsValidate": false
                  },
                  "visible": false,
                  "widget": "text",
                  "widgetOptions": {
                    "isDestroyed": false
                  }
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16160363418409898",
              "isBizField": 0,
              "multi": 0,
              "name": "委托单信息",
              "skip": true,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16160363418409898",
            "isBizField": 0,
            "name": "委托单信息",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true,
            "widget": "subForm"
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "purchaser",
            "codePath": "commissionBasis.purchaser",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "purchaser",
              "codePath": "commissionBasis.purchaser",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "purchaserName",
                  "codePath": "commissionBasis.purchaser.purchaserName",
                  "column": "purchaser_name",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16159653812435216",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "委托采购方名称",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "purchaserLegalPerson",
                  "codePath": "commissionBasis.purchaser.purchaserLegalPerson",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "1615965382439583",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "委托采购方法定代表人",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "purchaserAuthorizedManager",
                  "codePath": "commissionBasis.purchaser.purchaserAuthorizedManager",
                  "detailAble": false,
                  "editAble": false,
                  "helpModal": {},
                  "id": "16159653845575756",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "授权经办人",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "purchaserContactPerson",
                  "codePath": "commissionBasis.purchaser.purchaserContactPerson",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16159653922431684",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "委托采购方联系人",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "purchaserAuthorizedManagerPhone",
                  "codePath": "commissionBasis.purchaser.purchaserAuthorizedManagerPhone",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16159653955824028",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "授权经办方联系人手机",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "purchaserTelephone",
                  "codePath": "commissionBasis.purchaser.purchaserTelephone",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16159653963418324",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "委托采购方固定电话",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {
                    "regExpMsg": "联系电话有误",
                    "regExp": "/^\\d{3}-\\d{7,8}|\\d{4}-\\d{7,8}$/"
                  },
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "purchaserAddress",
                  "codePath": "commissionBasis.purchaser.purchaserAddress",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16159653969636932",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "委托采购方地址",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "purchaserContactPhone",
                  "codePath": "commissionBasis.purchaser.purchaserContactPhone",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16159653983211244",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "委托采购方联系手机",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {
                    "regExpMsg": "联系电话有误",
                    "regExp": "/^\\d{3}-\\d{8}$|^\\d{4}-\\d{7,8}$|^1\\d{10}$/i"
                  },
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "purchaserOrgId",
                  "codePath": "commissionBasis.purchaser.purchaserOrgId",
                  "column": "purchaser_org_id",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16191564241724768",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "采购单位机构id",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": false,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "purchaserDistrictCode",
                  "codePath": "commissionBasis.purchaser.purchaserDistrictCode",
                  "column": "purchaser_district_code",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16191564246657820",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "采购单位区划编码",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": false,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "purchaserUserType",
                  "codePath": "commissionBasis.purchaser.purchaserUserType",
                  "column": "purchaser_user_type",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16191564252208484",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "采购单位用户类别",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {
                    "needTipsValidate": false
                  },
                  "visible": false,
                  "widget": "text",
                  "widgetOptions": {
                    "isDestroyed": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "complainContact",
                  "codePath": "commissionBasis.purchaser.complainContact",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16244370730649616",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "mapping": {},
                  "name": "质疑答复联系人",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "valueDomain": "static-url",
                  "valueDomainDetail": "/gyarados/commissionOrders/complain/contacts",
                  "visible": true,
                  "widget": "select",
                  "widgetOptions": {
                    "search": "local",
                    "onChange": "form.setFieldsValue({\"purchaser.complainContactShow\": args[0].value});\nrequest('/gyarados/commissionOrders/operator/phone?operatorId='+args[0].key).then(res=>{\n    form.setFieldsValue({\"purchaser.complainContactPhone\": res.result});\n})\n",
                    "remoteParams": "key",
                    "getOptions": "return response.result;"
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "complainContactPhone",
                  "codePath": "commissionBasis.purchaser.complainContactPhone",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16206352044734532",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "质疑答复联系人电话",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {
                    "regExpMsg": "联系电话有误",
                    "regExp": "/^\\d{3}-\\d{8}$|^\\d{4}-\\d{7,8}$|^1\\d{10}$/i"
                  },
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "complainContactShow",
                  "codePath": "commissionBasis.purchaser.complainContactShow",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16206357612079580",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "质疑联系人(公告展现)",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16159652961615904",
              "isBizField": 0,
              "multi": 0,
              "name": "委托采购方信息",
              "skip": false,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16159652961615904",
            "isBizField": 0,
            "name": "委托采购方信息",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true,
            "widget": "subForm"
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "agency",
            "codePath": "commissionBasis.agency",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "agency",
              "codePath": "commissionBasis.agency",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "agencyName",
                  "codePath": "commissionBasis.agency.agencyName",
                  "column": "agency_name",
                  "detailAble": false,
                  "editAble": false,
                  "helpModal": {},
                  "id": "16159676441447020",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "受托代理方名称",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "agencyContactPerson",
                  "codePath": "commissionBasis.agency.agencyContactPerson",
                  "detailAble": false,
                  "editAble": false,
                  "helpModal": {},
                  "id": "16159676447388598",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "受托代理方联系人",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "agencyAddress",
                  "codePath": "commissionBasis.agency.agencyAddress",
                  "detailAble": false,
                  "editAble": false,
                  "helpModal": {},
                  "id": "16159676452158132",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "受托代理方地址",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "agencyTelephone",
                  "codePath": "commissionBasis.agency.agencyTelephone",
                  "detailAble": false,
                  "editAble": false,
                  "helpModal": {},
                  "id": "16159676463545702",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "受托代理方固定电话",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "agencyLegalPerson",
                  "codePath": "commissionBasis.agency.agencyLegalPerson",
                  "detailAble": false,
                  "editAble": false,
                  "helpModal": {},
                  "id": "16159676468225988",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "受托代理方法定代表人",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "agencyContactPhone",
                  "codePath": "commissionBasis.agency.agencyContactPhone",
                  "detailAble": false,
                  "editAble": false,
                  "helpModal": {},
                  "id": "16159676473403140",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "受托代理方联系手机",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "agencyOrgId",
                  "codePath": "commissionBasis.agency.agencyOrgId",
                  "column": "agency_org_id",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16191565363348200",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "代理机构id",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": false,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "agencyDistrictCode",
                  "codePath": "commissionBasis.agency.agencyDistrictCode",
                  "column": "agency_district_code",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16191565369703080",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "代理机构区划编码",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": false,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "agencyUserType",
                  "codePath": "commissionBasis.agency.agencyUserType",
                  "column": "agency_user_type",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "1619156537473645",
                  "isBizField": 0,
                  "isRelationDb": 1,
                  "name": "代理机构用户类别",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": false,
                  "widget": "text",
                  "widgetOptions": {}
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16159660376255518",
              "isBizField": 0,
              "multi": 0,
              "name": "受托代理方信息",
              "skip": false,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16159660376255518",
            "isBizField": 0,
            "name": "受托代理方信息",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true,
            "widget": "subForm"
          }
        ],
        "help": "请开通浙政钉账号",
        "helpModal": {},
        "id": "16189728566174204",
        "isBizField": 0,
        "multi": 0,
        "name": "基本信息",
        "skip": true,
        "toolTips": "",
        "type": 3,
        "visible": true,
        "widget": "form",
        "widgetOptions": {
          "formGridBordered": true
        }
      },
      {
        "code": "commissionDemand",
        "codePath": "commissionDemand",
        "editAble": true,
        "fieldList": [
          {
            "addAble": true,
            "auditAble": false,
            "code": "projectRequirements",
            "codePath": "commissionDemand.projectRequirements",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "projectRequirements",
              "codePath": "commissionDemand.projectRequirements",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "coreProductName",
                  "codePath": "commissionDemand.projectRequirements.coreProductName",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163796140457128",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "核心产品名称",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "procurementMethod",
                  "codePath": "commissionDemand.projectRequirements.procurementMethod",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163796145081344",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "拟采用的采购方式",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "projectType",
                  "codePath": "commissionDemand.projectRequirements.projectType",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163796588881308",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "项目类型",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "valueDomain": "static",
                  "valueDomainDetail": "[{\"k\":\"货物\",\"v\":\"1\"},{\"k\":\"工程\",\"v\":\"2\"},{\"k\":\"服务\",\"v\":\"3\"}]",
                  "visible": true,
                  "widget": "radio",
                  "widgetOptions": {
                    "noWrap": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "purchaseBudget",
                  "codePath": "commissionDemand.projectRequirements.purchaseBudget",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163798862254054",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "采购预算（万元）",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "money-input",
                  "widgetOptions": {
                    "unit": "yuan",
                    "format": true,
                    "unitSetting": "noUnit"
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "component-4625",
                  "codePath": "commissionDemand.projectRequirements.component-4625",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16269376055184328",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "mapping": {},
                  "name": "是否专门面向中小企业采购",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "type": 1,
                  "validator": {},
                  "valueDomain": "static",
                  "valueDomainDetail": "[\n  {\n    \"k\": \"是\",\n    \"v\": \"1\"\n  },\n  {\n    \"k\": \"否\",\n    \"v\": \"2\"\n  }\n]",
                  "visible": true,
                  "widget": "select",
                  "widgetOptions": {
                    "search": "no",
                    "remoteParams": "key"
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "component-8321",
                  "codePath": "commissionDemand.projectRequirements.component-8321",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16269371731456860",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "mapping": {},
                  "name": "中小企业划分标准所属行业",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "colSpan": 1,
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "type": 1,
                  "validator": {},
                  "valueDomain": "static",
                  "valueDomainDetail": "[\n  {\n    \"k\": \"农、林、牧、渔业\",\n    \"v\": \"1\"\n  },\n  {\n    \"k\": \"工业\",\n    \"v\": \"2\"\n  },  {\n    \"k\": \"建筑业\",\n    \"v\": \"3\"\n  },  {\n    \"k\": \"批发业\",\n    \"v\": \"4\"\n  }\n]",
                  "visible": true,
                  "widget": "select",
                  "widgetOptions": {
                    "search": "no",
                    "remoteParams": "key"
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "component-9512",
                  "codePath": "commissionDemand.projectRequirements.component-9512",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "1626937980071880",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "中小企业预留份额执行措施",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "①将采购项目整体或者设置采购包专门面向中小企业采购； \n②要求供应商以联合体形式参加采购活动，且联合体中中小企业承担的部分达到     _____(比例)； \n③要求获得采购合同的供应商将采购项目中的_____(比例)分包给一家或者多家中小企业。\n",
                  "type": 1,
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "component-3630",
                  "codePath": "commissionDemand.projectRequirements.component-3630",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16269381593107414",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "小微企业报价扣除",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "对于经主管预算单位统筹后未预留份额专门面向中小企业采购的采购项目，以及预留份额项目中的非预留部分采购包，请贵单位明确对符合本办法规定的小微企业报价给予_____（6%—10%）（工程项目为 3%—5%）的扣除，用扣除后的价格参加评审。",
                  "type": 1,
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "component-6037",
                  "codePath": "commissionDemand.projectRequirements.component-6037",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16269383663957284",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "联合体或大中型企业报价扣除",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "对于接受大中型企业与小微企业组成联合体或者允许大中型企业向一家或者多家小微企业分包的采购项目，对于联合协议或者分包意向协议约定小微企业的合同份额占到合同总金额 30%以上的，请贵单位明确对联合体或者大中型企业的报价给予_____（2%-3%）（工程项目为 1%—2%）的扣除，用扣除后的价格参加评审",
                  "type": 1,
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16163795962511940",
              "isBizField": 0,
              "multi": 0,
              "name": "项目要求",
              "skip": false,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16163795962511940",
            "isBizField": 0,
            "name": "项目要求",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true,
            "widget": "subForm"
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "mainSubjectInformation",
            "codePath": "commissionDemand.mainSubjectInformation",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "mainSubjectInformation",
              "codePath": "commissionDemand.mainSubjectInformation",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "subjectName",
                  "codePath": "commissionDemand.mainSubjectInformation.subjectName",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163801072201212",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "标的名称",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "technicalAndServiceRequirements",
                  "codePath": "commissionDemand.mainSubjectInformation.technicalAndServiceRequirements",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163801367634320",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "技术及服务要求",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "importedProducts",
                  "codePath": "commissionDemand.mainSubjectInformation.importedProducts",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163801475658488",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "有无进口产品",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "valueDomain": "static",
                  "valueDomainDetail": "[{\"k\":\"有\",\"v\":\"1\"},{\"k\":\"无\",\"v\":\"0\"}]",
                  "visible": true,
                  "widget": "radio",
                  "widgetOptions": {
                    "noWrap": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "energySavingProducts",
                  "codePath": "commissionDemand.mainSubjectInformation.energySavingProducts",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163801770601612",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "有无政府强制采购节能产品",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "valueDomain": "static",
                  "valueDomainDetail": "[{\"k\":\"有\",\"v\":\"1\"},{\"k\":\"无\",\"v\":\"0\"}]",
                  "visible": true,
                  "widget": "radio",
                  "widgetOptions": {
                    "noWrap": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "quantity",
                  "codePath": "commissionDemand.mainSubjectInformation.quantity",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163820198934660",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "数量",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "number",
                  "widgetOptions": {}
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16163799987695744",
              "isBizField": 0,
              "multi": 1,
              "name": "主要标的信息",
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "gridForm",
              "widgetOptions": {
                "overflowX": false,
                "isObjectPanel": false,
                "showNo": false,
                "lineAdd": false,
                "isSub": true
              }
            },
            "id": "16163799987695744",
            "isBizField": 0,
            "name": "主要标的信息",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true,
            "widget": "gridForm",
            "widgetOptions": {
              "overflowX": false,
              "isObjectPanel": false,
              "showNo": false,
              "lineAdd": false,
              "isSub": true
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "supplierRequirements",
            "codePath": "commissionDemand.supplierRequirements",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "supplierRequirements",
              "codePath": "commissionDemand.supplierRequirements",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "bidderConditions",
                  "codePath": "commissionDemand.supplierRequirements.bidderConditions",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163795294835870",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "特定投标（报价）人条件",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "specificEligibilityRequirements",
                  "codePath": "commissionDemand.supplierRequirements.specificEligibilityRequirements",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163792459981520",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "特定资格要求",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "isConsortiumBidding",
                  "codePath": "commissionDemand.supplierRequirements.isConsortiumBidding",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163792602669152",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "是否允许联合体投标",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "valueDomain": "static",
                  "valueDomainDetail": "[{\"k\":\"是\",\"v\":\"1\"},{\"k\":\"否\",\"v\":\"0\"}]",
                  "visible": true,
                  "widget": "radio",
                  "widgetOptions": {
                    "noWrap": false
                  }
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16163792133303610",
              "isBizField": 0,
              "multi": 0,
              "name": "供应商要求",
              "skip": false,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16163792133303610",
            "isBizField": 0,
            "name": "供应商要求",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true,
            "widget": "subForm"
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "afterSalesService",
            "codePath": "commissionDemand.afterSalesService",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "afterSalesService",
              "codePath": "commissionDemand.afterSalesService",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "projectMaintenancePlan",
                  "codePath": "commissionDemand.afterSalesService.projectMaintenancePlan",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163794450322980",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "项目维护计划",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "response",
                  "codePath": "commissionDemand.afterSalesService.response",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163794454043210",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "响应情况",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "localizationServiceRequirements",
                  "codePath": "commissionDemand.afterSalesService.localizationServiceRequirements",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163794457025712",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "本地化服务要求",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "technicalTraining",
                  "codePath": "commissionDemand.afterSalesService.technicalTraining",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163794459366572",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "技术培训",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16163793916705572",
              "isBizField": 0,
              "multi": 0,
              "name": "售后服务",
              "skip": false,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16163793916705572",
            "isBizField": 0,
            "name": "售后服务",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true,
            "widget": "subForm"
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "performanceAbility",
            "codePath": "commissionDemand.performanceAbility",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "performanceAbility",
              "codePath": "commissionDemand.performanceAbility",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "technicalCapability",
                  "codePath": "commissionDemand.performanceAbility.technicalCapability",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163802930164548",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "公司技术能力情况",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "performanceRequirements",
                  "codePath": "commissionDemand.performanceAbility.performanceRequirements",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163802935255180",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "经验或业绩要求",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16163802825075686",
              "isBizField": 0,
              "multi": 0,
              "name": "履约能力",
              "skip": false,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16163802825075686",
            "isBizField": 0,
            "name": "履约能力",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true,
            "widget": "subForm"
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "projectImplementation",
            "codePath": "commissionDemand.projectImplementation",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "projectImplementation",
              "codePath": "commissionDemand.projectImplementation",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "supplyingTime",
                  "codePath": "commissionDemand.projectImplementation.supplyingTime",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163803828617412",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "供货时间（项目工期）",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "supplyLocation",
                  "codePath": "commissionDemand.projectImplementation.supplyLocation",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163803832138704",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "供货地点（项目地点）",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "paymentTerms",
                  "codePath": "commissionDemand.projectImplementation.paymentTerms",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163804289713884",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "付款条件",
                  "placeHolder": "明确是否需要履约保证金",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "paymentMethod",
                  "codePath": "commissionDemand.projectImplementation.paymentMethod",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163804676565382",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "付款方式",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "deliveryDate",
                  "codePath": "commissionDemand.projectImplementation.deliveryDate",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163804905084190",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "项目完工期或交货期",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "deliveryMethod",
                  "codePath": "commissionDemand.projectImplementation.deliveryMethod",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "1616380490708784",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "项目交付或执行方式",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "deliveryLocation",
                  "codePath": "commissionDemand.projectImplementation.deliveryLocation",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163804910085988",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "项目交付或执行地点",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "text",
                  "widgetOptions": {}
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "disputeResolution",
                  "codePath": "commissionDemand.projectImplementation.disputeResolution",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163805540368068",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "违约责任及争议解决方式",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "colSpan": 2,
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "code": "scoringStandardSuggestion",
                  "codePath": "commissionDemand.projectImplementation.scoringStandardSuggestion",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163805794175774",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "评分标准建议",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "colSpan": 2,
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "textarea",
                  "widgetOptions": {
                    "autoChange": false,
                    "maxLength": "500",
                    "autosize": false
                  }
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16163803630165762",
              "isBizField": 0,
              "multi": 0,
              "name": "项目执行",
              "skip": false,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16163803630165762",
            "isBizField": 0,
            "name": "项目执行",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true,
            "widget": "subForm"
          }
        ],
        "help": "",
        "helpModal": {},
        "id": "16189728635621676",
        "isBizField": 0,
        "multi": 0,
        "name": "需求描述",
        "skip": false,
        "toolTips": "",
        "type": 3,
        "visible": true,
        "widget": "form",
        "widgetOptions": {
          "formGridBordered": true
        }
      },
      {
        "code": "otherRequirements",
        "codePath": "otherRequirements",
        "editAble": true,
        "fieldList": [
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "requirementName",
            "codePath": "otherRequirements.requirementName",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16220162290555448",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "名称",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {},
            "visible": true,
            "widget": "text",
            "widgetOptions": {
              "showColumn": true,
              "isKey": false,
              "align": "left",
              "columnAuto": false
            }
          },
          {
            "addAble": true,
            "auditAble": false,
            "businessOptions": {},
            "code": "requirementContent",
            "codePath": "otherRequirements.requirementContent",
            "detailAble": false,
            "editAble": true,
            "helpModal": {},
            "id": "16220164578193732",
            "isBizField": 0,
            "isRelationDb": 0,
            "name": "描述",
            "requireDependencyFlag": 0,
            "required": false,
            "schemaDependencyFlag": 0,
            "style": {
              "wrapperCol": {
                "span": 18
              },
              "labelCol": {
                "span": 6
              }
            },
            "toolTips": "",
            "validator": {
              "maxLength": 3000
            },
            "visible": true,
            "widget": "textarea",
            "widgetOptions": {
              "showColumn": true,
              "isKey": false,
              "align": "left",
              "columnAuto": false,
              "autoChange": false,
              "maxLength": "500",
              "autosize": false
            }
          }
        ],
        "help": "",
        "helpModal": {},
        "id": "16220160705548700",
        "isBizField": 0,
        "multi": 1,
        "name": "其他需求",
        "toolTips": "",
        "type": 3,
        "visible": true,
        "widget": "gridForm",
        "widgetOptions": {
          "overflowX": false,
          "isObjectPanel": false,
          "showNo": false,
          "lineAdd": true,
          "isSub": false
        }
      },
      {
        "code": "attachments",
        "codePath": "attachments",
        "editAble": true,
        "fieldList": [
          {
            "addAble": true,
            "auditAble": false,
            "code": "container-7",
            "codePath": "attachments.container-7",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "container-7",
              "codePath": "attachments.container-7",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "purchasingRequirements",
                  "codePath": "attachments.container-7.purchasingRequirements",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163806630863052",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "采购需求文档",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "colSpan": 2,
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "oss-attachment-upload",
                  "widgetOptions": {
                    "showPreview": false,
                    "fileNum": 1,
                    "bizCode": "1099",
                    "isDestroyed": false,
                    "itemExtra": "格式为.doc或.docx",
                    "maxFileSize": 104857600,
                    "allowDownload": false,
                    "accept": ".doc,.docx"
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "smallEnterpriseConfirmLetter",
                  "codePath": "attachments.container-7.smallEnterpriseConfirmLetter",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16206365780919268",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "中小企业确认函",
                  "requireDependencyFlag": 0,
                  "required": true,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "colSpan": 2,
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "oss-attachment-upload",
                  "widgetOptions": {
                    "bizCode": "1024",
                    "itemExtra": "<a href=\"https://sitecdn.zcycdn.com/f2e-assets/c68e7c03-4559-4731-b2c4-8d34e9f65259.docx\">下载模板</a>",
                    "maxFileSize": 104857600
                  }
                },
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "otherDemandFile",
                  "codePath": "attachments.container-7.otherDemandFile",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163806756938084",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "其他需求附件1",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "colSpan": 2,
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "oss-attachment-upload",
                  "widgetOptions": {
                    "showPreview": false,
                    "bizCode": "1024",
                    "isDestroyed": false,
                    "itemExtra": " 其他附件可用于上传非word格式的需求清单(如工程类项目excel格式的需求清单)",
                    "maxFileSize": 104857600,
                    "allowDownload": false
                  }
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16209864569978296",
              "isBizField": 0,
              "multi": 0,
              "name": "采购需求文档",
              "skip": true,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16209864569978296",
            "isBizField": 0,
            "name": "采购需求文档",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true
          },
          {
            "addAble": true,
            "auditAble": false,
            "code": "container-2327",
            "codePath": "attachments.container-2327",
            "dataType": "object",
            "detailAble": false,
            "editAble": true,
            "form": {
              "code": "container-2327",
              "codePath": "attachments.container-2327",
              "editAble": true,
              "fieldList": [
                {
                  "addAble": true,
                  "auditAble": false,
                  "businessOptions": {},
                  "code": "purchaseFileStandard",
                  "codePath": "attachments.container-2327.purchaseFileStandard",
                  "detailAble": false,
                  "editAble": true,
                  "helpModal": {},
                  "id": "16163806890487444",
                  "isBizField": 0,
                  "isRelationDb": 0,
                  "name": "评分标准附件",
                  "requireDependencyFlag": 0,
                  "required": false,
                  "schemaDependencyFlag": 0,
                  "style": {
                    "colSpan": 2,
                    "wrapperCol": {
                      "span": 18
                    },
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "toolTips": "",
                  "validator": {},
                  "visible": true,
                  "widget": "oss-attachment-upload",
                  "widgetOptions": {
                    "bizCode": "1024",
                    "maxFileSize": 104857600
                  }
                }
              ],
              "help": "",
              "helpModal": {},
              "id": "16209864586602780",
              "isBizField": 0,
              "multi": 0,
              "name": "评分标准",
              "skip": true,
              "toolTips": "",
              "type": 3,
              "visible": true,
              "widget": "subForm",
              "widgetOptions": {
                "formGridBordered": true,
                "bordered": true
              }
            },
            "id": "16209864586602780",
            "isBizField": 0,
            "name": "评分标准",
            "requireDependencyFlag": 0,
            "required": true,
            "schemaDependencyFlag": 0,
            "toolTips": "",
            "visible": true
          }
        ],
        "help": "",
        "helpModal": {},
        "id": "16209864454075324",
        "isBizField": 0,
        "multi": 0,
        "name": "附件",
        "skip": false,
        "toolTips": "",
        "type": 3,
        "visible": true,
        "widget": "form",
        "widgetOptions": {
          "formGridBordered": true
        }
      }
    ],
    "id": "1392",
    "interaction": "[]",
    "interfaces": [],
    "moduleId": "61",
    "name": "委托单模板_测试用",
    "pageCode": "commission_order",
    "pageId": "3086",
    "property": "{\"pageId\":3086,\"name\":\"委托单管理\",\"code\":\"sv_hLSZPqXvEnSzM\",\"alias\":[]}",
    "secretKey": "noVerification",
    "status": 0,
    "tableName": "commission_order",
    "updateAt": 1618556393000,
    "version": "589"
  }
