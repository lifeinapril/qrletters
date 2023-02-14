import axios from 'axios';
const instance=axios.create({
  baseURL: "http://deendevs.com/api/letter/"
});
export default instance;