contracts = {};
TransferBalance_abibin = {"contracts":{"0003_transfer_balance_user.sol:TransferBalance":{"abi":"[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"payout\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"print_balance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]","bin":"608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610106806100606000396000f3fe6080604052348015600f57600080fd5b506004361060315760003560e01c8062cefb5614603657806363bd1d4a146052575b600080fd5b603c605a565b6040518082815260200191505060405180910390f35b60586062565b005b600047905090565b600047905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801560cc573d6000803e3d6000fd5b505056fea2646970667358221220ccded7b50a81166186bd4ac5ee7eb5e7aa5282eb643519f65072bc5527c4e2cf64736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
TransferBalance_abibin = TransferBalance_abibin['contracts']['0003_transfer_balance_user.sol:TransferBalance'];
bytecode = TransferBalance_abibin.bin;
abi = JSON.parse(TransferBalance_abibin.abi);
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
    contracts['TransferBalance'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();
