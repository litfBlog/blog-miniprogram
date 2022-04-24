/*
 * @Author: litfa
 * @Date: 2022-04-23 18:32:16
 * @LastEditTime: 2022-04-24 20:08:07
 * @LastEditors: litfa
 * @Description: main
 * @FilePath: /blog-miniprogram/src/main.ts
 * 
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
import store from './store'
export function createApp() {
  const app = createSSRApp(App);
  app.use(store)
  return {
    app,
  };
}
