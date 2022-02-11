import Card, { ICard } from '../models/Card'

interface IContent extends Array<ICard>{}

class ServiceHome {
  getHome (content:IContent) {
    const home = {
      contactAna: this.getCard(content, 'contact_ana'),
      contactDiego: this.getCard(content, 'contact_diego')
    }
    
    return home
  }

  getCard (content:IContent, component:string) : ICard | '' {
    if (!Array.isArray(content)) {
      return ''
    }
    
    const selectedComponent = content.find((o:ICard) => o.id === component)

    return selectedComponent ? new Card(selectedComponent) : ''
  }
}

export default new ServiceHome()
