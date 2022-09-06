const allowlist = ['http://localhost:3000', 'https://meltywd.github.io'];

const limiterSetting = {
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100 // можно совершить максимум 100 запросов с одного IP
};

const { BASE_URL = 'https://meltygd.amocrm.ru' } = process.env;

const headersSetting = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzNTJlNjgxY2U3Yjk0NTE2ZDIyYTI5MzZiZjNkODRjZWRlMzIwNmZjNWRiOGNmOTU2NjA4NDdlZDYyODEyOTdkYjIzYTMxZTE2OGNjMGI5In0.eyJhdWQiOiIwMWMwN2JjNS0xZDNkLTRhZTQtOWMyYi04MzA1Y2UxMWIzMjMiLCJqdGkiOiIzMzUyZTY4MWNlN2I5NDUxNmQyMmEyOTM2YmYzZDg0Y2VkZTMyMDZmYzVkYjhjZjk1NjYwODQ3ZWQ2MjgxMjk3ZGIyM2EzMWUxNjhjYzBiOSIsImlhdCI6MTY2MjQ0NDM2NiwibmJmIjoxNjYyNDQ0MzY2LCJleHAiOjE2NjI1MzA3NjYsInN1YiI6Ijg0OTM1ODYiLCJhY2NvdW50X2lkIjozMDM1ODcwNSwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.ScANSVQqWXeqV5Gvg9OEYzG8PUBwAIhhPmsudLOhzRLkAOgkKzgncoFfzyoayv026W1XXmPCd5TlJEchWcpAi4UsAkJEoQiQHNAhrbgRbO_F8PSNBQhNqskeGvdyu5WWnHn3QmeM2VRxM8Ar5bXYpMyj2mUG35HOrkHimBt-mylNywwVdMSPUY6QoHnpBb-BW1_9ehiRqjdpBKNLOB8JzxZAmzjgz-mHzdq-zl3N8gkngWlTgPCyjofr3w3wLK5Gowpa0R-clsZ5iCevC0iyQoOagsCGOfpPe_VEN0QSTbxylY89wnpuzIh_Xs2PFPqrv6qJYZw-qmQlcWf9rXHpWg'
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
