// Utils ==============================
// const zeroPadding = (num, length = 2) => {
//   const stringNumber = ('0000' + num).slice(-length)
//   return stringNumber
// }

// Vuex Modules ==============================
export const state = () => ({
  isDesktop: false,
  isTablet: false,
  isMobile: true,
  repositoryUrl: 'https://github.com/t--takai/VueBoilerplate',
  author: {
    name: 'Tomonari Takai',
    position: 'UI Designer / Front-end Engineer',
    twitterUrl: 'https://twitter.com/TomonariTakai',
  },
  sitemap: [
    {
      name: 'HOME',
      path: '/',
    },
    {
      name: 'OTHER PAGE',
      path: '/OtherPage',
    },
  ],
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
