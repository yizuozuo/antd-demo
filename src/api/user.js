import request from '@/utils/request'

const ajax = request({
  module: 'user'
})

/**
 * @param {String} name 账户名
 * @param {String} password 账户密码
 */

 export function loginIn(name, password) {
   return ajax({
     url: '/login/login',
     method: 'POST',
     data: {
      name,
      password
     }
   })
 }
