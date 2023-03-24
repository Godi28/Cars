/* importing React and ReactDom, all the components for the website from their respective files,
 * a custom CSS file and bootstrap CSS
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Header} from './Components/header.js';
import { CarsDisplay } from './Components/cars-display.js';
import { PostCar } from './Components/post-car.js';
import { DeleteCar } from './Components/delete-car.js';
import { UpdateModel } from './Components/update-model.js';
import { UpdateSeats } from './Components/update-seats.js';
import './Assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// rendering all the components to the HTML page
ReactDOM.render(
  <>
    <Header />
    <CarsDisplay />
    <PostCar />
    <UpdateModel />
    <UpdateSeats />
    <DeleteCar />
  </>,
  document.getElementById('root')
);
