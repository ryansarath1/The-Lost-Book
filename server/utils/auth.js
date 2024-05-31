const jwt = require('jsonwebtoken');
<<<<<<< HEAD
const {GraphQLError} = require("graphql")
=======

>>>>>>> 516a53b493dcc966a3f8297a860dcd3c2d9657eb
// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
<<<<<<< HEAD
  AuthenticationError: new GraphQLError("can't authenticate user", {
    extensions:{
      code: "UNAUTHENTICATED"
    }
  }),
  authMiddleware: function (req, ) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
=======
  authMiddleware: function (req, res, next) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;
>>>>>>> 516a53b493dcc966a3f8297a860dcd3c2d9657eb

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
<<<<<<< HEAD
      return req
=======
      return res.status(400).json({ message: 'You have no token!' });
>>>>>>> 516a53b493dcc966a3f8297a860dcd3c2d9657eb
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
<<<<<<< HEAD
     
    }

    // send to next endpoint
    return req
=======
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
>>>>>>> 516a53b493dcc966a3f8297a860dcd3c2d9657eb
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
