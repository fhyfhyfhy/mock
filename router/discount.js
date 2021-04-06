const Router = require('koa-router');
const Mock = require('mockjs');

const router = new Router({
  prefix: '/discount',
});

const {Random} = Mock;
Random.extend({
  item() {
    const items = ['111', '2222', '333', '444444'];
    return this.pick(items);
  },
});
Random.item();

router.get('/discounts', (ctx) => {
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    'data|5-10': ['@item'],
  });
});

router.get('/people', (ctx) => {
  ctx.status = 200;
  ctx.state.data = Mock.mock({
    'data|5-10': ['@item'],
  });
});

module.exports = router;
