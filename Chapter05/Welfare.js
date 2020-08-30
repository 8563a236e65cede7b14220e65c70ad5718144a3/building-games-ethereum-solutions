if(typeof(contracts) != undefined){ contracts = {} };
Welfare_abibin = {"contracts":{"0009_safe_welfare.sol:Welfare":{"abi":"[{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"print_balance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"register\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]","bin":"6080604052600060015534801561001557600080fd5b5061023a806100256000396000f3fe6080604052600436106100375760003560e01c8062cefb56146100505780631aa3a0081461007b5780633ccfd60b146100925761004e565b3661004e5734600160008282540192505081905550005b005b34801561005c57600080fd5b5061006561009c565b6040518082815260200191505060405180910390f35b34801561008757600080fd5b506100906100a4565b005b61009a610109565b005b600047905090565b6000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600080805490506001548161015e57fe5b04905081811161016d57600080fd5b6000828203905081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156101fe573d6000803e3d6000fd5b5050505056fea2646970667358221220e49f3f70ca45151874aeb450091795dc4290ac6c1a2e01c67b224ded086504b564736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
Welfare_abibin = Welfare_abibin['contracts']['0009_safe_welfare.sol:Welfare'];
bytecode = Welfare_abibin.bin;
abi = JSON.parse(Welfare_abibin.abi);
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
    contracts['Welfare'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();
