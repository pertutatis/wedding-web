import { defineStore, acceptHMRUpdate } from 'pinia'
import getHome from '../api/getHome'
import { IContent } from '../domain/content/services/serviceHome';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    content: null as IContent | null,
  }),

  getters: {
    contactAna(state) {
      if (state.content === null || !state.content.contactAna) {
        return false
      }

      return state.content.contactAna
    },

    contactDiego(state) {
      if (state.content === null || !state.content.contactDiego) {
        return false
      }

      return state.content.contactDiego
    }
  },

  actions: {
    async getContent():Promise<void> {
      this.content = await getHome()
    },

    setContent() {
      
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
