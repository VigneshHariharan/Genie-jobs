module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6379af4b30b55bf346de2c040d855f22'),
  },
});
