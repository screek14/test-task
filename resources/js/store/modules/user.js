const state = {
  loggedIn: false,
  verify: false,
  registration: false,
  verifyCard: false
}

const getters = {
  getLoggedIn(state) {
    return state.loggedIn;
  },
  getVerify(state) {
    return state.verify;
  },
  getRegistration(state) {
    return state.registration;
  },
  getVerifyCard(state) {
    return state.verifyCard;
  }
}

const actions = {
  setLoggedIn({ commit }, status) {
    commit('setLoggedIn', status);
  },
  setVerify({ commit }, status) {
    commit('setVerify', status);
  },
  setRegistration({ commit }, status) {
    commit('setRegistration', status);
  },
  setVerifyCard({ commit }, status) {
    commit('setVerifyCard', status);
  },
  clearLogin({ commit }) {
    commit('clearLogin');
  }
}

const mutations = {
  setLoggedIn(state, status) {
    state.loggedIn = status;
  },
  setVerify(state, status) {
    state.verify = status;
  },
  setRegistration(state, status) {
    state.registration = status;
  },
  setVerifyCard(state, status) {
    state.verifyCard = status;
  },
  clearLogin(state) {
    state.loggedIn = false;
    state.verify = false;
    state.registration = false;
    state.verifyCard = false;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}