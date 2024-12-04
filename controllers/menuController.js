const menu = require('../models/menu');

exports.addMenuItem = (req, res) => {
  const { name, price, category } = req.body;
  const newItem = menu.add({ name, price, category });
  res.status(201).json(newItem);
};

exports.getMenu = (req, res) => {
  const items = menu.getAll();
  res.status(200).json(items);
};
