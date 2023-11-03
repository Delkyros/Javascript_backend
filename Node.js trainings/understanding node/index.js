/*
Objectives

Get a user
Get its id
Get its phone number
Get its address


One will use a simulation of how does node
 access a database to find those information.
*/

function get_user(callback) {
    setTimeout(function (){
        return callback(null, {
            id:1,
            name: "someone",
            birth: new Date()
        })
    }, 1000);

}

function user_callback(error, user){
    console.log("user", user)
}


function get_user_phone(user_id) {
    setTimeout(()=>{
        return{
            phone: '+554835428967',
            ddd: 48
        }
    },2000);
}

function get_user_address(user_id) {
    setTimeout(()=>{
        return{
            number: "42",
            street: "A good street",
            suite_number: 'NA',
            city: "A perfect city",
            State: 'Acre',
            postal_code: "88693145",
            country: "Brazil"
        }
    },2000);
}

//const user = get_user()
//const user_phone = get_user_phone(user)
//const user_address = get_user_address(user)

get_user(user_callback)
