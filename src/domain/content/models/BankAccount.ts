export interface IBankAccount {
  id: string
  account: string
  text: string
}

export default class BankAccount implements IBankAccount {
  id: string
  account: string
  text: string
  constructor (card:IBankAccount) {
    this.id = card.id
    this.account = card.account
    this.text = card.text
  }
}
