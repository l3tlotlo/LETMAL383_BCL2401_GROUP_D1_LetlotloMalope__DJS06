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

// Transforming province names to uppercase
const uppercasedProvinces = provinces.map(province => province.toUpperCase());
console.log('\nUppercased Provinces:', uppercasedProvinces);

// Logging the length of names to the console
const nameLengths = names.map(name => name.length);
console.log('\nName Lengths:', nameLengths);

// Sorting provinces
const sortedProvinces = [...provinces].sort();
console.log('\nSorted Provinces:', sortedProvinces);

// Filtering provinces containing the worrd "Cape"
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log('\nCount of Non-Cape Provinces:', nonCapeProvinces.length);

// Finding names containing the letter  'S'
const hasLetterS = names.map(name => name.toLowerCase().includes('s'));
console.log('\nNames containing "S":', hasLetterS);

//Creating province array object mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log('\nName-Province Mapping:', nameProvinceMapping);