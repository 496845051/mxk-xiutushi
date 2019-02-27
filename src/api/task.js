import http from '../utils/http'
export default {
  getTask: function (params) {
    return http.GET('task/get_tasks', params)
  },

  getAllTask: function (params) {
    return http.GET('task/query_tasks', params)
  },

  addTask: function (params) {
    return http.POST('task/add_tasks', params)
  },

  deleteTask: function (params) {
    return http.DELETE('task/delete_tasks', params)
  }
}
