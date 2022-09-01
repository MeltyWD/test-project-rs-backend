const request = require('request');
const { BASE_URL, headersSetting, requestOptionsPipelines, requestOptionsUsers } = require('../utils/constants');

function getLeads(query) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `${BASE_URL}/api/v4/leads${query ? `?query=${encodeURI(query)}` : ''}`,
        headers: headersSetting,
        json: true
      },
      (err, response, body) => {
        if (response) return resolve(body);
        if (err) return reject(err);
      }
    );
  });
}

function getPipelines() {
  return new Promise((resolve, reject) => {
    request(requestOptionsPipelines, (err, response, body) => {
      if (response) return resolve(body);
      if (err) return reject(err);
    });
  });
}

function getUsers() {
  return new Promise((resolve, reject) => {
    request(requestOptionsUsers, (err, response, body) => {
      if (response) return resolve(body);
      if (err) return reject(err);
    });
  });
}

module.exports.leads = async (req, res, next) => {
  const { query } = req.query;
  try {
    const getAllData = await Promise.all([getLeads(query), getPipelines(), getUsers()]).then((res) => res);

    res.send(getAllData);
  } catch (err) {
    next(err);
  }
};
