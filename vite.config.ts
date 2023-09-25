import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

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
          hack: `true; @import "${stylePath}"`
        }
      }
    }
  }
})
