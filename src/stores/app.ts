import { defineStore, acceptHMRUpdate } from 'pinia'
import getHome from '../api/getHome'
import { IHomeContent } from '../domain/content/services/serviceHome';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    content: null as IHomeContent | null,
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
    },

    bankAccount(state) {
      if (state.content === null || !state.content.bankAccount) {
        return false
      }

      return state.content.bankAccount
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
