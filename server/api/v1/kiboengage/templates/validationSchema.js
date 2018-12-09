/*
This file will contain the validation schemas.
By separating it from controller, we are cleaning the code.
Now the middleware will automatically send error response if the payload fails
*/
// For express json validation

//                             =======================category payloads============================

exports.createCategoryPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string'
    },
    'userId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    }
  },
  'required': [
    'name',
    'userId',
    'companyId'
  ]
}

exports.queryCategoryPayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object',
      'properties': {
        'name': {
          'type': 'string'
        },
        'userId': {
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

exports.updateCategoryPayload =
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
        'name': {
          'type': 'string'
        },
        'userId': {
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

//                             =======================BOT TEMPLATE PAYLOADS============================

exports.createBotTemplatePayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'title': {
      'type': 'string'
    },
    'category': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
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
            }
          },
          'required': [
            'questions',
            'answer',
            'intent_name'
          ]
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
    'title',
    'category',
    'payload',
    'userId',
    'companyId'
  ]
}

exports.queryBotTemplatePayload = {
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
        'category': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
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
                }
              },
              'required': [
                'questions',
                'answer',
                'intent_name'
              ]
            }
          ]
        },
        'userId': {
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

exports.updateBotTemplatePayload =
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
        'category': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
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
                }
              },
              'required': [
                'questions',
                'answer',
                'intent_name'
              ]
            }
          ]
        },
        'userId': {
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

//                             =======================broadcast template payloads============================

exports.createBroadcastTemplatePayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'title': {
      'type': 'string'
    },
    'category': {
      'type': 'array'
    },
    'payload': {
      'type': 'array'
    },
    'userId': {
      'type': 'string'
    },
    'companyId': {
      'type': 'string'
    }
  },
  'required': [
    'title',
    'category',
    'payload'
  ]
}

exports.queryBroadcastTemplatePayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object'
    }
  },
  'required': [
    'purpose',
    'match'
  ]
}

exports.updateBroadcastPayload =
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
        'category': {
          'type': 'array'
        },
        'payload': {
          'type': 'array'
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

//                             =======================poll template payloads============================

exports.createPollTemplatePayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'title': {
      'type': 'string'
    },
    'statement': {
      'type': 'string'
    },
    'options': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
    },
    'category': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
    }
  },
  'required': [
    'title',
    'statement',
    'options',
    'category'
  ]
}
exports.queryPollTemplatePayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object'
    }
  },
  'required': [
    'purpose',
    'match'
  ]
}

exports.updatePollTemplatePayload =
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
        'statement': {
          'type': 'string'
        },
        'options': {
          'type': 'array',
          'items': [
            {
              'type': 'string'
            }
          ]
        },
        'category': {
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

//                             =======================Survey Question Template============================

exports.createSurveyQuestionTemplatePayload = {
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
    'surveyId': {
      'type': 'string'
    }
  },
  'required': [
    'statement',
    'surveyId'
  ]
}

exports.querySurveyQuestionTemplatePayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    },
    'match': {
      'type': 'object'
    }
  },
  'required': [
    'purpose',
    'match'
  ]
}

exports.updateSurveyQuestionTemplatePayload =
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
        'statement': {
          'type': 'string'
        },
        'options': {
          'type': 'array',
          'items': {}
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

//                             =======================survey template============================

exports.createSurveyTemplatePayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'title': {
      'type': 'string'
    },
    'description': {
      'type': 'string'
    },
    'category': {
      'type': 'array',
      'items': [
        {
          'type': 'string'
        }
      ]
    }
  },
  'required': [
    'title',
    'description',
    'category'
  ]
}

exports.querySurveyTemplatePayload = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'purpose': {
      'type': 'string'
    }
  },
  'required': [
    'purpose',
    'match'
  ]
}

exports.updateSurveyTemplatePayload =
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
        'category': {
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
