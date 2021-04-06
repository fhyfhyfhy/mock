const Router = require('koa-router');
const my = require('./my');
const attendance = require('./attendance');
const schedule = require('./schedule');
const repair = require('./repair');
const discount = require('./discount');

const router = new Router({
  prefix: '/api',
});

router.use(my.routes());
router.use(attendance.routes());
router.use(schedule.routes());
router.use(repair.routes());
router.use(discount.routes());

module.exports = router;
