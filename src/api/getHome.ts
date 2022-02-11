import { Storyblok } from './storyblock'
import serviceHome from '../domain/content/services/serviceHome'

const url = 'cdn/stories/home'

export default function getHome():{} {
  return Storyblok.get(url)
  .then(response => {
    return serviceHome.getHome(response.data.story.content.body)
  })
  .catch(error => { throw error })
}
