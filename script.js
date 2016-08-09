
// // Promise principle #2: Promise `.then`s can be chained

// getJSON('catagories.json')
//   .then(function () {
//     console.log('`.then` #1 will fire first')
//   })
//   .then(function (catagory) {
//     console.log('`.then` #2 will fire second')
//   })

// // The return value of the first then becomes the argument to the second then

// getJSON('types.json')
//   .then(function (arg) {
//     console.log("`.then` #1's argument contains the return value of the promise:", arg)
//     return 'Hello #2 from #1'
//   })
//   .then(function (arg) {
//     console.log("`.then` #2's argument contains the return value of the first `.then`:", arg)
//   })

// getJSON('products.json')
//   .then(function (arg) {
//     console.log("`.then` #1's argument contains the return value of the promise:", arg)
//     return 'Hello #2 from #1'
//   })
//   .then(function (arg) {
//     console.log("`.then` #2's argument contains the return value of the first `.then`:", arg)
//   })