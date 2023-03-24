// requiring file system modules
const fs = require('fs');

/*
 * getCars function that reads cars.json resource and return the cars object array if the file exists
 * and creates the cars.json file if it doesn'nt exist
 * @return cars object array
 */
exports.readFile = function() {


  try {
    const data = fs.readFileSync('cars.json');
    return JSON.parse(data);
  } catch (e) {
    // creating file if does'nt exist
    fs.writeFileSync('cars.json', '[]');
    return [];
  }
};
