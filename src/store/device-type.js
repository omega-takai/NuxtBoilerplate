export const state = () => ({
  isDesktop: false,
  isTablet: false,
  isMobile: true,
  isLandscape: false,
  isPortrait: true,
})

export const getters = {}

export const mutations = {
  setDeviceFlag: (state, deviceType) => {
    state.isDesktop = deviceType === 'desktop'
    state.isTablet = deviceType === 'tablet'
    state.isMobile = deviceType === 'mobile'
  },
  setLandscapeFlag: (state) => {
    state.isLandscape = true
    state.isPortrait = false
  },
  setPortraitFlag: (state) => {
    state.isLandscape = false
    state.isPortrait = true
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
  setFlagLandscape({ commit }, isLandscape) {
    if (isLandscape) {
      commit('setLandscapeFlag')
    } else {
      commit('setPortraitFlag')
    }
  },
}
