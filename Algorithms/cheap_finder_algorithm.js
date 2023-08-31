// considering the product prices bellow

const prices = [25, 15, 30, 50, 45, 20];

// create an algorithm that logs the cheapest product

let cheaper= 0;

for (let actual =0; actual <prices.length; actual++){
    if (prices[actual] < prices[cheaper]){
        cheaper = actual
    }
}
console.log(`The cheapest product value is ${prices[cheaper]}`)


// now using a list of objects
const products = require('./products');

function cheaper_finder(products, position){
    let cheaper= position;
    for (let actual =position; actual <products.length; actual++){
        if (products[actual].price < products[cheaper].price){
            cheaper = actual
        }
    }
    return cheaper;
}

// this is also known as a linear algorithm O(n) or can behave as a O(2n)

module.exports = cheaper_finder




