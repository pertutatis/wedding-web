import Card, { ICard } from '../models/Card'

export interface IResponse extends Array<ICard>{}

export interface IContent {
  contactAna: ICard | '',
  contactDiego: ICard | ''
}

class ServiceHome {
  getHome (content:IResponse) {
    const home:IContent = {
      contactAna: this.getCard(content, 'contact_ana'),
      contactDiego: this.getCard(content, 'contact_diego')
    }
    
    return home
  }

  getCard (content:IResponse, component:string) : ICard | '' {
    if (!Array.isArray(content)) {
      return ''
    }
    
    const selectedComponent = content.find((o:ICard) => o.id === component)

    return selectedComponent ? new Card(selectedComponent) : ''
  }
}

export default new ServiceHome()
