const eth = require('./eth')

let web3 = eth.getWeb3WS(eth.kovan)

let pending = (async () => {
  web3.eth.subscribe('pendingTransactions')
  .on('data', function(tx) {
    console.log('tx:', tx)
  })
})()

let logs = (async () => {
  web3.eth.subscribe('logs', {fromBlock: 0})
  .on('data', function(log) {
    console.log('log:', log.topics[0])
  })
})()

let syncing = (async () => {
  web3.eth.subscribe('syncing')
  .on('data', function(sync) {
    console.log('data:', sync)
  })
  .on('changed', function(isSyncing) {
    console.log('isSyncing:', isSyncing)
  })
})()

Promise.all(pending, logs, syncing)