import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../App.vue'

describe('App.vue', () => {
  it('affiche le titre', () => {
    const wrapper = mount(App)
    expect(wrapper.find('h1').text()).toBe('Bienvenue sur AWS3')
  })

  it('affiche le nom', () => {
    const wrapper = mount(App)
    expect(wrapper.find('.neon-subtitle').text()).toContain('Mehdi Bellam')
  })

  it('affiche le bouton', () => {
    const wrapper = mount(App)
    expect(wrapper.find('button.neon-btn').exists()).toBe(true)
  })
  // eslint-disable-next-line vitest/no-commented-out-tests
  //   it('Le boutton n est pas activé', () => {
  //     const wrapper = mount(App)
  //     expect(wrapper.find('button.neon-btn').attributes('disabled')).toBeDefined()
  //   })
})
