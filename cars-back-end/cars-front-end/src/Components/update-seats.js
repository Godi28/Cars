// importing React for use in the component
import React from 'react';

/*
 * UpdateSeats component that uses user input to update a car seats object property based
 * on a user entered car id
 */
class UpdateSeats extends React.Component {
  /*
   * constructor setting initial states of id , seats and server message to empty strings
   * with their respective handle functions
   * @param props properties
   */
  constructor(props) {
    super(props);
    this.state = { id: '', seats: '', message: '' };
    // function to handle id input binded to key word 'this'
    this.handleID = this.handleID.bind(this);
    // function to handle seats input binded to key word 'this'
    this.handleSeats = this.handleSeats.bind(this);
    // function to handle form submission binded to key word 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // 'id' state set to its input change value in function
  handleID(e) {
    this.setState({ id: e.target.value });
  }
  // 'seats' state set to its input change value in function
  handleSeats(e) {
    this.setState({ seats: e.target.value });
  }

  // function to make put request to update the seats on form submission
  handleSubmit(e) {
    // preventing page reload
    e.preventDefault();
    // id state stored in a variable for use as parameter
    let id = this.state.id;
    // seats state stored in avariable for use as parameter
    let seats = this.state.seats;
    // fetch function with put request through a specified path with id and seats parameters
    fetch(`/api/seats/${id}/${seats}`, {
      // fetch method
      method: 'Put',
      // headers sent with the delete request specifying the request and response content type
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }) // server response consumed and parsed to javascript string
      .then(function (response) {
        return response.json();
      }) // message state set to consumed javascript string
      .then((result) => {
        this.setState({ message: result });
      });
  }

  render() {
    // sever message state stored in a variable for use in html
    let message = this.state.message;
    // html to take user input for the update and call functions appropriately
    return (
      // key to help render one of many components
      <div key={3}>
        <br />
        <form onSubmit={this.handleSubmit}>
          <h5>Update Car Seats on the Server:</h5>
          <input
            id='inp1'
            type='text'
            placeholder='enter id'
            value={this.state.id}
            onChange={this.handleID}
          />
          <input
            id='inp2'
            type='text'
            placeholder='enter seats'
            value={this.state.seats}
            onChange={this.handleSeats}
          />
          <button id='seats' type='submit'>
            Submit
          </button>
        </form>
        <p>
          Result -<b>{' ' + message}</b>
          <br />
          <i>Reload the page if seats were updated to see the updated list</i>
        </p>
      </div>
    );
  }
}
// exporting UpdateSeats component for rendering in index.js
export { UpdateSeats };
