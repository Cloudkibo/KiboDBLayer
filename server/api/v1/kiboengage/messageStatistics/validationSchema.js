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
    'featureName': {
      'type': 'string'
    },
    'messageCount': {
      'type': 'number'
    },
    'day': {
      'type': 'string'
    },
    'month': {
      'type': 'string'
    },
    'year': {
      'type': 'string'
    }
  },
  'required': [
    'featureName',
    'messageCount',
    'day',
    'month',
    'year'
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
        'featureName': {
          'type': 'string'
        },
        'messageCount': {
          'type': 'number'
        },
        'day': {
          'type': 'string'
        },
        'month': {
          'type': 'string'
        },
        'year': {
          'type': 'string'
        }
      },
      'required': true
    }
  }
}

exports.updatePayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'featureName': {
          'type': 'string'
        },
        'messageCount': {
          'type': 'number'
        },
        'day': {
          'type': 'string'
        },
        'month': {
          'type': 'string'
        },
        'year': {
          'type': 'string'
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
