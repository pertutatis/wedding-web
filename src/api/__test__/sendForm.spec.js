import HTTP from '../http'
import { sendForm } from '../sendForm'

jest.mock('../http', () => ({
  HTTP: (endpoint, body, method) => {
    if (body.includes('form-name=error')) {
      return Promise.reject('Form has errors')
    }
    return Promise.resolve('received')
  }
}));

const formName = 'bus-request'
const name = 'test'
const seats = '2'
const origin = 'valencia'
const comment = ''

const requestBody = [
  '/', 
  `form-name=${formName}&name=${name}&seats=${seats}&origin=${origin}&comment=${comment}`, 
  'POST'
]

describe('api', () => {
  it('gets a response', async () => {
    const sendResponse = await sendForm({
      'form-name': formName,
      name,
      seats,
      origin,
      comment,
    })
    
    expect(sendResponse).toStrictEqual(expect.any(String))
  })

  it('gets an error', async () => {
    try {
      const sendResponse = await sendForm({
        'form-name': 'error',
        name,
        seats,
        origin,
        comment,
      })

      // fails if request does not fail
      expect(sendResponse).toStrictEqual(false)
    } catch (error) {
      expect(error).toStrictEqual(expect.any(String))
    }  
  })

  it('formats the body', async () => {
    const RequestSpy = jest.spyOn(HTTP, 'HTTP')

    await sendForm({
      'form-name': formName,
      name,
      seats,
      origin,
      comment,
    })
    
    expect(RequestSpy).toHaveBeenCalledWith(...requestBody);
  })
})
