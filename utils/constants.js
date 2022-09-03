const allowlist = ['http://localhost:3000', 'https://meltywd.github.io'];

const limiterSetting = {
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100 // можно совершить максимум 100 запросов с одного IP
};

const { BASE_URL = 'https://meltygd.amocrm.ru' } = process.env;

const headersSetting = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlhODg3NGJiODJlYzljZGUyZmFlMWQzY2VmYzZjYzZlODI0YjFkMTYwOGUxYWNhZWEwZmMzMDgyYmMxZDVlYmNkZjhlYTZhMDdiYjU1MmJiIn0.eyJhdWQiOiIwMWMwN2JjNS0xZDNkLTRhZTQtOWMyYi04MzA1Y2UxMWIzMjMiLCJqdGkiOiI5YTg4NzRiYjgyZWM5Y2RlMmZhZTFkM2NlZmM2Y2M2ZTgyNGIxZDE2MDhlMWFjYWVhMGZjMzA4MmJjMWQ1ZWJjZGY4ZWE2YTA3YmI1NTJiYiIsImlhdCI6MTY2MjE5MjEwOCwibmJmIjoxNjYyMTkyMTA4LCJleHAiOjE2NjIyNzg1MDgsInN1YiI6Ijg0OTM1ODYiLCJhY2NvdW50X2lkIjozMDM1ODcwNSwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.LbGLz-woKsTUCdfW_OmykkmPmmaj9fqM8CZp4uJSFVkY2UMd1KqBw9Azi4TRV7Fv92tSeZd4-dtBzhVotW_6qAn_YSgRr9VpFRezaUR5KTfkRBdlzRMijKo8MPWopecnW9vOc2jemE_2Qopf1LkY4ck-__OxqFzpmkc8hl-rhjgF17yQUpEloaUhKbnNxF-KbpmyEcCPC7uuA4mSjA-e1syx_lSEMG38GcfNmUUwys4JEPPLsw0p4EnRbItytwdpcGzokdkvzVlC5s3SKmo25ZbDRyvntGMgKxOF6dtXUioJW9b__H9IjQDpPgpFwRp4DJhwu1X-vhJi3CpwsEnkVQ'
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
