personal.unlockAccount(eth.accounts[0], "nopassword")
eth.sendTransaction({
    from: eth.accounts[0],
    to: eth.accounts[3],
    value: 1e18,
    gas: 90e3,
    gasPrice: 20e9
});
eth.getBalance(eth.accounts[0]) / 1e18
eth.getBalance(eth.accounts[3]) / 1e18