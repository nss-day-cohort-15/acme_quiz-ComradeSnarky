'use strict';


let row = document.getElementById("row");
let output = "";
// This function does one thing, and returns a promise
var promise1 = getCategories();
function getCategories() {
  return new Promise((resolve, reject) => {
    var catLoader = new XMLHttpRequest();
     catLoader.open("GET", "jsons/categories.json");
    catLoader.send();

    catLoader.addEventListener("load", function(){
      var listOfCategories = JSON.parse(this.responseText).categories;
      resolve(listOfCategories);
    });
    catLoader.addEventListener("error", function(){
      reject();
    });

  });
};

// This function does one thing, and returns a promise

var promise2 = getTypes();
function getTypes() {
  return new Promise((resolve, reject) => {
    var typeLoader = new XMLHttpRequest();
    typeLoader.open("GET", "jsons/types.json");
    typeLoader.send();

    typeLoader.addEventListener("load", function(){
      var listOfTypes = JSON.parse(this.responseText).types;
      resolve(listOfTypes);
    });
    typeLoader.addEventListener("error", function(){
      reject();
    });

  });
};


// This function does one thing, and returns a promise

var promise3 = getProducts();
function getProducts() {
    return new Promise((resolve,reject) => {
      var prodLoader = new XMLHttpRequest();
      prodLoader.open("GET", "jsons/products.json");
      prodLoader.send();

      prodLoader.addEventListener("load", function(){
        var listOfProducts = JSON.parse(this.responseText).products;
        resolve(listOfProducts);
      });
      prodLoader.addEventListener("error", function(){
        reject();
      });

    });
  };


//use above Promises to describe the order of execution,
promise1.then(function(data1){
  console.log('data', data1)
});
promise2.then(function(data2) {
  console.log('data', data2)
});
promise3.then(function(data3) {
  console.log('data', data3)
});

  // show in DOM
function buildCard(products) {
  for (var i = 0; i < products.length; i++) {
  row.innerHTML += `<div class="row">${products[i].name.value}</div><div>${products[i].categories.value}/div>`;
  };
};
buildCard();


// var output = document.querySelector(".output")
//   var results = "" //need variable to build string and push into innerHTML so it does not get closed automatically
// // Loop over the inventory and populate the page
//   inventory.forEach(function(car, i){ //argument in function(car) becomes the 'i' like in a regular for loop
//     if (i % 3 === 0) { // starts a new row at the point to which your cards go to the next row (3 can be however many 'cards' you will have on each row)
//       results += `<div class="row">`
//     }
//     results += `
      // <div class="col-md-4 carCard" style="border-color: ${car.color}">
      // <h3>${car.make}</h3>
      // <h3>${car.model}</h3>
      // <h3>${car.year}</h3>
      // <h3>${car.price}</h3>
      // <h3>${car.color}</h3>
      // <h3>${car.purchased}</h3>
      // <p>${car.description}</p>
      // </div>
      // ` //+= because each time you are reassigning results //need variable to build string and push into innerHTML so it does not get closed automatically

  // if ((i + 1) % 3 === 0) {
  //   results += `</div>`
  // }
  // })
  // output.innerHTML = results

// var loadInventory = function () { //loadInventory is a function that immediately returns a promised object
//       return new Promise(function (resolve, reject) {
//       var inventoryLoader = new XMLHttpRequest();
//       inventoryLoader.open('GET', 'inventory.json')
//       inventoryLoader.send();

//       inventoryLoader.addEventListener("load", function () {
//         var data = JSON.parse(this.responseText)
//         fillInventory(data);
//         resolve(inventory); //no longer responsible for calling populatePage
//       });
//      });
//     };

//shorthand
// module.exports = {getCategories, getTypes, getProducts};
