/*
This file will contain the validation schemas.
By separating it from controller, we are cleaning the code.
Now the middleware will automatically send error response if the payload fails
*/
// For express json validation

exports.createPayload =  {
    '$schema' : 'http://json-schema.org/draft-04/schema#',
    'type': 'object',
    'properties' : {
        'autopostingId' :{
            'type' : 'string',
            'required' : true
        },
        'tweet' : {
            'type' : 'object',
            'required' : true
        },
        'expiryTime' : {
            'type': 'string',
            'required': true
        }
    }
}

exports.queryPayload = {
    '$schema' : 'http://json-schema.org/draft-04/schema#',
    'type' : 'object',
    'properties' : {
        'purpose' : {
            'type' : 'string'
        },
        'match' : {
            'type' : 'object',
            'properties' : {
                'autopostingId' :{
                    'type' : 'string'
                },
                'tweet' : {
                    'type' : 'object'
                },
                'expiryTime' : {
                    'type': 'string'
                }
            }
        },
        'required' : true
    }
}