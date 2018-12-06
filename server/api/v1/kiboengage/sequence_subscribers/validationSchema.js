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
    'subscriberId': {
      'type': 'string'
    },
    'sequenceId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    },
    'status': {
      'type': 'string'
    }
  },
  'required': [
    'subscriberId',
    'sequenceId',
    'companyId',
    'status'
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
        'subscriberId': {
          'type': 'string'
        },
        'sequenceId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'status': {
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
        'subscriberId': {
          'type': 'string'
        },
        'sequenceId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'status': {
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

// Response Payloads
exports.messageCreate = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'subscriberId': {
      'type': 'string'
    },
    'messageId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    }
  },
  'required': [
    'subscriberId',
    'messageId',
    'companyId'
  ]
}

exports.messageQuery = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'subscriberId': {
          'type': 'string'
        },
        'messageId': {
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

exports.messageUpdate = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'subscriberId': {
          'type': 'string'
        },
        'messageId': {
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
