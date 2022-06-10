function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: 'João',
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '999999888',
      ddd: '11'
    })
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}

function resolverUsuario(erro, usuario) {
  console.log('usuario ', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error('Deu erro no USUÁRIO', error)
    return
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error('Deu erro no TELEFONE', error1)
      return
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error('Deu erro no ENDEREÇO', error2)
        return
      }

      console.log(`
      Nome: ${usuario.nome},
      Endereço: ${endereco.rua} nº${endereco.numero},
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      `)
    })
  })
})