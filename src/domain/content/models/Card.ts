export type cardComponents = 'contact_ana' | 'contact_diego' | 'ceremonia' | 'cocktail' | 'fiesta' | 'resopon'

export interface ICard {
  id: cardComponents
  title: string
  text: string
}

export default class Card implements ICard {
  title: string
  text: string
  id: cardComponents
  constructor (card:ICard) {
    this.id = card.id
    this.title = card.title
    this.text = card.text || ''
  }
}
