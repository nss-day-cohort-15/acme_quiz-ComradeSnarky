"use strict";


$(document).ready(function() {
  let dropdownMenu = $(".dropdown-menu");
  var categories=[];
  var products=[];
  var types=[];

  var promise1 = function(){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "jsons/categories.json"
      }).done(function(data){
        resolve(data);
      }).fail(function(xhr, status, error) {
        reject(error);
      });
    });
  };

  var promise2 = function(result_of_firstXHR){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "jsons/types.json",
        // data: result_of_firstXHR
      }).done(function(data){
        resolve(data);
      }).fail(function(xhr, status, error){
        reject(error);
      });
    });
  };

  var promise3 = function(result_of_secondXHR){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "jsons/products.json",
        // data: result_of_secondXHR
      }).done(function(data){
        resolve(data);
      }).fail(function(xhr, status, error){
        reject(error);
      });
    });
  };

  promise1()
    .then(function(data1){
      categories = data1.categories;
      populateDropdown(categories);
      return promise2(data1);
    })
    .then(function(data2){
      types = data2.types;
      return promise3(data2);
    }).then(function(data3){
      let products1 = data3.products;
      products1.forEach(function(product){
        products.push(product[Object.keys(product)[0]]);
      });
      organizeAcme();
    });

  function populateDropdown(categories){
    dropdownMenu.html("");
    categories.forEach(function(cats){
      dropdownMenu.append(`<option value="${cats.id}">${cats.name}</option>`);
    });
  }

  function populateDOM(acmeArray){
    let acme = $("#container-fluid");
    acme.html("");
    acmeArray.forEach(function(product){
      $(`<div class = "col-md-4 col-md-4"><p>${product.name} - ${product.description}</p></div>`).appendTo(acme);
    });
  }

  function organizeAcme(){
    let finalProducts = products;
    finalProducts.forEach(function(finalProduct){
      finalProduct.typeInfo = types[finalProduct.type];
      finalProduct.categoryInfo = categories[finalProduct.typeInfo.category];
      // console.log("categoryInfo", );

    });
    // console.log("finalProducts", finalProducts);
    populateDOM(finalProducts);
  }

});



// function catDropdown(data1) {
//   data1.forEach(function(category) {
//     $('<option />', {
//       value: category.id,
//       text: category.name
//     }).appendTo(categoryDrop);
//     })
//   }
//   function typeDropdown(data2) {
//     data2.forEach(function(type) {
//       $('<option />', {
//         value: type.id,
//         text: type.name,
//         description: type.description

//       }).appendTo(typeDrop);
// })
// }





//shorthand
// module.exports = {getCategories, getTypes, getProducts};
