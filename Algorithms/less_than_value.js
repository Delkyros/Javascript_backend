/* this algorithm will be used if a certain value 
is selected and one wants 
to know how many products there are with that value, or less than that value.*/

const products = require('./products');

function less_than_value(pivot, array) {
    let lesser = 0;

    for (let actual =0; actual < array.length; actual++){
        let actual_product = array[actual]
            if (actual_product.price < pivot.price){
                lesser++
            }    
   }//          from this i in the array to the position after the lesser value
   mover(array, array.indexOf(pivot), lesser)
   return array;
}
// repositioning the products

function mover(array, from, to_here){
const i1= array[from];
const i2= array[to_here];

array[to_here] = i1;
array[from] = i2;

}
// using the drinks product
console.log(less_than_value(products[3], products));
// this will change the position of drinks to the last position of the array products

// now one will continue to change the indexes until all data is sorted based on price

function slice_at_pivot(array){
    let pivot = array[Math.floor(array.length/2)];
    less_than_value(pivot, array);
    let lesser = 0;
    for(analysis=0; analysis < array.length; analysis++){
        let actual = array[analysis];
        if (actual.price <= pivot.price && actual!==pivot){
            mover(array, analysis, lesser)
            lesser++
        }
    }
return array;
}
// now gifts has been changed from products[4] to the products[8] position
//console.log(slice_at_pivot(products))

module.exports = mover;