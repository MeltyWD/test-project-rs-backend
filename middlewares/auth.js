const request = require('request');

module.exports = (req, res, next) => {
  const token = req.cookies.token;

  req.user = token; // записываем пейлоуд в объект запроса
  return next(); // пропускаем запрос дальше
};
