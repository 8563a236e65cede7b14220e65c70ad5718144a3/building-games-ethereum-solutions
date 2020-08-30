if(typeof(contracts) != undefined){ contracts = {} };
TrustFund_abibin = {"contracts":{"0004_bad_multiple_transfers.sol:TrustFund":{"abi":"[{\"inputs\":[{\"internalType\":\"address payable[3]\",\"name\":\"_children\",\"type\":\"address[3]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"Received\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"disperse\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"print_balance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"child\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"newAddress\",\"type\":\"address\"}],\"name\":\"updateAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]","bin":"608060405234801561001057600080fd5b506040516104c83803806104c88339818101604052606081101561003357600080fd5b810190809190505080600090600361004c929190610053565b505061010b565b82600381019282156100bf579160200282015b828111156100be5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610066565b5b5090506100cc91906100d0565b5090565b5b8082111561010757600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506001016100d1565b5090565b6103ae8061011a6000396000f3fe6080604052600436106100375760003560e01c8062cefb56146100955780632ab29df7146100c057806388b6ff9c1461011b57610093565b36610093577f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f885258743334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1005b005b3480156100a157600080fd5b506100aa610132565b6040518082815260200191505060405180910390f35b3480156100cc57600080fd5b50610119600480360360408110156100e357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061013a565b005b34801561012757600080fd5b506101306101f1565b005b600047905090565b6000826003811061014757fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101a057600080fd5b80600083600381106101ae57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60004790506000806003811061020357fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6002838161024857fe5b049081150290604051600060405180830381858888f19350505050158015610274573d6000803e3d6000fd5b50600060016003811061028357fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600483816102c857fe5b049081150290604051600060405180830381858888f193505050501580156102f4573d6000803e3d6000fd5b50600060026003811061030357fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004838161034857fe5b049081150290604051600060405180830381858888f19350505050158015610374573d6000803e3d6000fd5b505056fea26469706673582212200ab4c1818c7886f50ea1f24eb0b355077563107311bdeef5da756f3e78cebbf564736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
TrustFund_abibin = TrustFund_abibin['contracts']['0004_bad_multiple_transfers.sol:TrustFund'];
bytecode = TrustFund_abibin.bin;
abi = JSON.parse(TrustFund_abibin.abi);
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
    contracts['TrustFund'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();
