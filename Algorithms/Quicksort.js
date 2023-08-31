const products = require('./products');
const mover = require('./less_than_value');

function quick_sort(array, left, right) {
    if (left < right) {
        const actual_index = breaker(array, left, right);
        if (left < actual_index - 1) {
            quick_sort(array, left, actual_index - 1);
        }
        if (actual_index < right) {
            quick_sort(array, actual_index, right);
        }
    }
    return array;
}

function breaker(array, left, right) {
    //Just to show the array modifications
    console.log('Altered array', array)
    // And the values of left and right
    console.log(`Left=${left}, right =${right}`)

    let pivot = array[Math.floor((left + right) / 2)];
    let actual_left = left;
    let actual_right = right;

    while (actual_left <= actual_right) {
        while (array[actual_left].price < pivot.price) {
            actual_left++;
        } 
        
        while (array[actual_right].price > pivot.price) {
            actual_right--;
        } 
        
        if (actual_left <= actual_right) {
            mover(array, actual_left, actual_right);
            actual_left++;
            actual_right--;
        }
    }

    return actual_left;
}

console.log(quick_sort(products, 0, products.length - 1));
const sorted_array = quick_sort(products, 0, products.length - 1);

// This is a O(n*Log n) algorithm

module.exports = sorted_array;
