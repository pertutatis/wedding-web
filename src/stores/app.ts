import { defineStore, acceptHMRUpdate } from 'pinia'
import getHome from '../api/getHome'
import { IHomeContent } from '../domain/content/services/serviceHome';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    content: null as IHomeContent | null,
  }),

  getters: {
    contact(state) {
      if (state.content === null || !state.content.contact) {
        return false
      }

      return state.content.contact
    },

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
    },

    schedule(state) {
      if (state.content === null || !state.content.schedule) {
        return false
      }

      return state.content.schedule
    },

    scheduleCeremony(state) {
      if (state.content === null || !state.content.scheduleCeremony) {
        return false
      }

      return state.content.scheduleCeremony
    },

    scheduleCocktail(state) {
      if (state.content === null || !state.content.scheduleCocktail) {
        return false
      }

      return state.content.scheduleCocktail
    },

    scheduleParty(state) {
      if (state.content === null || !state.content.scheduleParty) {
        return false
      }

      return state.content.scheduleParty
    },

    scheduleResopon(state) {
      if (state.content === null || !state.content.scheduleResopon) {
        return false
      }

      return state.content.scheduleResopon
    },

    howToArrive(state) {
      if (state.content === null || !state.content.howToArrive) {
        return false
      }

      return state.content.howToArrive
    },

    reservation(state) {
      if (state.content === null || !state.content.reservation) {
        return false
      }

      return state.content.reservation
    },
    
    busPopup(state) {
      if (state.content === null || !state.content.busPopup) {
        return false
      }

      return state.content.busPopup
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
