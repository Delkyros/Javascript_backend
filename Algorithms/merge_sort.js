const products = require('./products');

// nested function algorithm
function merge_sort(array, nest_level = 0) {


  // this is an O(n*log n) algorithm
    //showing the slice, sort and merge process
    console.log(`Nest level: ${nest_level}`)
    console.log(array)
  
    // reducing the maximum size of the array
    if(array.length > 1) {
      const half = Math.floor(array.length / 2); //defining the middle position or the half  of the array
      const slice1 = merge_sort(array.slice(0, half), nest_level + 1);
      const slice2 = merge_sort(array.slice(half, array.length), nest_level + 1);
      array = sorter(slice1, slice2); //sorting the slices
    }
  
    return array;
  }
  
  function sorter(slice1, slice2) {
    let actual_position_slice1 = 0 
    let actual_position_slice2 = 0
    const result = []
  
    while (actual_position_slice1 < slice1.length && actual_position_slice2 < slice2.length) {
      //picking the products
      let actual_product_slice1 = slice1[actual_position_slice1]
      let actual_product_slice2 = slice2[actual_position_slice2]
  
      //comparing their prices
      if (actual_product_slice1.price < actual_product_slice2.price) {
        result.push(actual_product_slice1)
        actual_position_slice1++
      } else {
        result.push(actual_product_slice2)
        actual_position_slice2++
      }
    }
    //concatenating the result to the index of the resulting array
    return result.concat(actual_position_slice1 < slice1.length
      ? slice1.slice(actual_position_slice1)
      : slice2.slice(actual_position_slice2))
  }

  console.log(merge_sort(products))