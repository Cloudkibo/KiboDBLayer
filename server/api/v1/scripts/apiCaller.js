const requestPromise = require('request-promise')
const config = require('../../../config/environment/index')

exports.callApi = (endpoint, method = 'get', body, type, token) => {
  let headers
  if (token && token !== '') {
    headers = {
      'content-type': 'application/json',
      'Authorization': token
    }
  } else {
    headers = {
      'content-type': 'application/json',
      'is_kibo_product': true
    }
  }
  let apiUrl = config.api_urls[type]
  let options = {
    method: method.toUpperCase(),
    uri: `${apiUrl}/${endpoint}`,
    headers,
    body,
    json: true
  }
  return requestPromise(options).then(response => {
    return new Promise((resolve, reject) => {
      if (response.status === 'success') {
        resolve(response.payload)
      } else {
        reject(response.payload)
      }
    })
  })
}
