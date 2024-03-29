const fs = require('fs');
const { v4 } = require('uuid');

if (fs.existsSync('./database/database.json')) {
  return;
}

const json = [];

const PRODUCT_MOCK = {
  name: ['Guarda sol Pro Max', 'Boné Stanley', 'Cadeira RGB', 'Tramontina Gamer'],
  type: ['Guarda sol', 'Boné', 'Cadeira', 'Tramontina'],
  brand: ['Devassa', 'Amstel', 'Heineken'],
};

for (let index = 0; index < 1000; index++) {
  const name = Math.floor(Math.random() * 4);
  const type = Math.floor(Math.random() * 4);
  const brand = Math.floor(Math.random() * 3);
  json.push({
    id: v4(),
    name: PRODUCT_MOCK.name[name],
    type: PRODUCT_MOCK.type[type],
    brand: PRODUCT_MOCK.brand[brand],
    price: Math.floor(Math.random() * 150) + 1,
    minimum_quantity: Math.floor(Math.random() * 6) + 1,
    unit_quantity: 0,
    subtotal: 0,
  });
}
try {
  fs.unlinkSync('./database/database.json', () => {});
} catch {}
fs.writeFileSync('./database/database.json', JSON.stringify({ products: json }), 'utf8', () => {});
