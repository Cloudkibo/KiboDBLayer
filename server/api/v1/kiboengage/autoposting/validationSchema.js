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
    'userId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    },
    'accountTitle': {
      'type': 'string'
    },
    'subscriptionUrl': {
      'type': 'string'
    },
    'subscriptionType': {
      'type': 'string'
    },
    'accountUniqueName': {
      'type': 'string'
    },
    'payload': {
      'type': 'object'
    },
    'segmentationPageIds': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
    },
    'segmentationLocale': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
    },
    'segmentationGender': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
    },
    'segmentationTimeZone': {
      'type': 'string'
    },
    'segmentationTags': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
    }
  },
  'required': [
    'userId',
    'companyId',
    'accountTitle',
    'subscriptionUrl',
    'subscriptionType'
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
        'userId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'accountTitle': {
          'type': 'string'
        },
        'subscriptionUrl': {
          'type': 'string'
        },
        'subscriptionType': {
          'type': 'string'
        },
        'accountUniqueName': {
          'type': 'string'
        },
        'payload': {
          'type': 'object'
        },
        'isActive': {
          'type': 'boolean'
        },
        'actionType': {
          'type': 'string'
        },
        'isSegmented': {
          'type': 'boolean'
        },
        'segmentationPageIds': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'segmentationLocale': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'segmentationGender': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'segmentationTimeZone': {
          'type': 'string'
        },
        'segmentationTags': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
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
        'userId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'accountTitle': {
          'type': 'string'
        },
        'subscriptionUrl': {
          'type': 'string'
        },
        'subscriptionType': {
          'type': 'string'
        },
        'accountUniqueName': {
          'type': 'string'
        },
        'payload': {
          'type': 'object'
        },
        'isActive': {
          'type': 'boolean'
        },
        'actionType': {
          'type': 'string'
        },
        'isSegmented': {
          'type': 'boolean'
        },
        'segmentationPageIds': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'segmentationLocale': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'segmentationGender': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'segmentationTimeZone': {
          'type': 'string'
        },
        'segmentationTags': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
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
