const Router = require('koa-router');
const Mock = require('mockjs');

const router = new Router({
  prefix: '/apply',
});

router.get('/list', (ctx) => {
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    'data|10-15': [
      {
        name: '@cname',
        date: '@datetime(yyyy/MM/dd HH:mm)',
        'pass|0-1': 0,
      },
    ],
  });
});

module.exports = router;
