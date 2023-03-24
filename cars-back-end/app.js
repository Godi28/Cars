/* 
 * requiring express, helmet, file system and requiring modules getCars, parseData and addCar from
 * the respective files in the modules folder
 */
const express = require("express");
const helmet = require("helmet");
const getCars = require("./modules/get-cars.js");
const parseData = require("./modules/parse-data.js");
const addCar = require("./modules/add-car.js");
const fs = require("fs");
// declaring app as express() top level function 
const app = express();

// making server use helmet
app.use(helmet());

// route handler for get request on path (/api) that sends the cars object array as a response
app.get("/api", (req, resp) => {
  // calling getCars function and storing the returning object array in a variable
  const carsArray = getCars.readFile();
  // stringifying cars object array for readibility
  const stringArray = JSON.stringify(carsArray);
  // sending string as a response
  resp.send(stringArray);
});

// middleware to parse JSON in post request
app.use(express.json());

/*
 * route handler for post request on path (/api/newcar) that adds a carEntry object to the cars object array
 * if that car and id does'nt already exist
 */
app.post("/api/newcar", (req, resp) => {
  // data sent in the request body
  let carEntry = req.body;
  // calling parseData function to return javascript object stored in a variable
  let carEntryParsed = parseData.toObject(carEntry);
  // calling getCars function and storing the returning object array in a variable
  const carsArray = getCars.readFile();

  /*
   * cars object array map that compares the entered object id and model to each id and model of the objects
   * in the cars object array that adds the object to the cars object array if it is unique then alerts the user
   * of the outcome
   */
  carsArray.map((entry) => {
    /*
     * control structure to check if the id or model are'nt unique that alerts the user
     * (if the model is unique then the make is also unique)
     */
    if (
      entry.model === carEntryParsed.model ||
      entry.id === carEntryParsed.id
    ) {
      // sending response
      resp.json(
        "car id or car already exists (or try entering the next ascending id number)"
      );
    }
    /*
     * control structure to check if the id and model are unique also checking if the id is the
     * next ascending number in the list then adding the object if true and alerting the user
     */
    if (
      entry.model !== carEntryParsed.model &&
      entry.id !== carEntryParsed.id &&
      entry.id === carsArray.length &&
      carEntryParsed.id === carsArray.length + 1
    ) {
      // calling addCar to add user entered object
      addCar.toFile(carEntryParsed);
      // sending response
      resp.json("car added");
    }
  });
});

/*
 * route handler for delete request on path (/api/delete) with id as a paramter used to select an
 * object for deleting
 */
app.delete("/api/delete/:id", (req, resp) => {
  // id parameter entered by user
  const id = Number.parseInt(req.params.id);
  // calling getCars function and storing the returning object array in a variable
  const carsArray = getCars.readFile();
  /*
   *cars object array map that compares the entered id to each id of the objects in the cars object array
   *and deletes the object for a match then alerts the user of the outcome
   */
  carsArray.map((entry) => {
    // control structures to do the comparison and delete
    if (entry.id == id) {
      // getting the index of the object to delete
      const index = carsArray.indexOf(entry);
      // deleting the object
      carsArray.splice(index, 1);
      // updating cars.json resource
      fs.writeFileSync("cars.json", JSON.stringify(carsArray));
      // sending response
      resp.json("car deleted.");
    }
  });
  // sending response
  resp.json("car id not found");
});

/*
 * route handler for put request on path (/api/model) with id and model parameters that are used
 *to update an object's model property
 */
app.put("/api/model/:id/:model", (req, resp) => {
  // entered id parameter
  const id = Number.parseInt(req.params.id);
  // entered model parameter
  const model = req.params.model;
  // calling getCars function and storing the returning object array in a variable
  const carsArray = getCars.readFile();
  /*
   * cars object array map that compares the entered id to each id of the objects in the cars object array
   * and updates the object's model property for a match then alerts the user of the outcome
   */
  carsArray.map((entry) => {
    // control structures to do the comparison and update
    if (entry.id === id) {
      // updating property
      entry.model = model;
      // updating cars.json resource
      fs.writeFileSync("cars.json", JSON.stringify(carsArray));
      // sending response
      resp.json("car model updated");
    }
  });
  // sending response
  resp.json("car id not found.");
});

/*
 * route handler for put request on path (/api/seats) with id and seats parameters that are used
 * to update an object's seats property
 */
app.put("/api/seats/:id/:seats", (req, resp) => {
  // entered id parameter
  const id = Number.parseInt(req.params.id);
  // entered seats parameter
  const seats = Number.parseInt(req.params.seats);
  // calling getCars function and storing the returning object array in a variable
  const carsArray = getCars.readFile();
  /*
   * cars object array map that compares the entered id to each id of the objects in the cars object array
   * and updates the object's seats property for a match then alerts the user of the outcome
   */
  carsArray.map((entry) => {
    // control structures to do the comparison and update
    if (entry.id === id) {
      // updating property
      entry.seats = seats;
      // updating cars.json resource
      fs.writeFileSync("cars.json", JSON.stringify(carsArray));
      // sending response
      resp.json("car seats updated");
    }
  });
  // sending response
  resp.json("car id not found.");
});

// exporting app to be used for setting up the server in cars_server.js
module.exports = app;
