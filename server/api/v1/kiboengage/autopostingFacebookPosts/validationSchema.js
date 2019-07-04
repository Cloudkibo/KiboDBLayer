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
    'companyId': {
      'type': 'string'
    },
    'autopostingType': {
      'type': 'string'
    },
    'messageId': {
      'type': 'string'
    },
    'post': {
      'type': 'object'
    },
    'postId': {
      'type': 'string'
    },
    'autopostingId': {
      'type': 'string'
    },
    'likes': {
      'type': 'number'
    },
    'clicked': {
      'type': 'number'
    }
  },
  'required': [
    'pageId',
    'companyId',
    'autopostingType',
    'messageId',
    'post',
    'postId',
    'autopostingId'
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
        'pageId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'autopostingType': {
          'type': 'string'
        },
        'messageId': {
          'type': 'string'
        },
        'autopostingId': {
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
        'pageId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'autopostingType': {
          'type': 'string'
        },
        'messageId': {
          'type': 'string'
        },
        'post': {
          'type': 'object'
        },
        'autopostingId': {
          'type': 'string'
        },
        'likes': {
          'type': 'number'
        },
        'clicked': {
          'type': 'number'
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
