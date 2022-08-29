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
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc5MGYwYTJjZGE3MDAzZWIzMWNhZWVlMTM5MTZlYTgxZWRjYzI2NWEzY2QzNjQ5MjljN2ZkMDJhYjc3MjRiODE0MjAwOWQ4N2NhOTY5M2QxIn0.eyJhdWQiOiIwMWMwN2JjNS0xZDNkLTRhZTQtOWMyYi04MzA1Y2UxMWIzMjMiLCJqdGkiOiI3OTBmMGEyY2RhNzAwM2ViMzFjYWVlZTEzOTE2ZWE4MWVkY2MyNjVhM2NkMzY0OTI5YzdmZDAyYWI3NzI0YjgxNDIwMDlkODdjYTk2OTNkMSIsImlhdCI6MTY2MTcyNjM4MiwibmJmIjoxNjYxNzI2MzgyLCJleHAiOjE2NjE4MTI3ODIsInN1YiI6Ijg0OTM1ODYiLCJhY2NvdW50X2lkIjozMDM1ODcwNSwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.cZhWDTswJodOd3cUoUrInt_7BxIHP3rylS1uYWqrqxIt-ke7unUXItI33895GSubYt32Ha2eKX-2Ctagoo-Pkq8z-KmJIBIGd_eQ0tBkqHU_GR0K5o85Mj7RG7gZBHERLZpaCbKopw5uAwuuFUA3gDrKO1xtkZJUlxojWLuAc3ec8eg4tNHo3lR3CnaqjLJrlAHIjnhpEJVw_nux5hLcXZaOWINGzQiutrw0BFUHxbrDKIni_pOWoMNKZ4txzZQo5p5M_xxAqyMJUGxJ6pmpWpT2llxnU4Whda9VVXFl3nnCY9Vu7v4_H-k0aSVldTt91OuePhio3nzlMdXM6DeW_Q'
};

module.exports = {
  allowlist,
  limiterSetting,
  headersSetting
};
