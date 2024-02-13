const { expressjwt: ejwt } = require("express-jwt");

const auth = () => {
  return ejwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    isRevoked: async (req, token) => {
      if (!token.payload.isAdmin) {
        return true;
      }
      console.log('admin');

    }
  }).unless({
    path: [
      "/users/login",
      "/users/register",
      { url: "/products", methods: ['GET', 'OPTIONS'] },
      { url: "/categories", methods: ['GET', 'OPTIONS'] }]
  });
}
module.exports = auth;
