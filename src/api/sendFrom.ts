import { HTTP } from './http'

interface IFormData {
  name: string
  comment: string
}

export const sendForm = (formData:IFormData) => {
  return HTTP('/', formData)
    .then(result => {
      console.log(result);
      
    })
    .catch(err => { throw err })

}
