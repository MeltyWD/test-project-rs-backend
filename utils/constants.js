const allowlist = [
  'https://api.meltywd.students.nomoredomains.icu',
  'http://api.meltywd.students.nomoredomains.icu',
  'https://meltywd.students.nomoredomains.icu',
  'http://meltywd.students.nomoredomains.icu',
  'http://localhost:3000'
];

const limiterSetting = {
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100 // можно совершить максимум 100 запросов с одного IP
};

const headersSetting = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgxNzYyNTFiNzdlNTA0NjIwNjg1ODRkYWEzMDAyMDAwZmUwNTc2ODA5YTRkMGQ5ZmE1MmY0NmJmZGYwMmUxMDhmNWE2ZjBjMjkxZWFmOWM3In0.eyJhdWQiOiIwMWMwN2JjNS0xZDNkLTRhZTQtOWMyYi04MzA1Y2UxMWIzMjMiLCJqdGkiOiI4MTc2MjUxYjc3ZTUwNDYyMDY4NTg0ZGFhMzAwMjAwMGZlMDU3NjgwOWE0ZDBkOWZhNTJmNDZiZmRmMDJlMTA4ZjVhNmYwYzI5MWVhZjljNyIsImlhdCI6MTY2MTg0NzQ1OCwibmJmIjoxNjYxODQ3NDU4LCJleHAiOjE2NjE5MzM4NTgsInN1YiI6Ijg0OTM1ODYiLCJhY2NvdW50X2lkIjozMDM1ODcwNSwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.SOEi60MgEHRe61-oyrNp9iRU9ZIiQrceBWAZlAP7STUkwyPhqg4R23wYul4_u-W0ipookiI8WxzGL92nTxPkGFnBWq48pyTlOkBV9RWEn9raM-rlDhuJhDWnWmDhb4BZMHuruGSTE1BFzgWygtbiM-VIrO7FkaZgfgOlwJnmJbHQrZKOKfbTXCaIUjDVJOapEi9n9nnR41RbUwDLR1NGKUoT1iWB3UJS7yOhmtxZaQL2Q0jNK67eQIDvMI313m85u08SaaO3HUE1uulXadtE5YtiDqvOoyZNBo8lWRdGGilnYQK3qtDsIO8J7j6Sd7NH1bDOf1NiKn9SKwvWFWtvnw'
};

module.exports = {
  allowlist,
  limiterSetting,
  headersSetting
};
