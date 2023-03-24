// importing React for use in the component
import React from 'react';

/* 
 * Postcar component that takes user input of car object properties and adds the entered car object 
 * to the existing cars list on the server side
 */
class PostCar extends React.Component {
  /*
   * constructor setting initial states of the car object properties and server response message to
   * empty strings with their respective handle functions
   * @param props properties
   */
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      make: '',
      model: '',
      seats: '',
      image: '',
      message: '',
    };
    // functions to handle respective car object property input changes binded to the key word 'this'
    this.handleID = this.handleID.bind(this);
    this.handleMake = this.handleMake.bind(this);
    this.handleModel = this.handleModel.bind(this);
    this.handleSeats = this.handleSeats.bind(this);
    this.handleImage = this.handleImage.bind(this);
    // function to handle the form submission binded to the key word 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 'id' state set to its input change value in function
  handleID(e) {
    this.setState({ id: e.target.value });
  }
  // 'make' state set to its input change value in function
  handleMake(e) {
    this.setState({ make: e.target.value });
  }
  // 'model' state set to its input change value in function
  handleModel(e) {
    this.setState({ model: e.target.value });
  }
  // 'seats' state set to its input change value in function
  handleSeats(e) {
    this.setState({ seats: e.target.value });
  }
  // 'image' state set to its input change value in function
  handleImage(e) {
    this.setState({ image: e.target.value });
  }
  // function to post cars object properties to server on form submit
  handleSubmit(e) {
    // preventing page reload
    e.preventDefault();
    // fetch function to post a new car object to the server through specified path
    fetch('/api/newcar', {
      // fetch method
      method: 'POST',
      // header posted in request defining the posted content type
      headers: {
        'Content-Type': 'application/json',
      },
      // request body sending json string of the cars object properties entered by user
      body: JSON.stringify({
        id: Number.parseInt(this.state.id),
        make: this.state.make,
        model: this.state.model,
        seats: Number.parseInt(this.state.seats),
        image: this.state.image,
      }),
    }) // server response from post consumed and parsed to javascript string
      .then((response) => response.json())
      // 'message' state set to consumed javascript string
      .then((result) => {
        this.setState({ message: result });
      });
  }

  render() {
    // server response message state stored in variable for use in html
    let message = this.state.message;
    // html to print the form for user input and call the respective functions appropriately
    return (
      // key to help bring one of many components
      <div key={4}>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <h5>Add a Car to the Server:</h5>
          <input
            id='inp1'
            type='text'
            placeholder='enter next id'
            value={this.state.id}
            onChange={this.handleID}
          />
          <input
            id='inp2'
            type='text'
            placeholder='enter make'
            value={this.state.make}
            onChange={this.handleMake}
          />
          <input
            id='inp3'
            type='text'
            placeholder='enter model'
            value={this.state.model}
            onChange={this.handleModel}
          />
          <input
            id='inp4'
            type='text'
            placeholder='enter seats'
            value={this.state.seats}
            onChange={this.handleSeats}
          />
          <textarea
            type='text'
            placeholder='enter base64 image url'
            value={this.state.image}
            onChange={this.handleImage}
          />
          <button id='post' type='submit'>
            Submit
          </button>
        </form>
        <p>
          Result -<b>{' ' + message}</b>
          <br />
          <i>Reload the page if a car was added to see the updated list</i>
        </p>
      </div>
    );
  }
}

// exporting PostCar component for rendering in index.js
export { PostCar };
