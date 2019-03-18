exports.createPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'senderNumber': {
      'type': 'string'
    },
    'recipientNumber': {
      'type': 'string'
    },
    'contactId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    },
    'payload': {
      'type': 'string'
    }
  },
  'required': [
    'senderNumber',
    'recipientNumber',
    'contactId',
    'companyId',
    'payload'
  ]
}

exports.queryPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string',
      'required': true
    },
    'match': {
      'type': 'object',
      'properties': {
        'companyId': {
          'type': 'string',
          'required': true
        }
      },
      'required': true
    }
  }
}
