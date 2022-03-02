/*
 * @Author: litfa
 * @Date: 2022-03-02 18:39:33
 * @LastEditTime: 2022-03-02 20:32:08
 * @LastEditors: litfa
 * @Description: config
 * @FilePath: /blog-miniprogram/vite.config.ts
 * 
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// let path = require('path')
import path from 'path'
let stylePath = path.resolve(__dirname, './src/static/style/common.less') // common/common.less是less的路径
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      less: {
        globalVars: {
          "hack": `true; @import "${stylePath}"`
        }
      }
    }
  },
});
