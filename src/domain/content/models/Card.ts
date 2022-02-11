export interface ICard {
  id: string
  title: string
  text: string
}

export default class Card implements ICard {
  title: string
  text: string
  id: string
  constructor (card:ICard) {
    this.id = card.id
    this.title = card.title
    this.text = card.text || ''
  }
}
