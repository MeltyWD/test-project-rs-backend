const allowlist = ['http://localhost:3000', 'https://meltywd.github.io/test-project-rs-frontend'];

const limiterSetting = {
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100 // можно совершить максимум 100 запросов с одного IP
};

const { BASE_URL = 'https://meltygd.amocrm.ru' } = process.env;

const headersSetting = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIxZTg3ZmVhZmU4MWViYzcyODlmZWVmNWNlYjI1NWQ4M2UyYWZlMmU2MGZhYWUxZWE5N2RmOWJmMTNmNjNiN2Q5NWExNWY2ZWZkZDQzNDFjIn0.eyJhdWQiOiIwMWMwN2JjNS0xZDNkLTRhZTQtOWMyYi04MzA1Y2UxMWIzMjMiLCJqdGkiOiIyMWU4N2ZlYWZlODFlYmM3Mjg5ZmVlZjVjZWIyNTVkODNlMmFmZTJlNjBmYWFlMWVhOTdkZjliZjEzZjYzYjdkOTVhMTVmNmVmZGQ0MzQxYyIsImlhdCI6MTY2MjA5Mzc2NSwibmJmIjoxNjYyMDkzNzY1LCJleHAiOjE2NjIxODAxNjUsInN1YiI6Ijg0OTM1ODYiLCJhY2NvdW50X2lkIjozMDM1ODcwNSwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.iYa68Z81UGoFlLNlHiig3KdrC8n5SsfrqucItlnB_xZPQ6XfmeKy_o3wCXkDed2YDe6EfAg3Rkm8zaqoSoqvEjVMA3eMFxH0a_laEo86bplA4GT1loNlwpQZ_8o74kmeIYdm-EQ34_KNL9yTnm8xDmbyzQQioQHeDoLEJphUB3RwMREUz6QG0maQ8wIFcs7clkura-OGUhzzpqU_472p2Bhi3-xVLmcQ1UGVNVFWn39mEWXIGtAaxICy2iLTOf7QxESFvJOgYUCIDLOrHhDZo_EBDpFLD7Sa76SxKAVqNQvnx-VZZK4lnwt8HXvQka9Nc-xfaF8QlDhvdM1VQOG9uA'
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
