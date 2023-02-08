const { expressjwt: expressJwt } = require('express-jwt')

const secret = require('../config/secret')

module.exports = expressJwt({
  secret: secret.key,
  algorithms: ['HS256']
})