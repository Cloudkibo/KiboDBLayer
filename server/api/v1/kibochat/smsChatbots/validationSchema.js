exports.createPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'companyId': {
      'type': 'string'
    },
    'userId': {
      'type': 'string'
    },
    'title': {
      'type': 'string'
    },
    'vertical': {
      'type': 'string'
    },
    'triggers': {
      'type': 'array'
    },
    'published': {
      'type': 'bool'
    },
    'integration': {
      'type': 'string'
    },
    'numberOfProducts': {
      'type': 'number'
    },
    'catalog': {
      'type': 'object'
    },
    'testSubscribers': {
      'type': 'array'
    }
  },
  'required': [
    'companyId',
    'userId',
    'title',
    'vertical',
    'published',
    'integration'
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
