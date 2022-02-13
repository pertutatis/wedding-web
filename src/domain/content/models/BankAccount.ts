export type bankComponents = 'bank_account'

export interface IBankAccount {
  id: bankComponents
  account: string
  text: string
}

export default class BankAccount implements IBankAccount {
  id: bankComponents
  account: string
  text: string
  constructor (card:IBankAccount) {
    this.id = card.id
    this.account = card.account
    this.text = card.text
  }
}
