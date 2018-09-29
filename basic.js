const eth = require('./eth')

let web3 = eth.getWeb3(eth.kovan)

web3.eth.isSyncing().then((r) => {
  console.log('isSyncing:', r)
})

web3.eth.isMining().then((r) => {
  console.log('isMining:', r)
})

// need right
// web3.eth.getCoinbase().then((r) => {
//   console.log('coinbase:', r)
// })

web3.eth.getGasPrice().then((r) => {
  console.log('gasPrice:', r)
})

web3.eth.getTransaction('0x38a814c38966467000f3d83910ca021b0db19a599bbad5f575f45674972f9190')
.then(console.log)

web3.eth.getTransactionCount("0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe")
.then(console.log)

web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1")
.then(console.log)

web3.eth.getAccounts()
.then(console.log)