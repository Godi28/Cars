// requiring file system modules and getCars module
const fs = require('fs');
const getCars = require("./get-cars.js");
/*
 * addCar fucntion with carEntry parameter that is the new entry added to the cars object array
 * @param carEntry a javascript object
 */
exports.toFile = function (carEntry) {


  // calling getCars function and storing the returning object array in a variable
  const carsArray = getCars.readFile();
  // pushing carEntry into cars object array
  carsArray.push(carEntry);
  // updating cars.json
  fs.writeFileSync('cars.json', JSON.stringify(carsArray));
};
