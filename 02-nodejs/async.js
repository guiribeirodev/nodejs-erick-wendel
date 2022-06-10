const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'João',
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefone: '999999888',
        ddd: '11'
      })
    }, 2000);
  })
}

function obterEndereco(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: 'dos bobos',
        numero: 0
      })
    }, 2000);
  })
}

async function main() {
  try {
    console.time('Medida Promise')
    const usuario = await obterUsuario()
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id)
    ])

    const telefone = resultado[0]
    const endereco = resultado[1]

    console.log(`
    Nome: ${usuario.nome},
    Endereço: ${endereco.rua} nº${endereco.numero},
    Telefone: (${telefone.ddd}) ${telefone.telefone}
    `)

    console.timeEnd('Medida Promise')
  } catch (error) {
    console.error('Deu algo errado', error)
  }
}

main()
