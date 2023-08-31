
const ids = [0, 1, 2];
const names = ['Richter', 'Vlad', 'Maria'];
const email = ['vampire_killer@belmonts.com','soulstealer@valachia.com', 'Mary_me_S2@renard.com'];
const alive =  [true, false, true]
//this object is called dictionary

const ones = {};

for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    ones[id] = {
        name: names[i],
        email: email[i],
        alive: alive[i]
    };
}

console.log(ones);

//acessing a key of the dictionary

//when you don't know the keys of the dict 
console.log(ones[1]);

//when you know the keys
console.log(ones[1].name);

//acessing a data point inside a dictionary

console.log(ones[0].email);

//changing the dict values

const other_one = {
    name: 'Alucard',
    email: 'Dad_killer@valachia.com',
    alive: true,
};
other_one.name = 'not_draculA'
console.log(other_one.name)

//when the dict has more than one index, it must be declared
// if no index is called the values will be only 'no_email'

//adding an array to the dict

const ones_all = {
    ...ones,other_one}
console.log(ones_all);
// I want to know if there is someone alive
//                  first object              name column index          alive column
const aliveones_alls = Object.values(ones_all).filter(ones_all => ones_all.alive);

aliveones_alls.forEach(ones_all => {
    console.log(ones_all.name);
});

ones_all[0].hp = 100;
ones_all[0].attack = 20;

ones_all[1].hp = 350;
ones_all[1].attack = 80;

ones_all[2].hp = 80;
ones_all[2].attack = 15;

ones_all['other_one'].hp = 120;
ones_all['other_one'].attack = 35;

console.log(ones_all)

//adding a function inside the dict

ones_all[0].damage_taken = function(damage) {
    if (damage < this.hp) {
        this.hp -= damage; // Decrease the ones_all's hp
        console.log(`${this.name} took ${damage} damage and has ${this.hp} hp left.`);
    } else {
        this.hp = 0;
        this.alive = false;
        console.log(`${this.name} is dead.`);
    }
};

ones_all[0].damage_taken(50) //still alive

ones_all[0].damage_taken(50) //dead

//iteration

//obtaining the first dict keys
//                     first
for (let key in ones_all) {
    console.log(`The key are ${key}`);
};

//obtaining the first dict datapoints
for (let key in ones_all[0]) {
    console.log(`The datapoint ${key} is ${ones_all[0][key]}`);
}

// printing both
for (let key in ones_all[0]) {
    console.log(`The key name is ${key} and the datapoint is ${ones_all[0][key]}`);
};

//another way to access keys of a dict
const ones_all_keys = Object.keys(ones_all[0]);
console.log(ones_all_keys);

// Spreading an array inside the dict
const items = ['Vampire Killer','Tunic','Spell Book','Sword']
let itemIndex = 0
for (let key in ones_all) {
    ones_all[key].items = items[itemIndex]; // Assign the current item to the character
    itemIndex = (itemIndex + 1) % items.length; // Move to the next item, and loop back to the beginning if needed
}
console.log(ones_all);

//JSON (Javascript Object Notation)
const json_one_all = JSON.stringify(ones_all, null, 2); // The second argument (null) is for replacer function, and the third argument (2) is for indentation.
console.log(json_one_all);

/* This notation has some differences regarding the common dict. 
There is no variable type and declaration.
The data standard is {"string key" { "nested key object": "value"}}
All values and keys must have "", at the end of last value no comma is necessary.
functions and comments are not allowed.
undefined and all other non primitive types are not allowed too.
*/

//Why one could use this notation?

/*JSON works like an universal way to keep data. It can store configurations or
data like ones_all dict, for example. JSON can also be serialized and deserialized
to be sent, read and transformed in any network. Databases and Web API that uses
JSON are allowe to keep structured data and convert ir to other formats. Finally, 
JSON is easy to read and edit by both, humans, machines and also compatible with 
most programming languages.
*/

// operation with JSON
//converting JSON back to dict

let converted = JSON.stringify(...json_one_all);
console.log(converted);

//it returned a single big string

converted = JSON.parse(converted);
console.log(converted)
// now it is a JSON again

// how to search a key and value in JSON
//lets consider this new JSON file
const json = {
    "0": {
      "name": "Richter",
      "email": "vampire_killer@belmonts.com",
      "alive": false,
      "status":{
        "hp": 0,
        "attack": 20,
        "defense":15,
        "constitution": 12,
        "intelligence": 7
      },
      "items": "Vampire Killer"
    },
    "1": {
      "name": "Vlad",
      "email": "soulstealer@valachia.com",
      "alive": false,
      "status":{
        "hp": 350,
        "attack": 80,
        "defense":37,
        "constitution": 35,
        "intelligence": 20
      },
      "items": "Tunic"
    },
    "2": {
      "name": "Maria",
      "email": "Mary_me_S2@renard.com",
      "alive": true,
      "status":{
        "hp": 80,
        "attack": 10,
        "defense":8,
        "constitution": 10,
        "intelligence": 18
      },
      "items": "Spell Book"
    },
    "other_one": {
      "name": "not_draculA",
      "email": "Dad_killer@valachia.com",
      "alive": true,
      "status":{
        "hp": 120,
        "attack": 13,
        "defense":10,
        "constitution": 20,
        "intelligence": 15
      },
      "items": "Sword"
    }
  };
  
  function finder(list, key, value) {
    return Object.values(list).find((i) => i[key] === value);
  }
  
  const dracula = finder(json, "name", "Vlad");
  console.log(dracula);

// filtering the intelligence of the objects

  const charactersWithHighIntelligence = Object.keys(json)
  .map(key => json[key])
  .filter(character => character.name && character.status.intelligence > 7);

charactersWithHighIntelligence.forEach(character => {
  console.log(`${character.name}'s intelligence is higher than 7.`);
});

// using a single function

for (const key in json) {
    if (json[key].name && json[key].status.intelligence > 7) {
      console.log(`${json[key].name}'s intelligence is higher than 7.`);
    }else {
        console.log(`${json[key].name} is not smart.`)  
    }
  }

// sorting objects

function sorter(jsonArray, property) {
    const result = jsonArray.slice().sort((a, b) => {
      return a[property].localeCompare(b[property], undefined, { sensitivity: 'base' });
    });
    return result;
  }
  
  const sorted_by_names = sorter(Object.values(json), "name");
  console.log(sorted_by_names);

// This ends the fundamentals about objects and the operations with then