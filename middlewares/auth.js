const fs = require('fs');
const request = require('request');
const tokenData = require('../tokenData.json');
const { BASE_URL, CLIENT_SECRET, CLIENT_ID } = process.env;

async function getNewTokenByRefreshToken() {
  return new Promise((resolve, reject) => {
    request.post(
      {
        url: `${BASE_URL}/oauth2/access_token`,
        headers: {
          'Content-Type': 'application/json'
        },
        json: true,
        body: {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          grant_type: 'refresh_token',
          refresh_token: tokenData.refreshToken
        }
      },
      (err, response, body) => {
        if (response) {
          return resolve(body);
        }
        if (err) return reject(err);
      }
    );
  });
}

module.exports = async (req, res, next) => {
  if (Date.now() >= tokenData.expiresIn) {
    // Проверяем не истек ли срок токена
    const response = await getNewTokenByRefreshToken();

    const tokenTakedDate = Date.now();

    req.token = response.access_token;

    fs.writeFile(
      'tokenData.json',
      JSON.stringify({
        refreshToken: response.refresh_token,
        accessToken: response.access_token,
        tokenTakedDate: tokenTakedDate,
        expiresIn: tokenTakedDate + (response.expires_in * 1000 - 3000)
        // Сразу указываем дату истечения токена с запасом в 3 секунды
      }),
      (err) => {
        console.log(err);
      }
    );
  } else {
    req.token = tokenData.accessToken; // Если не истек достаем токен из файла
  }

  return next(); // пропускаем запрос дальше
};
