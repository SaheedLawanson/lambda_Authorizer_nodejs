const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.handler = async (event) => {
    // Extract token from event
    let token = event.authorizationToken
  
    let auth;
    if (token == null) {
      auth = 'Deny'
    }
    
    else {
      // Verify token
      try {
        jwt.verify(token, process.env.SECRET)
        auth = 'Allow'
      }
  
      catch (err) {
          auth = "Deny"
      }
    }

    let response = {
            "principalId": token, // The principal user identification associated with the token sent by the client.
            "policyDocument": {
              "Version": "2012-10-17",
              "Statement": [
                {
                  "Action": "execute-api:Invoke",
                  "Effect": auth,
                  "Resource": "arn:aws:execute-api:us-east-2:242614394927:lqd762ivqe/*/*"
                }
              ]
            }
    }
    return response;
};
