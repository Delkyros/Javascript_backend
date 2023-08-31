/*Considering the results of Quicksort. 
The final sorted array will be this one*/

const sorted_array = require('./Quicksort.js');

console.log(sorted_array);

function binary_search(array, from, until, searched_value) {
    if (from > until) {
        return 'Condition for Stack overflow error'; //in case of an intinite loop
    }

    const half = Math.floor((from + until) / 2);
    const actual = array[half];

    if (searched_value === actual.price) {
        return half;
    }
    
    if (searched_value < actual.price) {
        return binary_search(array, from, half - 1, searched_value);
    }
    
    if (searched_value > actual.price) {
        return binary_search(array, half + 1, until, searched_value);
    }
}
//Searching for something with the value of 45
console.log(binary_search(sorted_array, 0, sorted_array.length-1, 45));

/*It works only to values that exists in the array. Any other
value that aren't in the conditions will causa a Stack Overflow.
Using the value of 666.*/
console.log(binary_search(sorted_array, 0, sorted_array.length-1, 666));

