exports.createPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'pageIds': {
      'type': 'array'
    },
    'userId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    },
    'feedUrl': {
      'type': 'string'
    },
    'title': {
      'type': 'string'
    },
    'storiesCount': {
      'type': 'number'
    },
    'subscriptions': {
      'type': 'number'
    },
    'defaultFeed': {
      'type': 'boolean'
    },
    'isActive': {
      'type': 'boolean'
    },
    'integrationType': {
      'type': 'string'
    }
  },
  'required': [
    'userId',
    'companyId',
    'pageIds',
    'title',
    'defaultFeed',
    'isActive',
    'integrationType'
  ]
}

exports.queryPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object'
    }
  },
  'required': [
    'purpose',
    'match'
  ]
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
