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
    'platform': {
      'type': 'string'
    },
    'payload': {
      'type': 'array'
    },
    'title': {
      'type': 'string'
    },
    'text': {
      'type': 'string'
    },
    'fileurl': {
      'type': 'string'
    },
    'attachmentType': {
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
    },
    'isList': {
      'type': 'boolean'
    },
    'segmentationList': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
    },
    'userId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    }
  },
  'required': [
    'platform',
    'payload',
    'title',
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
      'properties': {
        'companyId': {
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
        'platform': {
          'type': 'string'
        },
        'payload': {
          'type': 'array'
        },
        'title': {
          'type': 'string'
        },
        'text': {
          'type': 'string'
        },
        'fileurl': {
          'type': 'string'
        },
        'attachmentType': {
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
        },
        'isList': {
          'type': 'boolean'
        },
        'segmentationList': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'clicks': {
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
