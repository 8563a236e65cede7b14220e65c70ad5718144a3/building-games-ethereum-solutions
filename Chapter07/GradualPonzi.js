if(typeof(contracts) != undefined){ contracts = {} };
GradualPonzi_abibin = {"contracts":{"0008_realistic_ponzi.sol:GradualPonzi":{"abi":"[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"MINIMUM_INVESTMENT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balances\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"investors\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]","bin":"608060405234801561001057600080fd5b506000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103de806100836000396000f3fe6080604052600436106100435760003560e01c806327e235e3146101775780633ccfd60b146101dc5780633feb5f2b146101e65780638a4660fe1461024b57610175565b366101755766038d7ea4c6800034101561005c57600080fd5b60008080549050348161006b57fe5b04905060005b60008054905081101561010e57816001600080848154811061008f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508080600101915050610071565b506000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050005b005b34801561018357600080fd5b506101c66004803603602081101561019a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610276565b6040518082815260200191505060405180910390f35b6101e461028e565b005b3480156101f257600080fd5b5061021f6004803603602081101561020957600080fd5b8101908080359060200190929190505050610361565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025757600080fd5b5061026061039d565b6040518082815260200191505060405180910390f35b60016020528060005260406000206000915090505481565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561035d573d6000803e3d6000fd5b5050565b6000818154811061036e57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b66038d7ea4c680008156fea2646970667358221220b0a858a25fd4c5338e7e10677ef84e12c465374c746eff99302c4d2c519871ac64736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
GradualPonzi_abibin = GradualPonzi_abibin['contracts']['0008_realistic_ponzi.sol:GradualPonzi'];
bytecode = GradualPonzi_abibin.bin;
abi = JSON.parse(GradualPonzi_abibin.abi);
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
    contracts['GradualPonzi'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();
