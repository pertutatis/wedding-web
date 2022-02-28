import { mount } from '@vue/test-utils'
import Content from '../Content.vue'

const contentComponent = '[data-test-id="content"]'
const contentTitle = '[data-test-id="content-title"]'
const contentText = '[data-test-id="content-text"]'
const contentLink = '[data-test-id="content-link"]'

const title = 'Lorem ipsum'
const text = 'Lorem Ipsum dolor'
const linkUrl = '/lorem-ipsum'
const linkText = 'Link ipsum'

describe('Carrier Component', () => {
  const renderWrapper = (contentInfo) => {
    return mount(Content, {
      props: {
        ...contentInfo
      }
    })
  }

  it('Has content', () => {
    const wrapper = renderWrapper({title, text, linkUrl, linkText})

    const contentContentTitle = wrapper.find(contentTitle).text()
    const contentContentText = wrapper.find(contentText).text()
    const contentContentLink = wrapper.find(contentLink).text()
    
    expect(contentContentTitle).toBe(title)
    expect(contentContentText).toBe(text)
    expect(contentContentLink).toBe(linkText)
  })

  it('has link', () => {
    const wrapper = renderWrapper({title, text, linkUrl, linkText})

    const contentContentLink = wrapper.find(contentLink).exists()

    expect(contentContentLink).toBe(true)
  })

  it('has not link', () => {
    const wrapper = renderWrapper({title, text})

    const contentContentLink = wrapper.find(contentLink).exists()

    expect(contentContentLink).toBe(false)
  })
})
