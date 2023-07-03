import { appConfig } from "../constants";

const { apiPrefix, appApiRoute } = appConfig;

// User Management API
export const authAPI = {
  login: `${apiPrefix}/client/login`,
  clientregister: `${apiPrefix}/client/register`,
};

export const configAPI = {
  aboutInfo: `${appApiRoute}/v1/app/info`,
};

export const customerAPI = {
  getallcustomers: `${apiPrefix}/customer/getallcustomers`,
  registercustomer: `${apiPrefix}/customer/registercustomer`,
};

export const storeAPI = {
  storeregister: `${apiPrefix}/store/register`,
};

export const productAPI = {
  getall: `${apiPrefix}/product/getall`,
  getproductbyid: `${apiPrefix}/product/get`,
  insert: `${apiPrefix}/jarentry/insert`,
  productinsert: `${apiPrefix}/product/insert`,
  getinandout: `${apiPrefix}/jarentry/getinandout`,
  getproductgivenperday: `${apiPrefix}/jarentry/getproductgivenperday`,
};

export const ordersAPI = {
  getallorder: `${apiPrefix}/order/getallorder`,
  getorderbyid: `${apiPrefix}/order/getorderbyid`,
  insert: `${apiPrefix}/order/insertorder`,
};

export const groupsAPI = {
  getallgroups: `${apiPrefix}/group/getallgroups`,
  getallgroupsbyid: `${apiPrefix}/group/getgroup`,
  deletegroupbyid: `${apiPrefix}/group/deletegroup`,
};
