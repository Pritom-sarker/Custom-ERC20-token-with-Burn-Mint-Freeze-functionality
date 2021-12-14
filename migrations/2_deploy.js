const TokenP = artifacts.require("TokenP");

module.exports = function (deployer) {
  deployer.deploy(TokenP,1000);
};
