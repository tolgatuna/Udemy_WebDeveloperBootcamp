var faker = require('faker');

console.log("-------------- - --------------");
console.log("  PRODUCTS LIST  ");

for(var i = 0 ; i < 10 ; i++) {
	console.log("Product "+ Number(i + 1) +"  : " + faker.commerce.productName() + " : " + faker.commerce.price());
}
console.log("-------------- 0 --------------");