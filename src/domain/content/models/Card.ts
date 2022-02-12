export interface ICard {
  id: 'contact_ana' | 'contact_diego'
  title: string
  text: string
}

export default class Card implements ICard {
  title: string
  text: string
  id: 'contact_ana' | 'contact_diego'
  constructor (card:ICard) {
    this.id = card.id
    this.title = card.title
    this.text = card.text || ''
  }
}
