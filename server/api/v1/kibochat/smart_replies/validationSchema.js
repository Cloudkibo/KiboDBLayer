/*
This file will contain the validation schemas.
By separating it from controller, we are cleaning the code.
Now the middleware will automatically send error response if the payload fails
*/
// For express json validation
exports.createBotPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'pageId': {
      'type': 'string'
    },
    'userId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    },
    'botName': {
      'type': 'string'
    },
    'gcpPojectId': {
      'type': 'string'
    },
    'dialogFlowAgentId': {
      'type': 'string'
    },
    'hitCount': {
      'type': 'number'
    },
    'missCount': {
      'type': 'number'
    }
  },
  'required': [
    'pageId',
    'userId',
    'companyId',
    'botName',
    'gcpPojectId',
    'dialogFlowAgentId',
    'hitCount',
    'missCount'
  ]
}

exports.queryBotPayload = {
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
        'botName': {
          'type': 'string'
        },
        'gcpPojectId': {
          'type': 'string'
        },
        'dialogFlowAgentId': {
          'type': 'string'
        },
        'isActive': {
          'type': 'string'
        },
        'hitCount': {
          'type': 'integer'
        },
        'missCount': {
          'type': 'integer'
        }
      },
      'required': true
    }
  }
}

exports.updateBotPayload =
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
        'userId': {
          'type': 'string'
        },
        'companyId': {
          'type': 'string'
        },
        'botName': {
          'type': 'string'
        },
        'witAppId': {
          'type': 'string'
        },
        'witToken': {
          'type': 'string'
        },
        'witAppName': {
          'type': 'string'
        },
        'isActive': {
          'type': 'string'
        },
        'payload': {
          'type': 'array',
          'items': [
            {
              'type': 'object',
              'properties': {
                'questions': {
                  'type': 'array',
                  'items': [
                    {
                      'type': 'string'
                    }
                  ]
                },
                'answer': {
                  'type': 'string'
                },
                'intent_name': {
                  'type': 'string'
                },
                'videoLink': {
                  'type': 'string'
                }
              },
              'required': [
                'questions',
                'answer',
                'intent_name',
                'videoLink'
              ]
            }
          ]
        },
        'hitCount': {
          'type': 'integer'
        },
        'missCount': {
          'type': 'integer'
        },
        'blockedSubscribers': {
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

// Answer payloads
exports.createAnswerPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'botId': {
      'type': 'string'
    },
    'intentId': {
      'type': 'string'
    },
    'questions': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
    },
    'answer': {
      'type': 'string'
    }
  },
  'required': [
    'botId',
    'intentId',
    'questions',
    'answer'
  ]
}

exports.queryAnswerPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'botId': {
          'type': 'string'
        },
        'intentId': {
          'type': 'string'
        },
        'questions': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'answer': {
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

exports.updateAnswerPayload =
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
        'botId': {
          'type': 'string'
        },
        'intentId': {
          'type': 'string'
        },
        'questions': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'answer': {
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

// unanswered payloads
exports.createUnansweredPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'botId': {
      'type': 'string'
    },
    'intentId': {
      'type': 'string'
    },
    'Question': {
      'type': 'string'
    },
    'Confidence': {
      'type': 'number'
    }
  },
  'required': [
    'botId',
    'Question'
  ]
}

exports.queryUnansweredPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'botId': {
          'type': 'string'
        },
        'intentId': {
          'type': 'string'
        },
        'Question': {
          'type': 'string'
        },
        'Confidence': {
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

exports.updateUnansweredPayload =
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
        'botId': {
          'type': 'string'
        },
        'intentId': {
          'type': 'string'
        },
        'Question': {
          'type': 'string'
        },
        'Confidence': {
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

// waiting sub payloads
exports.createWaitingPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'botId': {
      'type': 'string'
    },
    'subscriberId': {
      'type': 'object'
    },
    'pageId': {
      'type': 'object'
    },
    'intentId': {
      'type': 'string'
    },
    'question': {
      'type': 'string'
    }
  },
  'required': [
    'botId',
    'subscriberId',
    'pageId',
    'intentId',
    'question'
  ]
}

exports.queryWaitingPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'anyOf': [
        {'type': 'object'},
        {'type': 'array'}
      ]
    }
  },
  'required': [
    'purpose',
    'match'
  ]
}

exports.updateWaitingPayload =
{
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object'
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
