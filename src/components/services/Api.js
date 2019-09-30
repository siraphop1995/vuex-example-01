import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.jsonbin.io/b/5c90b4da2d33133c4017028d`
  })
}