const { getPeoples } = require('./service')

Array.prototype.myReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
  for (let index = 0; index <= this.length; index++) {
    valorFinal = callback(valorFinal, this[index], this)
  }
  return valorFinal
}

async function main() {
  try {
    const { results } = await getPeoples('a')
    const pesos = results.map(item => parseInt(item.height))
    console.log('pesos', pesos)
    // const total = pesos.reduce((anterior, proximo) => {
    //   return anterior + proximo
    // }, 0)
    const minhaLista = [
      ['Erick', 'Wendel'],
      ['NodeBr', 'Nerdzão']
    ]

    const total = minhaLista.myReduce((anterior, proximo) => {
      return anterior.concat(proximo)
    }, [])
      .join(', ')

    console.log('total', total)
  } catch (error) {
    console.error('DEU RUIM NO REDUCE', error)
  }
}

main()