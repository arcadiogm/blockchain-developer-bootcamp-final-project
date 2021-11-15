Access Control Design Patterns

This design pattern is used to restricting access to certain functions in the contract. here its used in the revive function which restore the boss to full health.

function RestoreBossHealth() public onlyOwner {
   uint256 oldhealth = bigBoss.hp;
 bigBoss.hp = bigBoss.maxHp;

 emit RestoreHealth(oldhealth, bigBoss.hp);

 }

Inheritance and Interfaces

This design pattern is allows the usage of other contracts code in our contract, this contract inherts both ERC721 and Ownable

 /// @notice Abstract Wars NFTGAME contract inherits from ERC721, which is the standard NFT contract!

contract NFTGAME is ERC721, Ownable {

 /**

Oracles

A major limitation of smart contracts is that they can't trigger or initiate their own functions at arbitrary times or under arbitrary conditions. State change will only occur when a transaction is initiated by another account (such as user, oracle, or contract). this project uses chainlink's keeper in order to restore the boss health

unction checkUpkeep(bytes calldata /* checkData */)external view

 override returns (bool upkeepNeeded,bytes memory /* performData */)

 {

 upkeepNeeded = bigBoss.hp <= 0;

 }

  

 function performUpkeep(bytes calldata /* performData */) external override onlyKeepers { 
 
 uint256 oldhealth = bigBoss.hp;

 bigBoss.hp = bigBoss.maxHp;

 emit RestoreHealth(oldhealth, bigBoss.hp);

 }

