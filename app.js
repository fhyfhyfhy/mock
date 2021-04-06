const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const cors = require('koa2-cors');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const {requestLogger} = require('./middleware/logger'); // 日志
const {responseTime, errors} = require('./middleware');
const router = require('./router');

const app = new Koa();

// disable console.errors for pino 默认情况下，将所有错误输出到 stderr，除非 app.silent 为 true
app.silent = true;

// Error handler
app.use(errors);

app.use(conditional());
// 使用ETag代替Last-Modified来进行缓存
app.use(etag());
// 解析实体部分
app.use(bodyParser());

// Enable CORS for all routes 跨域
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowHeaders: ['Content-Type', 'Accept'],
    exposeHeaders: ['spacex-api-cache', 'spacex-api-response-time'],
  }),
);

// Set header with API response time
app.use(responseTime);

// Request logging
app.use(requestLogger);

// routes
app.use(router.routes());

module.exports = app;
