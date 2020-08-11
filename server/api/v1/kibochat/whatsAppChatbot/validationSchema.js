exports.createPayload = {}

exports.queryPayload = {
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string',
      'required': true
    },
    'match': {
      'type': 'object',
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

exports.updatePayload = {
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
