import Card, { ICard } from '../models/Card'
import BankAccount, { IBankAccount } from '../models/BankAccount'

export interface IResponse extends Array<ICard|IBankAccount>{}

export interface IContent {
  bankAccount: IBankAccount | null,
  contactAna: ICard | null,
  contactDiego: ICard | null,
}

const cardComponents = ['contact_ana', 'contact_diego']

type cardcomponents = 'contact_ana' | 'contact_diego'
type bankComponents = 'bank_account'

class ServiceHome {
  getHome (content:IResponse) {
    const home:IContent = {
      bankAccount: this.getComponent(content, 'bank_account'),
      contactAna: this.getComponent(content, 'contact_ana'),
      contactDiego: this.getComponent(content, 'contact_diego'),
    }
    
    return home
  }
    
  getComponent(content:IResponse, component:cardcomponents) : ICard | null
  getComponent(content:IResponse, component:bankComponents) : IBankAccount | null
  getComponent(content:IResponse, component:string) : ICard | IBankAccount | null {
      if (!Array.isArray(content)) {
      return null
    }
    
    const selectedComponent = content.find((contentItem) => contentItem.id === component)
    
    if (selectedComponent && (selectedComponent.id == 'contact_ana' || selectedComponent.id == 'contact_diego')) {
      return new Card(selectedComponent)
    }

    if (selectedComponent && selectedComponent.id == 'bank_account') {
      return new BankAccount(selectedComponent)
    }

    return null
  }
}

export default new ServiceHome()
