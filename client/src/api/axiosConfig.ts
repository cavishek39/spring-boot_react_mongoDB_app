import axios from 'axios'

export default axios.create({
  baseURL: 'https://fb08-103-171-247-105.ngrok.io',
  headers: { 'ngrok-skip-browser-warning': 'true' },
})
