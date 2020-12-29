exports.createPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'companyId': {
      'type': 'string'
    },
    'platform': {
      'type': 'string'
    },
    'alertChannel': {
      'type': 'string'
    },
    'channelId': {
      'type': 'boolean'
    },
    'userName': {
      'type': 'number'
    },
    'profilePic': {
      'type': 'string'
    }
  },
  'required': [
    'companyId',
    'platform',
    'alertChannel',
    'channelId',
    'userName',
    'profilePic'
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
