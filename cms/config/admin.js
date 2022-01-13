module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '39b25b848572057268a28560ddd3fdd0'),
  },
});
