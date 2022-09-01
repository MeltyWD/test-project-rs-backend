const allowlist = ['http://localhost:3000'];

const limiterSetting = {
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100 // можно совершить максимум 100 запросов с одного IP
};

const { BASE_URL = 'https://meltygd.amocrm.ru' } = process.env;

const headersSetting = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYyMDY5ZmJkNmI1ZjJjZWM0YzA4NDE5ZjQ0ZjIzZDNiMThiZTMxOWUzNjA0OGZiMmZhNTYwYmY5YmJmZmVmZGNlNmI1Mzc5ZGM5ZDljNDA1In0.eyJhdWQiOiIwMWMwN2JjNS0xZDNkLTRhZTQtOWMyYi04MzA1Y2UxMWIzMjMiLCJqdGkiOiI2MjA2OWZiZDZiNWYyY2VjNGMwODQxOWY0NGYyM2QzYjE4YmUzMTllMzYwNDhmYjJmYTU2MGJmOWJiZmZlZmRjZTZiNTM3OWRjOWQ5YzQwNSIsImlhdCI6MTY2MjA0MjE1MSwibmJmIjoxNjYyMDQyMTUxLCJleHAiOjE2NjIxMjg1NTEsInN1YiI6Ijg0OTM1ODYiLCJhY2NvdW50X2lkIjozMDM1ODcwNSwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.a6FUzR0XRzMep2vh9EtgIDm9ezj7ROyHhpKV_U2b14mE7Ci52E9oM8YmFCthkBNOZguOWhJXc-bHnafPziIIzhO8c1sMA9bm9DojSWYFxZ4X8kEaOkoF57PVS6OkXemT-sF1nbxy9NSg8R8SuKThjdKiT-GI4SeHGLGegONQ13V2CjujYqN_vQuTlGxemch--Gn83JCHU-C3v9CQOHrVR8nfcezq3EQjzg_pF3XiNb1CXYBSorqY1WBRVIfIkN-0mimZcHZwOKtNrMtE5ayUmzgRDsgHHgCAIvS8HqDwQ2l33wbPLwJ9eA4RDFPYQkLhonuK09s-TbpcJ1A5_cuEVw'
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
