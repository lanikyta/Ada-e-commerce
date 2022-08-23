import axios from 'axios'
const shopApi = axios.create({
  baseURL: 'https://strapiecommerce-production-9660.up.railway.app/api',
})
export default shopApi
