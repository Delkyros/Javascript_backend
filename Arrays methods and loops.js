const n1= 10;
const n2= 6.5;
const n3=8;
const n4=7.5;

let mean = (n1+n2+n3+n4)/4;
console.log(mean);
//this can be a way to calculate the mean, but it could be automatized
// consider index 0,   1   2  3
const n_list=    [10, 6.5, 8, 7.5];

mean = (n_list[0] + n_list[1]+n_list[2]+n_list[3])/n_list.length;

console.log(mean);
//with less code and for any length of the list or array

// adding new values to a array
const list_missing_value = [10, 6.5 ,8];

mean = (list_missing_value[0],list_missing_value[1],list_missing_value[2],list_missing_value[3])/list_missing_value.length;
//since there is no value at position [3] the mean var is broken
console.log(mean);
// adding the value of position [3]
list_missing_value.push(7.5);
// the variable must be declared again
mean = (list_missing_value[0],list_missing_value[1],list_missing_value[2],list_missing_value[3])/list_missing_value.length;
console.log(mean);
//note that even being a constant the array can receive new values, but can't be another type

//removing an i from the array
const list_5_values = [10, 6.5, 8, 7.5, 9];

mean = (list_5_values[0],list_5_values[1],list_5_values[2],list_5_values[3])/list_5_values.length;

console.log(mean); //now this is wrong since len=5
// removing the value of the last position [-1] or [4]
list_5_values.pop(); //always will remove the last i
// the variable must be declared again
mean = (list_5_values[0],list_5_values[1],list_5_values[2],list_5_values[3])/list_5_values.length;
console.log(`The mean is ${mean}`);

// using non numeric i's

const names = [
 'João', 
 'Juliana',
 'Ana',
 'Caio',
 'Lara',
 'Marjorie',
 'Guilherme',
 'Aline',
 'Fabiana',
 'Andre',
 'Carlos',
 'Paulo',
 'Bia',
 'Vivian',
 'Isabela',
 'Vinícius', 
 'Renan', 
 'Renata',
 'Daisy', 
 'Camilo'
]
//slicing the array
let room_a = names.slice(0,10);
console.log(names[9]);
//this will pick the [0] index until 9th index
console.log(room_a);

//this will slice from [9] untill the last index
const room_b = names.slice(10)
console.log(room_b);

//using splice
//lets say that one wants to edit room_a by removing 'Ana' and 'Caio', and add 'Richter'
room_a.splice(2,2);
console.log(room_a);
room_a.push('Richter');
console.log(room_a);
// could also be done as bellow

room_a = names.slice(0,10)
room_a.splice(2,2, 'Richter');
console.log(room_a);
// the splice third paramether allows one to add elements in the list

// using unicode elements
today_dinner = ['🍔', '🌭', '🍕'];
//removing delicious, but less healthy food
today_dinner.pop();
today_dinner.pop();
//adding healthy food
today_dinner.push('🍳');
today_dinner.push('🥗');
today_dinner.push('🍏');
//final meal
console.log(today_dinner);

//summing arrays of strings

//now one wants to join the classrooms above into a single one

const classroom = room_a.concat(room_b);
console.log(classroom);
//instead of using + one needs to call .concat method

//bidimensional list

const sotn= ['Dracula', 'Maria', 'Richter', 'Alucard', 'Death'];
const cabal_numbers = [666, 18, 54, 398, 999];
const sotn_cabal = [sotn, cabal_numbers];
console.log(sotn_cabal);
// this will print a list inside of a list
// What is the only man in the list?
console.log(`The man is ${sotn_cabal[0][2]} Belmont`);
// Whos is the Main hero?
console.log(`ah, ${sotn_cabal[0][3]}. what is your business here?` );
// What is the number of the beast, or boss?
console.log(`${sotn_cabal[1][0]}, the number of the beast`);

//using functions to search lists

function search_by_name(name, list_){
    if (list_[0].includes(name)){
               
        const index = list_[0].indexOf(name);
        const cabal_number = list_[1][index] ;
        
        console.log(`${name} is here, and the number is ${cabal_number}`);
    } else{
        console.log(`${name} not found.`);
    }
}
search_by_name('Alucard',sotn_cabal);
search_by_name('Shaft',sotn_cabal);

// using functions to generate lists of numbers
//lets say one got a list o numbers and want to print then all automatically

let list_of_numbers = [100,200,300,400,500,600]


function print_n(list){
    // index could also be i        and here i++ or i+=1
    for (let index= 0; index<list.length; index = index+1){
        console.log(list[index]);
    };
}
print_n(list_of_numbers);
//now a bigger list
list_of_numbers = [100,200,300,400,500,600,700,800,900]
print_n(list_of_numbers)

//a smallet one
list_of_numbers = [100,200,300]
print_n(list_of_numbers)

function mean_(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
        {const mean = sum / list.length;
        console.log(`The mean is ${mean}.`);
    }
}
mean_(list_of_numbers);

// other ways to do the same with less code
function mean_2(list){
    let sum2 = 0;
    for (let i of list){
    sum2 += i;
    }
    {const mean = sum2/list.length;
    console.log(`The mean is ${mean}.`)
    };
}
mean_2(list_of_numbers);

// using foreach 

let sum3 = 0;

//this is also a callback function
list_of_numbers.forEach(function(number){
    sum3 += number;    
});

const mean__=sum3/list_of_numbers.length;
console.log(`The mean is ${mean__}.`)

//using strings and callbacks
//normal
classroom.forEach(function (name) {
    console.log(name);
});

//arrow
classroom.forEach((name)=> {
    console.log(name);
});

//callback
function name_printer(name) {
    console.log(name);
}
// this does not require () to call the return of the function
classroom.forEach(name_printer);

//using map method

// the grades of a classroom
const grades = [7, 10, 6, 4];
// the names of the students
const names2 = ['ARIEL khan', 'jessie STONE', 'kerry Sanders', 'ollie glass'];

// the teacher decided to give +1 to each student's grade

const new_grades = grades.map((grade) => {
    return grade+1;
})
console.log(new_grades);

// but eleven is an impossible grade

const new_grades2 = grades.map((grade) => {
    return grade+1>= 10 ? 10: grade+1;
})
console.log(new_grades2);
//now its all ok

// using map to convert lowcase into uppercase

const names_fixed = names2.map((name) => {
    return name.toUpperCase();
})
console.log(names_fixed);

// filtering elements

const reproved = names_fixed.filter((_, index) =>{
        return new_grades2[index] <7;
    })
        console.log(reproved);

const aproved = names_fixed.filter((_, index) =>{
    return new_grades2[index] >= 7;
})
    console.log(aproved);

//considering there are 3 clasrooms, what are the average value of their grades?

const room_1 = [7,9,1,4,6,10,9];
const room_2 = [2,3,10,6,8,7,5,7,10];
const room_3 = [10,4,9,8,7,6,8,4];

mean_(room_1);//ok this works but there is another way to do it
mean_(room_2);
mean_(room_3);

function mean_again(list) {
    const sum = list.reduce((accumulator, grade) => {
    return accumulator + grade;
    }, 0);

    const mean = sum/list.length;
    return mean
}
console.log(`The mean of room 1 is ${mean_again(room_1)}`)
console.log(`The mean of room 2 is ${mean_again(room_2)}`)
console.log(`The mean of room 3 is ${mean_again(room_3)}`)

//using Spread
//when using push one will change an array, even if it calls the push as another variable

const array = [1,2,3,4,5,6]
const new_array = array
new_array.push('lol')

//edited array
console.log(new_array)
//original and also edited
console.log(array)

//this can be trouble if one wants the last array to be original

const array2 = [1,2,3,4,5,6]
                 // ... is the spread operator
let new_array2 = [...array2]
new_array2.push('lol')

//edited array
console.log(new_array2)
//original and NOT edited array
console.log(array2)

// one can also push without using .push()

new_array2 = ['yay', ...array2, 'lolol']

//edited array
console.log(new_array2)
//original and NOT edited array
console.log(array2)

//removing duplicates from an array

const new_names = ['Ana', 'Lady', 'Ana', 'Bob', 'Lucas', 'Lucas', 'Alundra']
const mySet = new Set(new_names);
console.log(mySet)
//Set removes all that is duplicated in the array, but also converts the list into a Set object
//this will convert the Set into a list
const new_names2 = [...mySet];
console.log(new_names2)
