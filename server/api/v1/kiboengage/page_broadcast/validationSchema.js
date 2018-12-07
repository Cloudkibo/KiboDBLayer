/*
This file will contain the validation schemas.
By separating it from controller, we are cleaning the code.
Now the middleware will automatically send error response if the payload fails
*/
// For express json validation
exports.createPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'pageId': {
      'type': 'string'
    },
    'userId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    },
    'subscriberId': {
      'type': 'string'
    },
    'broadcastId': {
      'type': 'string'
    },
    'seen': {
      'type': 'boolean'
    },
    'clicked': {
      'type': 'boolean'
    }
  },
  'required': [
    'pageId',
    'userId',
    'companyId',
    'subscriberId',
    'broadcastId',
    'seen'
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
      'type': 'object',
      'properties': {
        'pageId': {
          'type': 'string'
        },
        'userId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'subscriberId': {
          'type': 'string'
        },
        'broadcastId': {
          'type': 'string'
        },
        'datetime': {
          'type': 'string'
        },
        'seen': {
          'type': 'boolean'
        },
        'clicked': {
          'type': 'boolean'
        }
      }
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
      'type': 'object',
      'properties': {
        'pageId': {
          'type': 'string'
        },
        'userId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'subscriberId': {
          'type': 'string'
        },
        'broadcastId': {
          'type': 'string'
        },
        'datetime': {
          'type': 'string'
        },
        'seen': {
          'type': 'boolean'
        },
        'clicked': {
          'type': 'boolean'
        }
      }
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
