const cron = require('node-cron');
const orders = require('../models/order');

cron.schedule('* * * * *', () => {
  orders.updateStatuses();
  console.log('Order statuses updated.');
});
