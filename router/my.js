const Router = require('koa-router');
const Mock = require('mockjs');

const router = new Router({
  prefix: '/my',
});

router.get('/user', (ctx) => {
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    data: {
      name: '@cname',
      avatar: 'http://okai.oss-cn-hangzhou.aliyuncs.com/staff/my.png',
    },
  });
});

router.get('/tasks', (ctx) => {
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    'data|7': [
      {
        'completed|40-50': 50,
        'total|50-80': 50,
        'state|0-1': 1,
      },
    ],
  });
});

module.exports = router;
