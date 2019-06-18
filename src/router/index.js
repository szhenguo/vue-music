import Vue from "vue";
import Router from "vue-router";
// 路由组件
import Recommend from "../views/Recommend.vue"; // 推荐
import Rank from "../views/Rank.vue"; // 排行榜
import Singer from "../views/Singer.vue"; // 歌手

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      // 默认跳转到 recommend
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      component: Recommend
    },
    {
      path: "/rank",
      component: Rank
    },
    {
      path: "/singer",
      component: Singer
    }
  ]
});
