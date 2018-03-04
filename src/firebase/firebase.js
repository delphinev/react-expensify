import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })

// const onValueChange = (snapshot) => {
//   console.log(snapshot.val())
// }

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() =>{
//   database.ref('age').set(28)
// }, 3500)

// setTimeout(() =>{
//   database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 7000)

// setTimeout(() =>{
//   database.ref('age').set(30)
// }, 10500)

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   isSingle: false,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((e) => {
//   console.log('This failed', e)
// });

// database.ref().set('This is my data');

// database.ref('age').set(27)
// database.ref('location/city').set('New York')
// database.ref('attributes/height').set(175)
// database.ref('attributes/weight').set(51)
// database.ref('attributes').set({
//   height: 73,
//   weight: 150
// }).then(() => {
//   console.log('data saved again')
// }).catch((e) => {
//   console.log('error:', e)
// })

// console.log('I made a request to change the data.')

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data has been removed')
//   })
//   .catch((e) => {
//     console.log('removing data went wrong', e)
//   })

// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   job: 'Software developer',
//   isSingle: null
// })

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Boston'
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// challenge

// database.ref().set({
//   name: 'Andrew',
//   job: 'Software Developer',
//   company: 'Amazon'
// })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job} at ${val.company}.`)
// })

// setTimeout(() => {
//   database.ref('name').set('Mike')
// }, 3500)

// ARRAYS

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// })

// database.ref('notes/-L6CsmB3qFhfZKvgAaHT').update({
//   body: 'Buy food'
// })

// database.ref('notes/-L6Ct29-uMus17whbgJy').remove()

// Challenge

// database.ref('expenses').push({
//   description: 'description 1',
//   note: 'note 1',
//   amount: 120,
//   createdAt: 120391
// })

// database.ref('expenses').push({
//   description: 'description 2',
//   note: 'note 2',
//   amount: 220,
//   createdAt: 220391
// })

// database.ref('expenses').push({
//   description: 'description 3',
//   note: 'note 3',
//   amount: 320,
//   createdAt: 32391
// })

// database.ref('expenses')
//   .on('value')
//   .then((snapshot) => {
//     // console.log(snapshot.val())
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });

//     console.log(expenses)
//   })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });

//     console.log(expenses)
//   })

// database.ref('expenses').push({
//   description: 'description 4',
//   note: 'note 4',
//   amount: 543,
//   createdAt: 527943274
// })

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
