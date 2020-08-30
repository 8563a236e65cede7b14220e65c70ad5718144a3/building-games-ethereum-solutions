"""
    Create JavaScript file to load contract in Geth
    -----------------------------------------------

    Automates manual deployment
"""
import sys
import os
import os.path
import textwrap


def sol_compile(filename: str) -> str:
    stream = os.popen("solc --combined-json abi,bin " + filename)
    output = stream.read()
    return output


def js_contract_deployer(compiled: str, name: str) -> None:
    with open(name, "w") as f:
        abi_bin = name.replace(".js", "") + "_abibin"
        f.write("if(typeof(contracts) != undefined){ contracts = {} };\n")
        f.write(abi_bin + " = " + compiled + ";")
        f.write("\n")
        f.write(
            abi_bin +
            " = " +
            abi_bin +
            "['contracts']['" +
            sys.argv[1] +
            ":" +
            name.replace(".js", "") +
            "'];\n"
        )
        f.write("bytecode = " + abi_bin + ".bin;\n")
        f.write("abi = JSON.parse(" + abi_bin + ".abi);\n")
        f.write('personal.unlockAccount(eth.accounts[0], "");\n')
        f.write('web3.eth.defaultAccount = eth.accounts[0];\n')
        f.write('tx = eth.sendTransaction({\n\tfrom: eth.accounts[0],\n\tdata: bytecode,\n\tgas: 500e3\n});\n')
        f.write(
            textwrap.dedent(
                """
                function wait_for_contract(){
                    if(web3.eth.getTransactionReceipt(tx) == null){
                        setTimeout(wait_for_contract, 1000);
                    } else {
                       map_contract();
                    }
                }
                """ +
                """
                function map_contract(){
                    address = web3.eth.getTransactionReceipt(tx).contractAddress;
                    contracts['""" + name.replace(".js", "") +
                """'] = web3.eth.contract(abi).at(address);
                    console.log('contract_loaded');
                }
                wait_for_contract();
                """
            )
        )


def main():
    abi_bin = sol_compile(sys.argv[1])
    js_contract_deployer(abi_bin, sys.argv[2])


if __name__ == "__main__":
    main()
