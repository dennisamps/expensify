// const person = {
//     name: 'Dennis',
//     age: 22,
//     location: {
//         city: 'Reading',
//         temp: 10
//     }
// };

// const {name = 'Anonymous' , age} = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name } is ${age}.`);

// const {temp: temperature,city} = person.location
// if (city && temperature) {


//     console.log(`Its ${temperature} in ${city}`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name:'Penguin'
//     }
// };


// const {name: publisherName = 'Self-published'} = book.publisher

// console.log(publisherName)


const address = ['1299 & Junior Street', 'Reading', 'United Kingdom', 'Rg40'];

const [street, town, country = England, postcode] = address;

console.log(`You are in ${town} ${country}.`);

const item = ['Coffee', '£2.00', '£2.50', '£2.75'];

const [items, small, medium, large] = item;

console.log(`A medium coffee costs ${medium}`);