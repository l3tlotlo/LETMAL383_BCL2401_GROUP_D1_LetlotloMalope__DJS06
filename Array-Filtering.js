// Provinces Array
const provinces = [
  'Western Cape', 
  'Gauteng', 
  'Northern Cape', 
  'Eastern Cape', 
  'KwaZulu-Natal', 
  'Free State'
];

// Names Array
const names = [
  'Ashwin', 
  'Sibongile', 
  'Jan-Hendrik', 
  'Sifiso', 
  'Shailen', 
  'Frikkie'
];
// Products Array
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// ForEach Basics for "provinces" and "Names" arrays
console.log('Names:');
names.forEach(name => console.log(name));

console.log('\nProvinces:');
provinces.forEach(province => console.log(province));

console.log('\nNames with matching provinces:');
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));