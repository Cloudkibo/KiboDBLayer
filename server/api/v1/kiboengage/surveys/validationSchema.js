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
    'title': {
      'type': 'string'
    },
    'description': {
      'type': 'string'
    },
    'userId': {
      'type': 'string'
    },
    'companyId': {
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
    'segmentationSurvey': {
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
    'isresponded': {
      'type': 'integer'
    }
  },
  'required': [
    'title',
    'description',
    'userId',
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
        'title': {
          'type': 'string'
        },
        'description': {
          'type': 'string'
        },
        'userId': {
          'type': 'string'
        },
        'companyId': {
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
        'segmentationSurvey': {
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
        'isresponded': {
          'type': 'integer'
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
        'title': {
          'type': 'string'
        },
        'description': {
          'type': 'string'
        },
        'userId': {
          'type': 'string'
        },
        'companyId': {
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
        'segmentationSurvey': {
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
        'isresponded': {
          'type': 'integer'
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

// Response Payloads
exports.responseCreate = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'response': {
      'type': 'string'
    },
    'surveyId': {
      'type': 'string'
    },
    'questionId': {
      'type': 'string'
    },
    'subscriberId': {
      'type': 'string'
    }
  },
  'required': [
    'response',
    'surveyId',
    'questionId',
    'subscriberId'
  ]
}

exports.responseQuery = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'response': {
          'type': ['string', 'object']
        },
        'pollId': {
          'type': ['string', 'object']
        },
        'questionId': {
          'type': ['string', 'object']
        },
        'subscriberId': {
          'type': ['string', 'object']
        }
      }
    }
  },
  'required': [
    'purpose',
    'match'
  ]
}

exports.responseUpdate = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'response': {
          'type': 'string'
        },
        'pollId': {
          'type': 'string'
        },
        'questionId': {
          'type': 'string'
        },
        'subscriberId': {
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

// Question Payloads
exports.questionCreate = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'statement': {
      'type': 'string'
    },
    'options': {
      'type': 'array',
      'items': {}
    },
    'type': {
      'type': 'string'
    },
    'surveyId': {
      'type': 'string'
    }
  },
  'required': [
    'statement',
    'options',
    'type',
    'surveyId'
  ]
}

exports.questionQuery = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'statement': {
          'type': 'string'
        },
        'options': {
          'type': 'array',
          'items': {}
        },
        'type': {
          'type': 'string'
        },
        'surveyId': {
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

exports.questionUpdate = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'statement': {
          'type': 'string'
        },
        'options': {
          'type': 'array',
          'items': {}
        },
        'type': {
          'type': 'string'
        },
        'surveyId': {
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
