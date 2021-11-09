import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-new-clone-5476e.cloudfunctions.net/api',
  //'http://localhost:5001/new-clone-5476e/us-central1/api', // THe API (Cloud Function) URL
})

export default instance
