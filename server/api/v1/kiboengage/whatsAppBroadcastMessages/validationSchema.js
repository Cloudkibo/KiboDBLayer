exports.createPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'subscriberNumber': {
      'type': 'string'
    },
    'broadcastId': {
      'type': 'array'
    },
    'messageId': {
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
    'subscriberNumber',
    'broadcastId',
    'messageId',
    'userId',
    'companyId'
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
