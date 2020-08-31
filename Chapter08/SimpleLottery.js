if(typeof(contracts) != undefined){ contracts = {} };
SimpleLottery_abibin = {"contracts":{"SimpleLottery.sol:SimpleLottery":{"abi":"[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"TICKET_PRICE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"buy\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"drawWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ticketingCloses\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tickets\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"winner\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]","bin":"608060405234801561001057600080fd5b5060006203f4809050804201600281905550506104bb806100326000396000f3fe6080604052600436106100745760003560e01c8063a6f2ae3a1161004e578063a6f2ae3a1461012c578063b2185bb114610136578063dfbf53ae1461014d578063fdbbfbc61461018e57610083565b80631a95f15f146100855780633ccfd60b146100b057806350b44712146100c757610083565b36610083576100816101b9565b005b005b34801561009157600080fd5b5061009a61023f565b6040518082815260200191505060405180910390f35b3480156100bc57600080fd5b506100c561024a565b005b3480156100d357600080fd5b50610100600480360360208110156100ea57600080fd5b81019080803590602001909291905050506102ed565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101346101b9565b005b34801561014257600080fd5b5061014b610329565b005b34801561015957600080fd5b50610162610459565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019a57600080fd5b506101a361047f565b6040518082815260200191505060405180910390f35b662386f26fc1000034146101cc57600080fd5b60025442106101da57600080fd5b6000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b662386f26fc1000081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102a457600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156102ea573d6000803e3d6000fd5b50565b600081815481106102fa57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61012c60025401421161033b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461039657600080fd5b6000600143034060ff6040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050600080805490508260001c816103e057fe5b06815481106103eb57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002548156fea2646970667358221220779376fcd31d8b9c98cc277d25ead09bc9c77ced934c96db6db876911c3d9e5e64736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
SimpleLottery_abibin = SimpleLottery_abibin['contracts']['SimpleLottery.sol:SimpleLottery'];
bytecode = SimpleLottery_abibin.bin;
abi = JSON.parse(SimpleLottery_abibin.abi);
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
    contracts['SimpleLottery'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();
