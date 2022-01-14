// for random number
const Lighthouse = artifacts.require("Lighthouse");
const Exchange   = artifacts.require("Exchange");

module.exports = async (deployer, network) => {  

  
  const accounts      = await web3.eth.getAccounts();
  const feeAccount    = accounts[0];
  const feePercent    = 1;
  
  /*
  On Rinkeby use rinkeby address
  */
  if(network == "rinkeby") {

    var address = '0x613D2159db9ca2fBB15670286900aD6c1C79cC9a';   //address of RNG on rinkeby
    await deployer.deploy(Exchange, feeAccount, feePercent, address);

  } else {    // For testing

    await deployer.deploy(Lighthouse);
    await deployer.deploy(Exchange, feeAccount, feePercent, Lighthouse.address);

  }
  
};
