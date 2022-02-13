export type ContentComponents = 'schedule' | 'how_to_arrive' | 'reservation' | 'contact' | 'bus_popup'

export interface IContent {
    id: ContentComponents
    title: string
    text: string
    link_url?: string
    link_text?: string
}

export default class Content implements IContent {
    title: string
    text: string
    id: ContentComponents
    link_url?: string
    link_text?: string
    constructor (content:IContent) {
        this.id = content.id
        this.title = content.title
        this.text = content.text
        this.link_url = content.link_url || ''
        this.link_text = content.link_text || ''
    }
  }
  