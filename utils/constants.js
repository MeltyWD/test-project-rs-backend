const allowlist = ['http://localhost:3000', 'https://meltywd.github.io'];

const limiterSetting = {
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100 // можно совершить максимум 100 запросов с одного IP
};

const { BASE_URL = 'https://meltygd.amocrm.ru' } = process.env;

const requestOptionsPipelines = {
  url: `${BASE_URL}/api/v4/leads/pipelines`,
  headers: {
    'Content-Type': 'application/json'
  },
  json: true
};

const requestOptionsUsers = {
  url: `${BASE_URL}/api/v4/users`,
  headers: {
    'Content-Type': 'application/json'
  },
  json: true
};

module.exports = {
  allowlist,
  limiterSetting,
  BASE_URL,
  requestOptionsPipelines,
  requestOptionsUsers
};
