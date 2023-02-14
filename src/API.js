import axios from 'axios';
const instance=axios.create({
  baseURL: "https://deendevs.com/api/letter/"
});
export default instance;