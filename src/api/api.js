import { httpGet } from "./http";

// const base = 'https://cnodejs.org/api/v1';
const base = "http://localhost:3000";
// const ERR_OK = 200;

// 首页banner
export const getBanner = () => httpGet({ url: `${base}/banner` });

// 首页推荐歌单
export const getRecommendList = () => httpGet({ url: `${base}/personalized` });

export const getRecommendMusic = () => httpGet({ url: `${base}/personalized/newsong` });
