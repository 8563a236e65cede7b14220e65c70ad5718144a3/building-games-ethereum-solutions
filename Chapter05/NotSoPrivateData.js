contracts = {};
NotSoPrivateData_abibin = {"contracts":{"0001_not_so_private_variables.sol:NotSoPrivateData":{"abi":"[{\"inputs\":[],\"name\":\"money\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]","bin":"608060405260106000556040518060400160405280600a81526020017f74776964646c656465650000000000000000000000000000000000000000000081525060019080519060200190610054929190610067565b5034801561006157600080fd5b50610104565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a857805160ff19168380011785556100d6565b828001600101855582156100d6579182015b828111156100d55782518255916020019190600101906100ba565b5b5090506100e391906100e7565b5090565b5b808211156101005760008160009055506001016100e8565b5090565b6085806101126000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634ddd108a14602d575b600080fd5b60336049565b6040518082815260200191505060405180910390f35b6000548156fea2646970667358221220ac186965d7faf744cd016807e56a495468cdc8417702e761487818e33475b68e64736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
NotSoPrivateData_abibin = NotSoPrivateData_abibin['contracts']['0001_not_so_private_variables.sol:NotSoPrivateData'];
bytecode = NotSoPrivateData_abibin.bin;
abi = JSON.parse(NotSoPrivateData_abibin.abi);
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
    contracts['NotSoPrivateData'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();

// Exercise
NotSoPrivateData = contracts['NotSoPrivateData'];
web3.eth.getStorageAt(NotSoPrivateData.contractAddress, 0)
web3.eth.getStorageAt(NotSoPrivateData.contractAddress, 1)