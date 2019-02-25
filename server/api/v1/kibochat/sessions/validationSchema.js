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
    'subscriber_id': {
      'type': 'string'
    },
    'page_id': {
      'type': 'string'
    },
    'company_id': {
      'type': 'string'
    },
    'assigned_to': {
      'type': 'object'
    },
    'agent_activity_time': {
      'type': 'string'
    }
  },
  'required': [
    'subscriber_id',
    'page_id',
    'company_id'
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
        'company_id': {
          'type': 'string'
        },
        'assigned_to': {
          'type': 'object'
        },
        'agent_activity_time': {
          'type': 'string'
        }
      },
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
      'type': 'object',
      'properties': {
        'subscriber_id': {
          'type': 'string'
        },
        'page_id': {
          'type': 'string'
        },
        'company_id': {
          'type': 'string'
        },
        'assigned_to': {
          'type': 'object'
        },
        'agent_activity_time': {
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
