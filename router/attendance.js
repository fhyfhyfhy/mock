const Router = require('koa-router');
const Mock = require('mockjs');

const {Random} = Mock;
Random.extend({
  number() {
    const numbers = [1, 2, 3];
    return this.pick(numbers);
  },
});
Random.number();

const router = new Router({
  prefix: '/attendance',
});

router.get('/tasks', (ctx) => {
  console.log(ctx.query);
  console.log(ctx.querystring);
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    'data|2-5': [
      {
        'id|+1': 0,
        'completed|40-50': 50,
        'total|50-80': 50,
      },
    ],
  });
});

router.get('/states', (ctx) => {
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    'data|31': ['@number'],
  });
});

module.exports = router;
