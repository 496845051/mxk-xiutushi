import users from './users'
import task from './task'
import goods from './goods'
const api = {
  ...users,
  ...task,
  ...goods
}

// Vue.install(api)调用
const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.prototype.$API = api
}

export default {
  install
}
