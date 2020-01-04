import { mount } from '@vue/test-utils'
import VueToNuxtLogo from '@/components/Atom/VueToNuxtLogo/index.vue'

describe('VueToNuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(VueToNuxtLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
