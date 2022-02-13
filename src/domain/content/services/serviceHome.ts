import Card, { cardComponents, ICard } from '../models/Card'
import BankAccount, { bankComponents, IBankAccount } from '../models/BankAccount'
import Content, { ContentComponents, IContent }  from '../models/Content'

export interface IResponse extends Array<ICard|IBankAccount|IContent>{}

export interface IHomeContent {
  // schdule section
  schedule: IContent | null,
  scheduleCeremony: ICard | null,
  scheduleCocktail: ICard | null,
  scheduleParty: ICard | null,
  scheduleResopon: ICard | null,
  busPopup: IContent | null,
  // How to arrive section
  howToArrive: IContent | null,
  // Music form
  reservation: IContent | null,
  // Contact section
  contact: IContent | null,
  contactAna: ICard | null,
  contactDiego: ICard | null,
  // bank closer
  bankAccount: IBankAccount | null,
}

const contentIds:Array<ContentComponents> = ['schedule', 'how_to_arrive', 'reservation', 'contact', 'bus_popup']
const cardIds:Array<cardComponents> = ['contact_ana', 'contact_diego', 'ceremonia', 'cocktail', 'fiesta', 'resopon']
const bankIds:Array<bankComponents> = ['bank_account']

class ServiceHome {
  getHome (content:IResponse) {
    const home:IHomeContent = {
      schedule: this.getComponent(content, 'schedule'),
      scheduleCeremony: this.getComponent(content, 'ceremonia'),
      scheduleCocktail: this.getComponent(content, 'cocktail'),
      scheduleParty: this.getComponent(content, 'fiesta'),
      scheduleResopon: this.getComponent(content, 'resopon'),
      busPopup: this.getComponent(content, 'bus_popup'),
      // How to arrive section
      howToArrive: this.getComponent(content, 'how_to_arrive'),
      // Music form
      reservation: this.getComponent(content, 'reservation'),
      // Contact section
      contact: this.getComponent(content, 'contact'),
      contactAna: this.getComponent(content, 'contact_ana'),
      contactDiego: this.getComponent(content, 'contact_diego'),
      // bank closer
      bankAccount: this.getComponent(content, 'bank_account'),
    }
    
    return home
  }
    
  getComponent(content:IResponse, component:cardComponents) : ICard | null
  getComponent(content:IResponse, component:bankComponents) : IBankAccount | null
  getComponent(content:IResponse, component:ContentComponents) : IContent | null
  getComponent(content:IResponse, component:string) : ICard | IBankAccount | IContent | null {
      if (!Array.isArray(content)) {
      return null
    }
    
    const selectedComponent = content.find((contentItem) => contentItem.id === component)

    const contentComponent = selectedComponent as IContent
    const cardComponent = selectedComponent as ICard
    const bankComponent = selectedComponent as IBankAccount

    if (selectedComponent && this.checkArray(contentIds, contentComponent.id)) {
      return new Content(contentComponent)
    }
    
    if (selectedComponent && this.checkArray(cardIds, cardComponent.id)) {
      return new Card(cardComponent)
    }

    if (selectedComponent && this.checkArray(bankIds, bankComponent.id)) {      
      return new BankAccount(bankComponent)
    }

    return null
  }

  checkArray (array:Array<string>, id:string) {
    let response = false
    
    array.forEach(component => {
      if (component == id) {
        response = true
        return
      }
    });

    return response
  }
}

export default new ServiceHome()
