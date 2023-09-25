import request from './../utils/request'
import { useStore } from 'vuex'

export default (id: string | number): any => {
  // const store = useStore()
  // const isLogin = store.state.user.isLogin
  const isLogin = false
  return request({
    method: 'POST',
    url: !isLogin ? `/articles/getOne/getWXML/${id}` : `/articles/getOne/getWXML/${id}`
  })
}
