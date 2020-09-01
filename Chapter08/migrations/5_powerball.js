var Powerball = artifacts.require("Powerball")

module.exports = function(deployer, network) {
    var duration = 100;
    var reveal_duration = 10;
    deployer.deploy(Powerball);
}