/*
 * @Author: litfa
 * @Date: 2022-05-03 16:30:59
 * @LastEditTime: 2022-05-03 16:31:16
 * @LastEditors: litfa
 * @Description: 扫码
 * @FilePath: /blog-miniprogram/src/utils/scanCode.ts
 * 
 */
export default () => uni.scanCode({
  success(e) {
    console.log(e);
    if (e.path) uni.redirectTo({
      url: '/' + e.path
    })
  }
})