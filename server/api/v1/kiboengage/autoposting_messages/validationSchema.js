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
    'autoposting_type': {
      'type': 'string'
    },
    'message_id': {
      'type': 'string'
    },
    'autopostingId': {
      'type': 'string'
    },
    'sent': {
      'type': 'number'
    },
    'seen': {
      'type': 'number'
    },
    'clicked': {
      'type': 'number'
    }
  },
  'required': [
    'pageId',
    'companyId',
    'autoposting_type',
    'message_id',
    'autopostingId',
    'sent',
    'seen',
    'clicked'
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
        'page_fb_id': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string',
          'required': true
        },
        'autoposting_type': {
          'type': 'string'
        },
        'message_id': {
          'type': 'string'
        },
        'autopostingId': {
          'type': 'string'
        },
        'sent': {
          'type': 'number'
        },
        'seen': {
          'type': 'number'
        },
        'clicked': {
          'type': 'number'
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
        'page_fb_id': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'autoposting_type': {
          'type': 'string'
        },
        'message_id': {
          'type': 'string'
        },
        'autopostingId': {
          'type': 'string'
        },
        'sent': {
          'type': 'number'
        },
        'seen': {
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

// Subscriber Messages Payloads
exports.subscriberMessagesCreate = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'pageId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    },
    'autopostingId': {
      'type': 'string'
    },
    'autoposting_messages_id': {
      'type': 'string'
    },
    'subscriberId': {
      'type': 'string'
    }
  },
  'required': [
    'pageId',
    'companyId',
    'autopostingId',
    'autoposting_messages_id',
    'subscriberId'
  ]
}

exports.subscriberMessagesQuery = {
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
          'type': 'string',
          'required': true
        },
        'autopostingId': {
          'type': 'string'
        },
        'autoposting_messages_id': {
          'type': 'string'
        },
        'subscriberId': {
          'type': 'string'
        }
      },
      'required': true
    }
  }
}

exports.subscriberMessagesUpdate = {
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
        'autopostingId': {
          'type': 'string'
        },
        'autoposting_messages_id': {
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
