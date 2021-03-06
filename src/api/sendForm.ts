import { HTTP } from './http'

interface IObjectKeys {
  [key: string]: string
}

interface IFormData extends IObjectKeys {
  name: string
  comment: string
}

export const sendForm = (formData:IFormData) => {
  const data:string = encode(formData)

  return HTTP('/', data, 'POST')
    .then(result => result)
    .catch(err => { 
      throw err
     })
}

function encode (data:IFormData) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}
