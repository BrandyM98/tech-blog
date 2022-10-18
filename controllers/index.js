const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoute = require('./dashboardRoute.js');
const homeRoute = require('./homeRoute.js');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;