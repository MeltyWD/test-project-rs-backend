const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { leads } = require('../controllers/leads');

router.get(
  '/',
  celebrate({
    params: Joi.object().keys({
      query: Joi.string().min(3)
    })
  }),
  leads
);

module.exports = router;
