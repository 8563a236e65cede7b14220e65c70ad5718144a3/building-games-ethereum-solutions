var RNGLottery = artifacts.require("RNGLottery")

module.exports = function(deployer, network) {
    var duration = 100;
    var reveal_duration = 10;
    deployer.deploy(RNGLottery, duration, reveal_duration);
}