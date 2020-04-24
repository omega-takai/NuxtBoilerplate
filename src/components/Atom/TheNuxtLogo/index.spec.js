import { mount } from '@vue/test-utils'
import TheNuxtLogo from './index.vue'

describe('TheNuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheNuxtLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
