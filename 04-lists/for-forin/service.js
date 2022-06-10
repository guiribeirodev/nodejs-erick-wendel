const axios = require('axios')

const URL = 'https://swapi.dev/api/people'

async function getPeoples(nome) {
  const url = `${URL}/?search=${nome}&format=json`
  const response = await axios.get(url)
  return response.data
}

// getPeoples('r2')
//   .then((resultado) => {
//     console.log('resultado', resultado)
//   })
//   .catch((error) => {
//     console.error('Deu ruim', error)
//   })

module.exports = {
  getPeoples
}