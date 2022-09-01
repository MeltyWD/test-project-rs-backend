const allowlist = ['http://localhost:3000'];

const limiterSetting = {
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100 // можно совершить максимум 100 запросов с одного IP
};

const { BASE_URL = 'https://meltygd.amocrm.ru' } = process.env;

const headersSetting = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ3MWJiOGU4YzZjYTY5NzEyNDE4Y2FiMmViZTMwNjZkYjdmZWJiYTE5NmFmODgyYWZmODlhODNlODVjMWVmYTMxNzQ3NWEzYzk2ZjkzNzRmIn0.eyJhdWQiOiIwMWMwN2JjNS0xZDNkLTRhZTQtOWMyYi04MzA1Y2UxMWIzMjMiLCJqdGkiOiJkNzFiYjhlOGM2Y2E2OTcxMjQxOGNhYjJlYmUzMDY2ZGI3ZmViYmExOTZhZjg4MmFmZjg5YTgzZTg1YzFlZmEzMTc0NzVhM2M5NmY5Mzc0ZiIsImlhdCI6MTY2MTkzNTY1MCwibmJmIjoxNjYxOTM1NjUwLCJleHAiOjE2NjIwMjIwNTAsInN1YiI6Ijg0OTM1ODYiLCJhY2NvdW50X2lkIjozMDM1ODcwNSwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.NMD4EoEIUvAgWADZGppSopNUhTKYSj0y00BIbNEkE7uwI9S-G3yX_c-Q_XkK_GaPw61VMCJ8fWOuH7m1Tf8ZMrYM9Pety26Um1LhqyVV6fPhhsqgRFdGQdEzZhaopJHkHfiosc10Xg28V7sq-u6QzS2xl34gJdeb3Fxrbr7VmA1GwmeIh9HXsMZL3-ejbh6-MNWZ-mrHcx9e99VhblK4BHKbz8nhp8eatTFRvXbXq3nD9js6sm33EoyJNXdb9UUW9A5xj15QNjMGZX6Dr0oIqhX2bNRexbL4H3M9NB0c04pU20XfhdOPoazfBk_hms7kNnDIo5tz8g8kh2WUDZsDxw'
};

const requestOptionsPipelines = {
  url: `${BASE_URL}/api/v4/leads/pipelines`,
  headers: headersSetting,
  json: true
};

const requestOptionsUsers = {
  url: `${BASE_URL}/api/v4/users`,
  headers: headersSetting,
  json: true
};

module.exports = {
  allowlist,
  limiterSetting,
  BASE_URL,
  headersSetting,
  requestOptionsPipelines,
  requestOptionsUsers
};
