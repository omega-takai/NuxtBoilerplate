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
  setFlagMobile: (state) => {
    state.isDesktop = false
    state.isTablet = false
    state.isMobile = true
  },
  setFlagTablet: (state) => {
    state.isDesktop = false
    state.isTablet = true
    state.isMobile = false
  },
  setFlagDesktop: (state) => {
    state.isDesktop = true
    state.isTablet = false
    state.isMobile = false
  },
}

export const actions = {
  setFlagMobile({ commit }) {
    commit('setFlagMobile')
  },
  setFlagTablet({ commit }) {
    commit('setFlagTablet')
  },
  setFlagDesktop({ commit }) {
    commit('setFlagDesktop')
  },
}
