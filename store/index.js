// Utils ==============================
const zeroPadding = (num, length = 2) => {
  const stringNumber = ('0000' + num).slice(-length)
  return stringNumber
}

// Vuex Modules ==============================
export const state = () => ({
  dateObj: {},
  isDesktop: true,
  isMobile: false,
})

export const getters = {
  YYYY: (state) => {
    const year = state.dateObj.getFullYear()
    return zeroPadding(year, 4)
  },
  MM: (state) => {
    // (January gives 0)
    const M = state.dateObj.getMonth() + 1
    return zeroPadding(M)
  },
  DD: (state) => {
    const D = state.dateObj.getDate()
    return zeroPadding(D)
  },
  hh: (state) => {
    const h = state.dateObj.getHours()
    return zeroPadding(h)
  },
  mm: (state) => {
    const m = state.dateObj.getMinutes()
    return zeroPadding(m)
  },
  ss: (state) => {
    const s = state.dateObj.getSeconds()
    return zeroPadding(s)
  },
}

export const mutations = {
  setDateObject: (state, dateObj) => {
    state.dateObj = dateObj
  },
  setFlagDesktop: (state) => {
    state.isDesktop = true
    state.isMobile = false
  },
  setFlagMobile: (state) => {
    state.isDesktop = false
    state.isMobile = true
  },
}

export const actions = {
  getDate({ commit }) {
    const date = new Date()
    commit('setDateObject', date)
  },
  setDeviceFlag({ commit }, bool) {
    if (bool) {
      // console.log('setDeviceFlag: isMobile')
      commit('setFlagMobile')
    } else {
      // console.log('setDeviceFlag: isDesktop')
      commit('setFlagDesktop')
    }
  },
}
