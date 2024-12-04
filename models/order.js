const orders = [];

exports.add = (items) => {
  const id = `${Date.now()}-${Math.random()}`;
  const newOrder = {
    id,
    items,
    status: 'Preparing',
    createdAt: new Date(),
  };
  orders.push(newOrder);
  return newOrder;
};

exports.getById = (id) => orders.find(order => order.id === id);

exports.updateStatuses = () => {
  orders.forEach(order => {
    const elapsedTime = (Date.now() - new Date(order.createdAt).getTime()) / 60000;

    if (order.status === 'Preparing' && elapsedTime >= 5) {
      order.status = 'Out for Delivery';
    } else if (order.status === 'Out for Delivery' && elapsedTime >= 15) {
      order.status = 'Delivered';
    }
  });
};
