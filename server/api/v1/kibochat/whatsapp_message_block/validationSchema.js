exports.createPayload = {
  'type': 'object',
  'properties': {
    'module': {
      'type': 'string'
    },
    'payload': {
      'type': 'string'
    },
    'title': {
      'type': 'string'
    }
  },
  'required': [
    'module',
    'payload',
    'title'
  ]
}

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
