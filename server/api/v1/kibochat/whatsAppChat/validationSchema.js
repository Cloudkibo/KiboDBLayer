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
      'type': 'object'
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
        },
        'senderNumber': {
          'type': 'string'
        },
        'format': {
          'type': 'string'
        }
      },
      'required': true
    },
    'sort': {
      'type': 'object'
    },
    'limit': {
      'type': 'integer'
    }
  }
}
exports.updatePayload =
{
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object'
    },
    'updated': {
      'type': 'object'
    }
  },
  'required': [
    'purpose',
    'match',
    'updated'
  ]
}
