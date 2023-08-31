const products = require('./products');

function insert_sorter(products){
    for (let actual =0; actual <products.length; actual++){
    let test = actual;
    while (test>0 && products[test].price< products[test-1].price){
    let test_product = products[test];
    let anterior_product = products[test-1];

    products[test] = anterior_product;
    products[test-1] = test_product;
    // breaking the while
    test--    
    };
};
    console.log(products)
// this is a O(n²) algorithm, but this one uses more memory 
//since it saves mode values than the others.
};

insert_sorter(products);