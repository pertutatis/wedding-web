export const HTTP = (url:string, body:string, method:string) => {
  return fetch(url, {
    method,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  })
  .then(response => {
    return response.body ? response.body : response;
  })
  .catch(err => { throw err })
}
