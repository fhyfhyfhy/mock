const Router = require('koa-router');
const Mock = require('mockjs');

const router = new Router({
  prefix: '/schedule',
});

router.get('/', (ctx) => {
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    'data|7': [['调度', '换电']],
  });
});

module.exports = router;
