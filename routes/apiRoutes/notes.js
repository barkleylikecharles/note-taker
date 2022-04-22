const router = require('express').Router();
const noteRoutes = require('../apiRoutes/notes');

router.use(noteRoutes);
router.use(require('./Routes'));

module.exports = router;