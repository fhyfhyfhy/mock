const Router = require('koa-router');
const Mock = require('mockjs');

// const {Random} = Mock;
// Random.extend({
//   number() {
//     const numbers = [1, 2, 3];
//     return this.pick(numbers);
//   },
// });
// Random.number();

const router = new Router({
  prefix: '/repair',
});

router.get('/cars', (ctx) => {
  console.log(ctx.query);
  console.log(ctx.querystring);
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    'data|10-15': [
      {
        'id|+1': 29039,
        date: '@datetime(yyyy/MM/dd)',
        guarantee: '@datetime(yyyy/MM/dd)',
        'state|0-1': 0,
      },
    ],
  });
});

router.get('/boxs', (ctx) => {
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    'data|10-15': [
      {
        'id|+1': 29039,
        date: '@datetime(yyyy/MM/dd)',
        guarantee: '@datetime(yyyy/MM/dd)',
        'state|0-1': 0,
      },
    ],
  });
});

module.exports = router;
