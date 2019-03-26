const ZziniToken = artifacts.require("ZziniToken");

module.exports = function(deployer) {
  deployer.deploy(ZziniToken);
};
