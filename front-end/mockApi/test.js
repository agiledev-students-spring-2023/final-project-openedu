import axios from 'axios';

// Import this file whenever you need apis
import mockApi from './apis.js'

// This is an exmaple file for how to use axios with mockaroo
axios({
  method: 'GET',
  // Change courses to others for others' API
  url: mockApi("courses")
}).then(res => {
  // Take the data out
  console.log(res.data)
});