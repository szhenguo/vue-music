import { httpGet } from "./http";

// const base = 'https://cnodejs.org/api/v1';
const base = "http://localhost:3000";
// const ERR_OK = 200;

// 首页列表详情
export const getBanner = () => httpGet({ url: `${base}/banner` });
