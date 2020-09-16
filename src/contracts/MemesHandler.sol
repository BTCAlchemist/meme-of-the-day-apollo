pragma solidity 0.5.0;

contract MemesHandler {

  struct MemeStruct {
    string ipfsHash;
    uint votes;
    bool isMeme;
  }

  mapping(address => MemeStruct) public memeStructs;
  address[] public memesList;

  constructor() public {
    memeStructs[0xBCe3fe1C153036288Dd4745235F03d19cb357602].ipfsHash = 'QmWERhDH1PLhYAeRLQQ8Cc9ykmi8XUvsBeEXgZcwQ3fAuL';
    memeStructs[0xBCe3fe1C153036288Dd4745235F03d19cb357602].votes = 5;
    memeStructs[0xBCe3fe1C153036288Dd4745235F03d19cb357602].isMeme = true;
    memesList.push(0xBCe3fe1C153036288Dd4745235F03d19cb357602) -1;
    memeStructs[0x1905C992cC392484D87c99156Da3F27e50F26A4b].ipfsHash = 'QmNP2xz4PkPXZwaUyzC9tyDdTjEpET1D3vW1CdwNQdyTdM';
    memeStructs[0x1905C992cC392484D87c99156Da3F27e50F26A4b].votes = 0;
    memeStructs[0x1905C992cC392484D87c99156Da3F27e50F26A4b].isMeme = true;
    memesList.push(0x1905C992cC392484D87c99156Da3F27e50F26A4b) -1;
    memeStructs[0x1318860E9DdBaed4A3ffa3D38a689737F1a1B9Af].ipfsHash = 'QmYHaaWHgpT2iBGNxMCCFpDKgskej6bhubd5cnytUuJKRp';
    memeStructs[0x1318860E9DdBaed4A3ffa3D38a689737F1a1B9Af].votes = 10;
    memeStructs[0x1318860E9DdBaed4A3ffa3D38a689737F1a1B9Af].isMeme = true;
    memesList.push(0x1318860E9DdBaed4A3ffa3D38a689737F1a1B9Af) -1;
  }

  function isMeme(address _memeAddress) public view returns(bool isIndeed) {
      return memeStructs[_memeAddress].isMeme;
  }

  function getMemesCount() public view returns(uint memesCount) {
    return memesList.length;
  }

  function getMemesList() public view returns(address[] memory memes) {
    return memesList;
  }

  function newMeme(string memory _ipfsHash) public returns(uint rowNumber) {
    address creator = msg.sender;
    if(isMeme(creator)) revert();
    memeStructs[creator].ipfsHash = _ipfsHash;
    memeStructs[creator].votes = 0;
    memeStructs[creator].isMeme = true;
    memesList.push(creator) - 1;
  }

  function getMemeByIndex(uint _index) public view returns(string memory ipfsHash) {
    if(!isMeme(memesList[_index])) revert();
    return memeStructs[memesList[_index]].ipfsHash;
  }

  function updateMeme(address _memeAddress, string memory _ipfsHash) public returns(bool success) {
    if(!isMeme(_memeAddress)) revert();
    memeStructs[_memeAddress].ipfsHash = _ipfsHash;
    return true;
  }

  function getMemeByAddress(address _memeAddress) public view returns(string memory ipfsHash) {
    if(!isMeme(_memeAddress)) revert();
    return memeStructs[_memeAddress].ipfsHash;
  }

  function addVote(address _memeAddress) public returns(bool success) {
    if(!isMeme(_memeAddress)) revert();
    memeStructs[_memeAddress].votes++;
    return true;
  }

  function getVotes(address _memeAddress) public view returns(uint votes) {
    if(!isMeme(_memeAddress)) revert();
    return memeStructs[_memeAddress].votes;
  }
}
