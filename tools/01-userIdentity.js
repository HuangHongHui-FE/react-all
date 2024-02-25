// 用户角色

const Code = {
  // 01 采购单位
  purchaser: '01',
  // 02 供应商
  supplier: '02',
  // 03 代理机构
  agency: '03',
  // 0301 集采机构
  centralizedAgency: '0301',
  // 04 专家
  expert: '04',
  // 05 政采个人角色
  personal: '05',
  // 06 采购监管 (在政采业务中是财政部门，在企采业务中是国资委)
  supervisor: '06',
  // 99 平台运营
  admin: '99',
};

class UserIdentity {
  get categoryName() {
    return window?.currentUserIdentity?.categoryName || '';
  }

  // 采购单位
  get isPurchaser() {
    return this.categoryName.startsWith(Code.purchaser);
  }

  // 供应商
  get isSupplier() {
    return this.categoryName.startsWith(Code.supplier);
  }

  // 代理机构
  get isAgency() {
    return this.categoryName.startsWith(Code.agency);
  }

  // 集采机构
  get isCentralizedAgency() {
    return this.categoryName.startsWith(Code.centralizedAgency);
  }

  // 专家
  get isExpert() {
    return this.categoryName.startsWith(Code.expert);
  }

  // 政采个人角色
  get isPersonal() {
    return this.categoryName.startsWith(Code.personal);
  }

  // 采购监管 (在政采业务中是财政部门，在企采业务中是国资委)
  get isSupervisor() {
    return this.categoryName.startsWith(Code.supervisor);
  }

  // 平台运营
  get isAdmin() {
    return this.categoryName.startsWith(Code.admin);
  }
}

const userIdentity = new UserIdentity();

export default userIdentity;





PURCHASER_UNIT("01", "采购单位"),

/**
 * 疫苗单位类型，与采购单位没有任何关系，编码是由于历史原因，为了复用采购单位的菜单导致的。
 */
VACCINE_UNIT("0104", "疫苗单位"),
VACCINE_PURCHASER_UNIT("010401", "疫苗预算单位"),
VACCINE_AUDIT_UNIT("010402", "疫苗审核单位"),
VACCINE_MONITOR_UNIT("010403", "疫苗监管单位"),
VACCINE_SUPPLIER("12", "疫苗供应商"),

/**
 * 02类别：供应商
 */
SUPPLIER("02", "供应商"),
TEMPORARY_SUPPLIER("0201", "临时供应商"),
PASSED_THE_FIRST_TRIAL_TEMPORARY_SUPPLIER("020101", "初审供应商"),
FORMAL_SUPPLIER("0202", "正式供应商"),
BRAND_SUPPLIER("020201", "品牌供应商"),
SUPERMARKET_SUPPLIER("020202", "超市供应商"),
AGREEMENT_FIXED_SUPPLIER("020203", "协议定点供应商"),
AGREEMENT_BRAND_SUPPLIER("020204", "协议品牌供货商"),

/**
 * 03类别：代理机构
 */
PROCUREMENT_AGENCY("03", "代理机构"),
CENTRALIZED_PROCUREMENT_AGENCY("0301", "集采机构"),
GOVERNMENT_CENTRALIZED_PROCUREMENT_AGENCY("030101", "政府集中采购机构"),
DEPARTMENT_CENTRALIZED_PROCUREMENT_AGENCY("030102", "部门集中采购机构"),
SOCIAL_AGENCY("0302", "社会中介机构"),
TEMPORARY_SOCIAL_AGENCY("030201", "临时中介机构"),
FORMAL_SOCIAL_AGENCY("030202", "正式中介机构"),
TEMPORARY_BRANCH_SOCIAL_AGENCY("030203", "临时分支机构"),
FORMAL_BRANCH_SOCIAL_AGENCY("030204", "正式分支机构"),
PUBLIC_TRADING_CENTER("030301", "公共资源交易中心"),
/**
 * 04类别：专家类型
 */
EVALUATION_EXPERT("04", "专家"),
TEMPORARY_EXPERT("0401", "临时专家"),
FORMAL_EXPERT("0402", "正式专家"),
VIRTUAL_EXPERT("0409", "采购人代表"),

/**
 * 05类别：政采个人角色
 */
GOV_ROLE_PERSONAL("05", "政采个人角色"),
PROJECT_INSPECT("0501", "项目资格审查"),
PROJECT_SUPERVISION("0502", "项目监督"),

/**
 * 06类别：监管角色
 */
FINANCIAL_DEPARTMENT("06", "财政部门"),
PROCUREMENT_REGULATORY_DEPARTMENT("0601", "采购监管处(科)"),
BUDGET_DEPARTMENT("0602", "预算执行局（处、科）"),
ECONOMIC_DEPARTMENT("0603", "经济建设处（科）"),
VEHICLE_MANAGEMENT_AGENCY("0605", "车辆管理机构"),
INDUSTRY_ASSOCIATION("0607", "行业协会"),

/**
 * 09类别：统一临时单位
 */
TEMP_PURCHASER_UNIT("0901", "临时采购单位"),

/**
 * 其他类别：管理员
 */
TENANT_ADMINISTRATOR("88", "行政区划管理"),
PLATFORM_OPERATION_ADMINISTRATOR("99", "平台运营"),

/**
 * 独立用户类别
 */
BRAND_DEALER("13", "品牌商"),
PEOPLE_BANK("14", "人民银行"),
AUDIT_NEW("15", "审计"),
ZLB_VACCINE("16", "浙里办疫苗用户"),
FINANCIAL("17", "金融机构用户"),
PERSONAL_BUYER("18", "个人用户"),
COOPERATIVE_PARTNER("19", "合作伙伴"),

/**
 * 独立子系统
 */
CAI_YUN("20", "采云学院");