/*
 * @Author: litfa
 * @Date: 2022-03-17 17:17:05
 * @LastEditTime: 2022-04-17 17:24:02
 * @LastEditors: litfa
 * @Description: 格式化时间
 * @FilePath: /blog-miniprogram/src/utils/formatDate.ts
 * 
 */
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export default (date: number | string): string => {
  return dayjs(Number(date)).fromNow()
}