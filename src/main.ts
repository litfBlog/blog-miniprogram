/*
 * @Author: litfa
 * @Date: 2022-04-23 18:32:16
 * @LastEditTime: 2022-04-25 14:53:58
 * @LastEditors: litfa
 * @Description: main
 * @FilePath: /blog-miniprogram/src/main.ts
 * 
 */
import { createSSRApp } from "vue"
import App from "./App.vue"
import * as Pinia from 'pinia'

export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  return {
    app,
    Pinia
  };
}
