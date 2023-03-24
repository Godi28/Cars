/*
 * parseData function that uses control structures to check data type in a request then converts
 * the data to a javascript object for non-object json data
 * @param data a javascript object or json string
 * @return javascript object
 */
exports.toObject = function (data) {

    
  if (!data) {
    // returning empty object for no data
    return {};
  }
  if (typeof data === 'object') {
    // returning the data if it already a javascript object
    return data;
  }
  if (typeof data === 'string') {
    // returning data parsed into a javascript object
    return JSON.parse(data);
  }
}
