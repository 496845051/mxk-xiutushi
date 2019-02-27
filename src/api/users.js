import http from '../utils/http'
export default {
  login: function (params) {
    return http.POST('users/login', params)
  },
  register: function (params) {
    return http.POST('users/register', params)
  },
  getUserInfor: function (params) {
    return http.GET('users/get_retouchers', params)
  },
  editUserInfor: function (params) {
    return http.PUT('users/modify', params)
  }
}
