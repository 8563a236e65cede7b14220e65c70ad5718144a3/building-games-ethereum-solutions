var SimpleLottery = artifacts.require("SimpleLottery")

module.exports = function(deployer, network) {
    var duration = 60 * 10;
    deployer.deploy(SimpleLottery, duration)
}