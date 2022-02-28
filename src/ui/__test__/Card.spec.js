import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

const cardComponent = '[data-test-id="card"]'
const cardTitle = '[data-test-id="card-title"]'
const cardText = '[data-test-id="card-text"]'
const smallClass = 'card--small-card'

const title = 'Lorem ipsum'
const text = 'Lorem Ipsum dolor'

describe('Carrier Component', () => {
  const renderWrapper = (cardInfo) => {
    return mount(Card, {
      props: {
        ...cardInfo
      }
    })
  }

  it('Has content', () => {
    const wrapper = renderWrapper({title, text})

    const cardContentTitle = wrapper.find(cardTitle).text()
    const cardContentText = wrapper.find(cardText).text()

    expect(cardContentTitle).toBe(title)
    expect(cardContentText).toBe(text)
  })

  it('is small', () => {
    const wrapper = renderWrapper({title, text})

    const cardrendered = wrapper.find(cardComponent)

    expect(cardrendered.classes()).not.toContain(smallClass)
  })

  it('is big', () => {
    const wrapper = renderWrapper({title, text, isSmall: true})

    const cardrendered = wrapper.find(cardComponent)

    expect(cardrendered.classes()).toContain(smallClass)
  })
})
