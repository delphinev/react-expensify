// const person = {
  // name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// }

// const name = person.name
// const age = person.age

// const { name: firstname = 'Anonymous', age } = person

// console.log(`${firstname} is ${age}.`)

// const { city, temp } = person.location
// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`)
// }
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}.`)
// }

// const { city, temp: temperature} = person.location

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;
const [, city, state = 'New York'] = address;

// console.log(`You are in ${address[1]} ${address[2]}.`)
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , price] = item;

console.log(`A medium ${coffee} costs ${price}.`)
