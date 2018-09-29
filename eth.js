const Web3 = require('web3')

let mainnet = 'mainnet'
let kovan = 'kovan'
let gatways = {
  mainnet: {
    http: 'https://mainnet.infura.io/CUNjkZ8qg6WZHqeFNJyL',
    ws: 'wss://mainnet.infura.io/ws'
  },
  kovan: {
    http: 'https://kovan.infura.io/CUNjkZ8qg6WZHqeFNJyL',
    ws: 'wss://kovan.infura.io/ws'
  }
}

function getWeb3(net) {
  return new Web3(gatways[net].http)
}

function getWeb3WS(net) {
  return new Web3(gatways[net].ws)
}

module.exports = {
  getWeb3,
  getWeb3WS,
  mainnet,
  kovan
}