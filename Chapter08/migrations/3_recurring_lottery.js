var RecurringLottery = artifacts.require("RecurringLottery")

module.exports = function(deployer, network) {
    var duration = 100;
    deployer.deploy(RecurringLottery, duration)
}