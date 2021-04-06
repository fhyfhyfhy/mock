const http = require('http');
const {logger} = require('./middleware/logger');
const app = require('./app');

const PORT = 6673;
const SERVER = http.createServer(app.callback());

SERVER.listen(PORT, '0.0.0.0', () => {
  logger.info(`Running on port: ${PORT}`);
});
