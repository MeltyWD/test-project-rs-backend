const router = require('express').Router();
const NotFoundError = require('../errors/not-found-error');

router.use('/leads', require('./leads'));

router.use(() => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;
