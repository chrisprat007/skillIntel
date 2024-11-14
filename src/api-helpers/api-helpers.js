import axios from 'axios';
// Create an Axios instance with the base URL
const apiInstance = axios.create({
  baseURL: 'http://192.168.189.131:5050',                    
});

// Export the Axios instance for use in other files
export default apiInstance;
