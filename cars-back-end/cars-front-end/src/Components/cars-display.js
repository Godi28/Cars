// importing React for use in the component
import React from 'react';

/* 
 * CarsDisplay component that fetches all the car objects from the cars server by API. It then
 * renders each car object in a list with its properties
 */
class CarsDisplay extends React.Component {
  /*
   * constructor setting error, loading and cars object initial states
   * @param props properties
   */
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cars: [],
    };
  }

  componentDidMount() {
    // fetch function with specified path
    fetch('/api')
      // fetch result consumed and parsed to javascripts object
      .then((res) => res.json())
      // javascript object consumed
      .then(
        (result) => {
          this.setState({
            // setting isLoaded state to true
            isLoaded: true,
            // setting cars state to javascripts object
            cars: result,
          });
        },
        // error handling
        (error) => {
          this.setState({
            // setting isLoaded state to true
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    // declaring set states for use in html
    const { error, isLoaded, cars } = this.state;
    /* 
     * control structures with conditions for rendering an error message if it exist, a loading message if not 
     * loaded or the cars list on succesful fetch to the webpage
     */
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // html with the cars list
      return (
        // key to help render one of many components
        <div key={0}>
          <h1 id='cars-h1'>Cars List</h1>
          <br />
          <table>
            <thead>
              <th>id</th>
              <th>Make</th>
              <th>Model</th>
              <th id='s'>Seats</th>
              <th id='i'>Image</th>
            </thead>
            <tbody>
              {cars.map((obj) => (
                <tr>
                  <td>{obj.id}</td>
                  <td>{obj.make}</td>
                  <td>{obj.model}</td>
                  <td>{obj.seats}</td>
                  <td>
                    <img alt='car' src={obj.image} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

// exporting CarsDisplay for rendering in index.js
export { CarsDisplay };
