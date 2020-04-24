import { mount } from '@vue/test-utils'
import VueToNuxtLogo from './index.vue'

describe('VueToNuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(VueToNuxtLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
