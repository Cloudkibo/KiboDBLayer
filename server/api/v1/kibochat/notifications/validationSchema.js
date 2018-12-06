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
    'message': {
      'type': 'string'
    },
    'agentId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    }
  },
  'required': [
    'message',
    'agentId',
    'companyId'
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
        'message': {
          'type': 'string'
        },
        'agentId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
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
        'message': {
          'type': 'string'
        },
        'agentId': {
          'type': 'string'
        },
        'companyId': {
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
