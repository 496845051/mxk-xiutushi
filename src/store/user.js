let user = {
  state: {
    user: {}
  },
  getters: {
    GET_USER (state) {
      return state.user
    }
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state) {
      state.user = {}
    }
  }
}
export default user
