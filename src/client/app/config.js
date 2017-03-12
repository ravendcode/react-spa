export let baseUrl = 'http://localhost'

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://ravend-react-webpack.herokuapp.com'
}


