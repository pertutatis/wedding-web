import StoryblokClient from 'storyblok-js-client';

export const Storyblok = new StoryblokClient({
  accessToken: 'QrGQXYvpwTA3ujnHNbSjngtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})
