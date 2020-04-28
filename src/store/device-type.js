export const state = () => ({
  isDesktop: false,
  isTablet: false,
  isMobile: true,
})

export const getters = {}

export const mutations = {
  setDeviceFlag: (state, deviceType) => {
    state.isDesktop = deviceType === 'desktop'
    state.isTablet = deviceType === 'tablet'
    state.isMobile = deviceType === 'mobile'
  },
}

export const actions = {
  setFlagMobile({ commit }) {
    commit('setDeviceFlag', 'mobile')
  },
  setFlagTablet({ commit }) {
    commit('setDeviceFlag', 'tablet')
  },
  setFlagDesktop({ commit }) {
    commit('setDeviceFlag', 'desktop')
  },
}
