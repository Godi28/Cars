// importing React to use in component
import React from 'react';

// DeleteCar component that takes user input of an existing car object id in order to delete the object
class DeleteCar extends React.Component {
  /*
   * constructor setting initials states of 'id' and the server repsonse message to an empty string with
   * their handle functions
   * @param props properties
   */
  constructor(props) {
    super(props);
    this.state = { id: '', message: '' };
    // fucntion to handle id input binded to the key word 'this'
    this.handleID = this.handleID.bind(this);
    // function to handle the form submission binded to the key word 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // 'id' state set to its input change value in function
  handleID(e) {
    this.setState({ id: e.target.value });
  }

  // sending delete request to server on form submit
  handleSubmit(e) {
    // preventing page reload
    e.preventDefault();
    // id state stored in a variable for use as parameter
    let id = this.state.id;
    // fetch function with specified path that has an id paramater for delete request
    fetch(`/api/delete/${id}`, {
      // fetch method
      method: 'Delete',
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
    // html to take user input and call functions appropriately
    return (
      // key to help render one of many components
      <div key={1}>
        <br />
        <form onSubmit={this.handleSubmit}>
          <h5>Delete Car from the Server:</h5>
          <input
            id='in'
            type='text'
            placeholder='enter id'
            value={this.state.id}
            onChange={this.handleID}
          />
          <button id='delete' type='submit'>
            Submit
          </button>
        </form>
        <p>
          Result -<b>{' ' + message}</b>
          <br />
          <i>Reload the page if a car was deleted to see the updated list</i>
        </p>
      </div>
    );
  }
}

// exporting DeleteCar for rendering in index.js
export { DeleteCar };
