// This function does one thing, and returns a promise
var getCategories = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "categories.json"
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

// This function does one thing, and returns a promise
var getTypes = function(result_of_getCategories) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "types.json",
      data: result_of_getCategories
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};


// This function does one thing, and returns a promise
var getProducts = function(result_of_getTypes) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "products.json",
      data: result_of_getTypes
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};



//use above Promises to describe the order of execution,
getCategories()
  .then(function(data1) {
    return getTypes(data1);
  })
  .then(function(data2) {
    return getProducts(data2);
  }).then(function(data3){
    console.log(data3);
  });
