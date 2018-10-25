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
    'originalURL': {
      'type': 'string'
    },
    'subscriberId': {
      'type': 'array'
    },
    'module': {
      'type': 'object'
    }
  },
  'required': [
    'originalURL',
    'subscriberId',
    'module'
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
        'originalURL': {
          'type': 'string'
        },
        'subscriberId': {
          'type': 'array'
        },
        'module': {
          'type': 'object'
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
        'originalURL': {
          'type': 'string'
        },
        'subscriberId': {
          'type': 'array'
        },
        'module': {
          'type': 'object'
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
