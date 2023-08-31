const {edgalho, edfolha} = require('./arrays')

function list_joiner(list1, list2) {
    let final_list = [];
    let position_list1 = 0;
    let position_list2 = 0;
    let actual = 0;

    while (position_list1 < list1.length && position_list2 < list2.length) {
        let item_list1 = list1[position_list1];
        let item_list2 = list2[position_list2];

        if (item_list1.price < item_list2.price) {
            final_list[actual] = item_list1;
            position_list1++;
        } else {
            final_list[actual] = item_list2;
            position_list2++;
        }
        actual++;
    }
    return final_list
}
console.log(list_joiner(edgalho, edfolha))
// lets check if the lengths are the same
console.log(list_joiner(edgalho, edfolha).length)
console.log(edfolha.length + edgalho.length)
//something is not right...
//By using && one removed 2 datapoints from the list.

//fixing bugs

function list_joiner_fixed(list1, list2) {
    let final_list = [];
    let position_list1 = 0;
    let position_list2 = 0;
    let actual = 0;

    while (position_list1 < list1.length && position_list2 < list2.length) {
        let item_list1 = list1[position_list1];
        let item_list2 = list2[position_list2];

        if (item_list1.price < item_list2.price) {
            final_list[actual] = item_list1;
            position_list1++;
        } else {
            final_list[actual] = item_list2;
            position_list2++;
        }
        actual++;
    }
    while (position_list1 < list1.length) {
    final_list[actual] = list1[position_list1];
    position_list1++;
    actual++;
    }
    while (position_list2 < list2.length) {
    final_list[actual] = list2[position_list2];
    position_list2++;
    actual++;
    }
    return final_list;
}

console.log(list_joiner_fixed(edgalho, edfolha).length)
console.log(edfolha.length + edgalho.length)
// now the list is joined and sorted