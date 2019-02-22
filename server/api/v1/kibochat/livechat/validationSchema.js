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
    'format': {
      'type': 'string'
    },
    'sender_id': {
      'type': 'string'
    },
    'recipient_id': {
      'type': 'string'
    },
    'sender_fb_id': {
      'type': 'string'
    },
    'recipient_fb_id': {
      'type': 'string'
    },
    'session_id': {
      'type': 'string'
    },
    'company_id': {
      'type': 'string'
    },
    'status': {
      'type': 'string'
    },
    'replied_by': {
      'type': 'object'
    },
    'payload': {
      'type': 'object'
    }
  },
  'required': [
    'sender_id',
    'recipient_id',
    'sender_fb_id',
    'recipient_fb_id',
    'session_id',
    'company_id',
    'status',
    'payload'
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
          'type': 'string',
          'required': true
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
        'format': {
          'type': 'string'
        },
        'sender_id': {
          'type': 'string'
        },
        'recipient_id': {
          'type': 'string'
        },
        'sender_fb_id': {
          'type': 'string'
        },
        'recipient_fb_id': {
          'type': 'string'
        },
        'session_id': {
          'type': 'string'
        },
        'company_id': {
          'type': 'string'
        },
        'status': {
          'type': 'string'
        },
        'replied_by': {
          'type': 'string'
        },
        'payload': {
          'type': 'array'
        },
        'url_meta': {
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
