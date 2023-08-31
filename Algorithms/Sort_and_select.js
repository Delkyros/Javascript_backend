// using the cheaper finder one will create an algorithm to sort the objects

const products = require('./products');
const cheaper = require('./cheap_finder_algorithm');
const cheaper_finder = require('./cheap_finder_algorithm');

for (let actual =0; actual <products.length; actual++){
    let cheaper = cheaper_finder(products, actual)

    let actual_product = products[actual];
    let cheaper_product = products[cheaper];

    products[actual] = cheaper_product
    products[cheaper] = actual_product
}
//This algorithm has not only a linear behavior.
//It is a quadratic algorithm O(n²) and could behave as a O(2n²)
console.log(products)

/* This algorithm will iterate and select the cheapest product 
changing its position to the actual position it was iterating.*/


