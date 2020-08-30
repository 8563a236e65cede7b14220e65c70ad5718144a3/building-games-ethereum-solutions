if(typeof(contracts) != undefined){ contracts = {} };
HackableRoulette_abibin = {"contracts":{"0012_hackable_roulette.sol:HackableRoulette":{"abi":"[{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balances\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"betRed\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"randomNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]","bin":"608060405234801561001057600080fd5b506102a8806100206000396000f3fe6080604052600436106100435760003560e01c806327e235e31461004c5780633ccfd60b146100b157806370d0b630146100bb578063ccbac9f5146100c55761004a565b3661004a57005b005b34801561005857600080fd5b5061009b6004803603602081101561006f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100f0565b6040518082815260200191505060405180910390f35b6100b9610108565b005b6100c36101fc565b005b3480156100d157600080fd5b506100da61026d565b6040518082815260200191505060405180910390f35b60006020528060005260406000206000915090505481565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060003373ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d80600081146101ab576040519150601f19603f3d011682016040523d82523d6000602084013e6101b0565b606091505b5050905060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080600261020961026d565b8161021057fe5b06149050801561026a57600234026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b50565b60009056fea2646970667358221220b6497aeba26dda54c3ec988376ffad86fbe89d08190355efe78966c73bb05bfd64736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
HackableRoulette_abibin = HackableRoulette_abibin['contracts']['0012_hackable_roulette.sol:HackableRoulette'];
bytecode = HackableRoulette_abibin.bin;
abi = JSON.parse(HackableRoulette_abibin.abi);
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
    contracts['HackableRoulette'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();
