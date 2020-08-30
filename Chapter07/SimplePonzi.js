if(typeof(contracts) != undefined){ contracts = {} };
SimplePonzi_abibin = {"contracts":{"0001_simple_ponzi.sol:SimplePonzi":{"abi":"[{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"currentInvestment\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentInvestor\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]","bin":"6080604052600060015534801561001557600080fd5b50610246806100256000396000f3fe60806040526004361061002d5760003560e01c8063523e27d41461017a578063b2667cd0146101bb57610178565b36610178576000600a600b600154028161004357fe5b04905080341161005257600080fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503460018190555060008173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050509050600015158115151415610173576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f5061796d656e74204661696c656400000000000000000000000000000000000081525060200191505060405180910390fd5b505050005b005b34801561018657600080fd5b5061018f6101e6565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101c757600080fd5b506101d061020a565b6040518082815260200191505060405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001548156fea26469706673582212208542473db950f6182ddcfcb6d172e63fcb5ca8ea397a18aa718fdd388b09de1c64736f6c63430007000033"}},"version":"0.7.0+commit.9e61f92b.Linux.g++"}
;
SimplePonzi_abibin = SimplePonzi_abibin['contracts']['0001_simple_ponzi.sol:SimplePonzi'];
bytecode = SimplePonzi_abibin.bin;
abi = JSON.parse(SimplePonzi_abibin.abi);
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
    contracts['SimplePonzi'] = web3.eth.contract(abi).at(address);
    console.log('contract_loaded');
}
wait_for_contract();
