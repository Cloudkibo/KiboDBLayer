exports.searchPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'companyId': {
      'type': 'string',
      'required': true
    },
    '$text': {
      'type': 'object',
      'required': true
    },
    'contactId': {
      'type': 'string',
      'required': true
    }
  }
}

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
        }
      },
      'required': true
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
