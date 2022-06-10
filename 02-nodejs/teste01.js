function one(callback) {
  return callback('oi')
}

function two(data) {
  console.log(data)
}

one(two)