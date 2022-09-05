const allowlist = ['http://localhost:3000', 'https://meltywd.github.io'];

const limiterSetting = {
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100 // можно совершить максимум 100 запросов с одного IP
};

const { BASE_URL = 'https://meltygd.amocrm.ru' } = process.env;

const headersSetting = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkxZDVmYzQ4NjdhYjA0NGI1ZGY2MDMxMjE2OWI2NTE4ZjU5OTM4YzgyZDBiMWZmMDliNzdhZGMzNTY3ZThiZjY2YTgyYmYzZjIyOTIxMDViIn0.eyJhdWQiOiIwMWMwN2JjNS0xZDNkLTRhZTQtOWMyYi04MzA1Y2UxMWIzMjMiLCJqdGkiOiI5MWQ1ZmM0ODY3YWIwNDRiNWRmNjAzMTIxNjliNjUxOGY1OTkzOGM4MmQwYjFmZjA5Yjc3YWRjMzU2N2U4YmY2NmE4MmJmM2YyMjkyMTA1YiIsImlhdCI6MTY2MjM1NzQ3NiwibmJmIjoxNjYyMzU3NDc2LCJleHAiOjE2NjI0NDM4NzYsInN1YiI6Ijg0OTM1ODYiLCJhY2NvdW50X2lkIjozMDM1ODcwNSwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.Sqc_OXwY1q9kVSr_ynU559DAYYywEcVOjHat30P7ZAI-Eb_tL4PFTQGANwS6VaOXjHtuimokMYqZFy5688Gq8SxVw1KxSLbbF6mjTvtBIAUg1TzdkKfMDUs7FPvtNPUWUKxxT7svz-YFZsFzBgRnhaeUlRu33UGzp-zcWaARPYiILlmjLYrZbLlHkyARZLAGt0dp02mPw96f34otXNPfZQDdswzJGy8d9AVxT0mkFayiXHCW60Ak154jg1X29Tf0opJYvrsJJnWN5-5p5A0tjwCj58m1iV7kekBpxfsgoYScAJXr0t8BUaykmPHn3emtaxQYDxnb2fYM5EpZFaZePg'
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
