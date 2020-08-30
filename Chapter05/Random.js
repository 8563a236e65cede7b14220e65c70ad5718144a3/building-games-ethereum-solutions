if(typeof(contracts) != undefined){ contracts = {} };
Random_abibin = {"contracts":{"0016_random_numbers_blockhash.sol:Random":{"abi":"[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"end\",\"type\":\"uint256\"}],\"name\":\"rand_between\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"seed\",\"type\":\"uint256\"}],\"name\":\"random\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]","bin":"608060405234801561001057600080fd5b50610162806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632a8a37ad1461003b578063b863bd3714610087575b600080fd5b6100716004803603604081101561005157600080fd5b8101908080359060200190929190803590602001909291905050506100c9565b6040518082815260200191505060405180910390f35b6100b36004803603602081101561009d57600080fd5b81019080803590602001909291905050506100ed565b6040518082815260200191505060405180910390f35b60008282036100db6307543def6100ed565b816100e257fe5b068301905092915050565b600060014303408260405160200180838152602001828152602001925050506040516020818303038152906040528051906020012060001c905091905056fea26469706673582212200855ff1f7330beba6033f1509d36c3f7c74790cd2edf4974f451dc1154710fc264736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
Random_abibin = Random_abibin['contracts']['0016_random_numbers_blockhash.sol:Random'];
bytecode = Random_abibin.bin;
abi = JSON.parse(Random_abibin.abi);
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
    contracts['Random'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();
