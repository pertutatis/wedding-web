import StoryblokClient from 'storyblok-js-client';

export const Storyblok = new StoryblokClient({
  // peding: add to env file
  accessToken: 'QrGQXYvpwTA3ujnHNbSjngtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})
