module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2ebfb1d56ba3dfc366011f4ff38c989d'),
  },
});
