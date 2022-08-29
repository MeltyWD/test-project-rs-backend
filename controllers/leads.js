const request = require('request');
const { headersSetting } = require('../utils/constants');
const { BASE_URL = 'https://meltygd.amocrm.ru' } = process.env;

module.exports.leads = async (req, res, next) => {
  try {
    const { query } = req.query;
    if (query) {
      request(
        {
          url: `${BASE_URL}/api/v4/leads?query=${encodeURI(query)}`,
          headers: headersSetting,
          json: true
        },
        (err, response, body) => {
          if (err) return res.status(500).send({ message: err });
          return res.send(body);
        }
      );
    } else {
      request(
        {
          url: `${BASE_URL}/api/v4/leads`,
          headers: headersSetting,
          json: true
        },
        (err, response, body) => {
          if (err) return res.status(500).send({ message: err });
          return res.send(body);
        }
      );
    }
  } catch (err) {
    next(err);
  }
};
