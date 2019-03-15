exports.createPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'platform': {
      'type': 'string'
    },
    'payload': {
      'type': 'array'
    },
    'title': {
      'type': 'string'
    },
    'userId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    }
  },
  'required': [
    'platform',
    'payload',
    'title',
    'userId',
    'companyId',
    'phoneNumber'
  ]
}
