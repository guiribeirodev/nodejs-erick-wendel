const { getPeoples } = require('./service')

Array.prototype.myFilter = function (callback) {
  const lista = []
  for (index in this) {
    const item = this[index]
    const result = callback(item, index, this)

    if (!result) continue;
    lista.push(item)
  }
  return lista
}

async function main() {
  try {
    const { results } = await getPeoples('a')

    // const familiaLars = results.filter((item) => {
    //   const result = item.name.toLowerCase().indexOf('lars') != -1
    //   return result
    // })

    const familiaLars = results.myFilter((item) => {
      return item.name.toLowerCase().indexOf('lars') != -1
    })

    const names = familiaLars.map((pessoa) => pessoa.name)
    console.log(names)

  } catch (error) {
    console.error('Erro na main filter.js', error)
  }
}

main()