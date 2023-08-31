// tipo number

const my_number= 3;

const first_number =1;
const second_number= 2;

const operation = first_number * second_number;

console.log(operation)

// floats

const floaty_3 = 3.3;
const floaty_5 = .5; // =0.5

const new_operation= floaty_3/floaty_5;
console.log(new_operation)

// opearations with nan= not a number
n = 'alura'
n2= 4
const operation_nan = n/n2

// sorting a list

var list = [10,1, 5, 9, 8, 12, 15];

console.log(list.sort());
// not sorting...

function sorter(a,b) {
    if (a == b) return 0;
    if (a < b) return -1;
    if (a > b) return 1;
}
// applying the function
console.log(list.sort(sorter))

//simplification
console.log(list.sort((a,b) =>a -b))

// formating numbers

function BRL_salary(money, hours_worked){
    const payment = money / hours_worked
    Math.round(payment)
    const format = payment.toLocaleString ('pt-BR', { style: 'currency', currency: 'BRL'})
    return format
}
console.log(BRL_salary(1500, 40))

// Strings

const text1 = "Hello World";
const password = "Really_safe_password_123";
const string_numbers = "0123456789";
const citation = "However, Lecard says: 'Words that he said'"
console.log(citation)

// one can also template strings
// now use `` instead of "" or ''
const strings_ = `${text1}, I have a ${password}, and know numbers ${string_numbers}` 
console.log(strings_)

// concatenation

const summed_text = text1 + citation;
console.log(summed_text);

//templates and literals
//access here for more literals https://en.wikipedia.org/wiki/List_of_Unicode_characters
// for unicode descriptions https://home.unicode.org/

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

//Booleans

//comparing if the values are the same regardless of the type
console.log(2 == "2");
console.log(2.0 == "2");
console.log(2.0 == 2);

//comparing if the values are the same considering the type
console.log(2  === "2");
console.log(2.0  === "2");
console.log(2.0  === 2);

//conparing strings
console.log("string" == "string")
console.log("string" == "StrinG")
console.log("string" === "string")
console.log("string" === "StrinG")

// using var, let  and const

//vars are loaded first and then the code is executed
var height = 5;
var lenght = 7;
area = height * lenght;
var area;
//if the above var area would be a const or let, it would generate an error
console.log(area);

// now 'let' allows one to edit it, only if it was called before its use
let form = 'triangle'
let area2;
if (form ==='Square'){
area2 = height * lenght;
} else {
area2 = height*lenght/2;
}
console.log(area2);

//with const the is no way to change the value of the variable

const shape = 'rectangle';
const len = 3;
const hei = 9;

if (shape ==='rectangle' | form === 'Square'){
let area3 = len * hei;
} else {
area3 = hei*len/2;
}

//truthy and falsy booleans
console.log(false == 0);
console.log(true == 0);
console.log(false == 1);
console.log(true == 1);
console.log('' == 0);
console.log('' == 1);

console.log(null == 0);
console.log(null == 1);
console.log(null == undefined);
console.log(null == true);
console.log(null == false);

console.log(undefined == true);
console.log(undefined == false);
console.log(undefined == 0);
console.log(undefined == 1);

const var_null1=null;
let var_null2=null;
var var_null3=null;
console.log(typeof var_null1);
console.log(typeof var_null2);
console.log(typeof var_null3);
// This is one of the problems in js, when creating null variables they are type objects and not nulls

let var_undef2;
var var_undef3;
console.log(typeof var_undef2);
console.log(typeof var_undef3);
// undefined are type undefined

// conversion of data types
//implicit

let number = 1234567890;
let number_string = "1234567890";
//this compares values and types
console.log(number === number_string);
// this compares values and a certain mistake to this case
console.log(number == number_string);
// an implicit conversion of number into string
console.log(number + number_string);
// explicit conversion
console.log(number + Number(number_string));
// if the string as a non numeric character they will be returned as not a number 
number_string = "1234567890a";
console.log(number + Number(number_string));

// ternary operator
const minage =18;
const clientage = 16;
//without ternary operator
if (clientage >= minage) {
    console.log('Beer')
} else {
    console.log('milk')
}
//with ternary operator
                //condition     //true   //false
console.log(clientage >= minage ? "Beer" : "milk")
// it is small but harder to read and understand

//Functions

let x = '';
console.log(x);
x = 'hi';

function print_text(text) {
    console.log(text)
}
print_text('hi');
print_text(x);
print_text(5);

print_text(x)+print_text('hi')+print_text(5);
// simple functions that depends on each other
function sum_2n(x,y){
    let new_number = x + y
    return new_number
}

function type_new_number(new_number){
    const new_number_type = typeof(new_number)
    return new_number_type
}

console.log(type_new_number(sum_2n(3,'')))
console.log(type_new_number(sum_2n(3,5)))
console.log(type_new_number(sum_2n('lol','hey')))

//using Math built in functions
x= Math.random();
y= Math.random();

console.log(typeof(y));

function sum_2n_new(x,y){
    let new_number = Math.round(x + y)
    return new_number;
}

function sqrt_pow_numbers(new_number){
    const sqrt_plus_pow = Math.sqrt(new_number) + Math.pow(new_number, new_number)
    return sqrt_plus_pow;
}

console.log(sqrt_pow_numbers(sum_2n_new(x,y)));

//About paramethers and arguments
                //paramethers
function sum_2n_new(x,y){
    //arguments
    let new_number = Math.round(x + y);
    return new_number;
}

function multiply(number1, number2) {
    return console.log(number1 * number2)
}
//the return of a function can be used as a param for other functions
         //param number1   param number2   
multiply(sum_2n_new(x, y), Math.random())

// expressive function assignment
const multiply2 =  function(number1, number2) {return number1*number2}
//always use const to ensure that the variable will always be a function

//Arrow functions single argument

// single paramether functions don't need ()
const multiply_by2 = number => number*2;
// plural paramether functions requeres ()
const multiply3 = (n3, n4) => n3 * n4;

//more arguments using arrow functions

const num_classifier = (n1, n2) => {
           //or operator
    if (n1,n2 == null || undefined){
            return 'Paramethers are null or undefined'
        }
        if (n1 < 0 && n2 < 0){
        return 'n1 and n2 are negative'
        } if (n1 > 0 && n2 > 0){
            return "n1 and n2 are positive"
        } if ( n1 == 0 || n2 == 0) {
            return "n1 or n2 are zero"
        } else {
            return 'n1 or n2 are a string'
        }
}

console.log(num_classifier(1,))
console.log(num_classifier(-1,-1))
console.log(num_classifier(0,1))
console.log(num_classifier(1,1))
console.log(num_classifier(1,"lol"))



