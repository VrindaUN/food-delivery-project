const menuItems = [];

exports.add = (item) => {
  const id = `${Date.now()}-${Math.random()}`;
  const newItem = { id, ...item };
  menuItems.push(newItem);
  return newItem;
};

exports.getAll = () => menuItems;

exports.exists = (id) => menuItems.some(item => item.id === id);
