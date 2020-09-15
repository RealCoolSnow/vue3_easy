/*
 * @Description:
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-14 16:19:45
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-14 18:43:19
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./locale";
import "normalize.css/normalize.css";

createApp(App)
  .use(router)
  .use(i18n)
  .mount("#app");
