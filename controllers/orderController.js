const orders = require('../models/order');
const menu = require('../models/menu');

exports.placeOrder = (req, res) => {
  const { items } = req.body;
  const isValid = items.every(itemId => menu.exists(itemId));
  
  if (!isValid) {
    return res.status(400).json({ error: 'Invalid item IDs in order.' });
  }

  const newOrder = orders.add(items);
  res.status(201).json(newOrder);
};

exports.getOrder = (req, res) => {
  const { id } = req.params;
  const order = orders.getById(id);

  if (!order) {
    return res.status(404).json({ error: 'Order not found.' });
  }

  res.status(200).json(order);
};
