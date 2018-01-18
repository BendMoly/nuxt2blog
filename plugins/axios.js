import axios from 'axios'

let options = {
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  },
  baseURL: 'http://localhost:8081'
}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = 'http://116.62.170.59:8081'
}

export default axios.create(options)
