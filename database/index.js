const fs = require('fs');
const { v4 } = require('uuid');

const json = [];

const PRODUCT_MOCK = {
  name: ['Guarda sol Pro Max', 'Boné Stanley', 'Cadeira RGB', 'Tramontina Gamer'],
  type: ['Guarda sol', 'Boné', 'Cadeira', 'Tramontina'],
  brand: ['Apple', 'Stanley', 'Bar do seu zé', 'Tramontina'],
};

for (let index = 0; index < 1000; index++) {
  const name = Math.floor(Math.random() * 4);
  const type = Math.floor(Math.random() * 4);
  const brand = Math.floor(Math.random() * 4);
  const minimum_quantity = Math.floor(Math.random() * 6);
  json.push({
    id: v4(),
    name: PRODUCT_MOCK.name[name],
    type: PRODUCT_MOCK.type[type],
    brand: PRODUCT_MOCK.brand[brand],
    price: '150,00',
    minimum_quantity,
  });
}
fs.unlinkSync('./database/database.json', () => {});
fs.writeFileSync('./database/database.json', JSON.stringify({ products: json }), 'utf8', () => {});
