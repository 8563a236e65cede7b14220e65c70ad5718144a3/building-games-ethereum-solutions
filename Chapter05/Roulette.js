if(typeof(contracts) != undefined){ contracts = {} };
Roulette_abibin = {"contracts":{"0007_internal_balances.sol:Roulette":{"abi":"[{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"betRed\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"kill\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"print_balance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]","bin":"608060405234801561001057600080fd5b50610232806100206000396000f3fe6080604052600436106100425760003560e01c8062cefb561461004b5780633ccfd60b1461007657806341c0e1b51461008057806370d0b6301461008a57610049565b3661004957005b005b34801561005757600080fd5b50610060610094565b6040518082815260200191505060405180910390f35b61007e61009c565b005b61008861016d565b005b610092610186565b005b600047905090565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610169573d6000803e3d6000fd5b5050565b3373ffffffffffffffffffffffffffffffffffffffff16ff5b60008060026101936101f7565b8161019a57fe5b0614905080156101f457600234026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b50565b60009056fea2646970667358221220923c822ffc00fe81ce103cc2e09d3f84eda0badfb6889b55b029680720e5b8c964736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
Roulette_abibin = Roulette_abibin['contracts']['0007_internal_balances.sol:Roulette'];
bytecode = Roulette_abibin.bin;
abi = JSON.parse(Roulette_abibin.abi);
personal.unlockAccount(eth.accounts[0], "");
web3.eth.defaultAccount = eth.accounts[0];
tx = eth.sendTransaction({
	from: eth.accounts[0],
	data: bytecode,
	gas: 500e3
});

function wait_for_contract(){
    if(web3.eth.getTransactionReceipt(tx) == null){
        setTimeout(wait_for_contract, 1000);
    } else {
       map_contract();
    }
}

function map_contract(){
    address = web3.eth.getTransactionReceipt(tx).contractAddress;
    contracts['Roulette'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();
