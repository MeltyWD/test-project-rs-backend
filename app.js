const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
const rateLimit = require('express-rate-limit');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { allowlist, limiterSetting } = require('./utils/constants');
const mainRoute = require('./routes/index');
const errorHandler = require('./utils/error-handler');

const { PORT = 3000 } = process.env;
const app = express();

app.use(rateLimit(limiterSetting));

app.use(
  cors({
    origin: allowlist,
    credentials: true
  })
);

app.use(helmet());
app.use(cookieParser());
app.use(requestLogger); // подключаем логгер запросов

app.use('/api/', mainRoute);

app.use(errorLogger); // подключаем логгер ошибок
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => `App listening on port ${PORT}`);
