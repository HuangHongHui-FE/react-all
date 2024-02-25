/* eslint-disable no-underscore-dangle */
import { getCookie } from 'src/utils';
import { getQueryParams } from 'src/utils/utils';
import { APP_CODE } from 'src/common/constants';

export const getAppCode = () => {
  const codeInUrl = getQueryParams(window.location?.search)?._app_ || '';
  const codeInCookie = getCookie('session_application_code') || '';
  return codeInUrl || codeInCookie;
};

class Env {
  // 当前应用
  get appCode() {
    return getAppCode();
  }
  // ---------- 单个应用的判断 ----------
  // 项目采购
  get isProcurement() {
    return this.appCode === APP_CODE.procurement;
  }
  // 项目采购-委托
  get isProcurementEntrust() {
    return this.appCode === APP_CODE.procurementEntrust;
  }
  // 项目采购-自行
  get isProcurementSelf() {
    return this.appCode === APP_CODE.procurementSelf;
  }
  // 框架协议
  get isFramework() {
    return this.appCode === APP_CODE.framework;
  }
  // 框架协议-委托
  get isFrameworkEntrust() {
    return this.appCode === APP_CODE.frameworkEntrust;
  }
  // 框架协议-自行
  get isFrameworkSelf() {
    return this.appCode === APP_CODE.frameworkSelf;
  }
  // ---------- 多个应用组合判断 ----------
  // 项目采购类应用
  get isProcurementApps() {
    return this.isProcurement || this.isProcurementEntrust || this.isProcurementSelf;
  }
  // 框架协议类应用
  get isFrameworkApps() {
    return this.isFramework || this.isFrameworkEntrust || this.isFrameworkSelf;
  }
  // 委托类应用
  get isEntrustApps() {
    return this.isProcurementEntrust || this.isFrameworkEntrust;
  }
  // 自行类应用
  get isSelfApps() {
    return this.isProcurementSelf || this.isFrameworkSelf;
  }
}

const env = new Env();

export default env;
