const request = require('request');
const { BASE_URL, headersSetting, requestOptionsPipelines, requestOptionsUsers } = require('../utils/constants');

function getLeads(query, token) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `${BASE_URL}/api/v4/leads${query ? `?query=${encodeURI(query)}` : ''}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        json: true
      },
      (err, response, body) => {
        if (response) return resolve(body);
        if (err) return reject(err);
      }
    );
  });
}

function getPipelines(token) {
  requestOptionsPipelines.headers.Authorization = `Bearer ${token}`;
  return new Promise((resolve, reject) => {
    request(requestOptionsPipelines, (err, response, body) => {
      if (response) return resolve(body);
      if (err) return reject(err);
    });
  });
}

function getUsers(token) {
  requestOptionsUsers.headers.Authorization = `Bearer ${token}`;
  return new Promise((resolve, reject) => {
    request(requestOptionsUsers, (err, response, body) => {
      if (response) return resolve(body);
      if (err) return reject(err);
    });
  });
}

module.exports.leads = async (req, res, next) => {
  const { query } = req.query;
  const token = req.token;
  if (token) {
    try {
      const getAllData = await Promise.all([getLeads(query, token), getPipelines(token), getUsers(token)]).then(
        (res) => res
      );

      res.send(getAllData);
    } catch (err) {
      next(err);
    }
  } else {
    res.send('Нет токена');
  }
};
