const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    // resolve('This is my other resolved data'); //you can only have one resolve so this one will never run
    reject('Something went wrong')
  }, 5000)
});

console.log('before')

promise.then((data) => {
  console.log(1, data)

  return 'some data';
}).then((str) => {
  console.log('does this run?', str)
  // str here has 'some data'
}).catch((error) => {
  console.log(error)
})

promise.then((data) => {
  console.log(1, data)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000)
  });
}).then((str) => {
  console.log('does this run?', str)
  // str is the new promise
}).catch((error) => {
  console.log(error)
})

// Equivalent
// promise.then((data) => {
//   console.log(data)
// },(error) => {
//   console.log(error)
// })

console.log('after')

// If we need more info in data
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Andrew',
      age: 26
    })
  }, 5000)
})

promise1.then((data) => {
  console.log(data)
})
