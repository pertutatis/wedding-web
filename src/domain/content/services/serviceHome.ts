import Card, { ICard } from '../models/Card'
import BankAccount, { IBankAccount } from '../models/BankAccount'

export interface IResponse extends Array<ICard|IBankAccount>{}

export interface IContent {
  contactAna: ICard | '',
  contactDiego: ICard | '',
  bankAccount: IBankAccount | ''
}

const cardcomponents = ['contact_ana', 'contact_diego']

class ServiceHome {
  getHome (content:IResponse) {
    const home:IContent = {
      bankAccount: this.getComponent(content, 'bank_account'),
      contactAna: this.getComponent(content, 'contact_ana'),
      contactDiego: this.getComponent(content, 'contact_diego'),
    }
    
    return home
  }
    
    getComponent(content:IResponse, component:string) {
      if (!Array.isArray(content)) {
      return ''
    }
    
    const selectedComponent = content.find((o:ICard|IBankAccount) => o.id === component)
    
    
    let cardComponent = selectedComponent as ICard;
    let bankComponent = selectedComponent as IBankAccount;
    
    if (selectedComponent && cardcomponents.includes(cardComponent.id)) {
      let card:ICard = new Card(cardComponent)
      return card
    }

    if (selectedComponent && bankComponent.id == 'bank_account') {
      let bank:IBankAccount = new BankAccount(bankComponent)
      return bank
    }

    return ''
  }

// getBankComponent(content:IResponse, component:string) : IBankAccount | '' {
//   if (!Array.isArray(content)) {
//     return ''
//   }
  
//   const selectedComponent = content.find((o) => o.id === component)

//   return selectedComponent ? new BankAccount(selectedComponent) : ''
// }

// getCard (content:IResponse, component:string) : ICard | '' {
//   if (!Array.isArray(content)) {
//     return ''
//   }
  
//   const selectedComponent = content.find((o:ICard|IBankAccount) => o.id === component)

//   return selectedComponent ? new Card(selectedComponent) : ''
// }
}

export default new ServiceHome()
