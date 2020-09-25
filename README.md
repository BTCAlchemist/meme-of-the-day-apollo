# Meme of the Day dApp

Discover your favorite memes with this dApp. View, upload, vote, comment, and buy memes in different categories.

<img src="/src/Meme-of-the-Day-dApp-Meme-Final.png" width=25% height=25% align="right">Meme of the Day is a fun social platform that uses blockchain technology and Interplanetary File System (IPFS). The dApp interface runs in a web browser, where the user uploads a meme image that is saved in IPFS, which creates a hash that is stored on the blockchain. This dApp can prove that a user is the true creator of a meme (or any file they upload to IPFS) as our initial proof of concept, which can run in a local Ethereum development environment with Ganache. Using the web3js calls in the documentation (https://web3js.readthedocs.io/en/v1.2.5/) should work with the and Ethereum network.

Our vision is to feature a list of top memes by category to create a fun community experience. We are planning how to build the related functionalities. We are hopeful that Meme of the Day and the future voting mechanism would encourage more user interest and engagement with Web3 technology.


**Dependencies are:**
- Node.js 10.1x.x
> download from https://nodejs.org and follow installation instructions
- Truffle
> npm install -g truffle@5.0.5 (important is to use this version)
- Web3.js
> Using the web3js calls in the documentation 
> (https://web3js.readthedocs.io/en/v1.2.5/) for use with rhw Ethereum network.
- IPFS 
> Public open IPFS through Infura is already coded into Meme dApp, find more about IPFS here
> https://infura.io/
- Blockchain
> Currently it is possible to use local Ethereum blockchain (Ganache) or Matic Mumbai tesnet to run the dApp.
- Crypto wallet
> Currently it is possible to use Metamask for testing the dApp.


## Installation procedure (local testnet)
```shell
git clone https://github.com/matprime/meme-of-the-day-dApp
cd meme-of-the-day-dApp
npm install
truffle migrate --reset
npm run start
```
Before starting the dApp with last command "npm run start", you need to make sure that local blockchain is running. After blockchain is running and you started the dApp, you should see web browser open up, and the dApp will load and show the latest meme uploaded in browser window.

*If you are testing on a local blockchain, make sure Ganache is running with port 8545 in server settings (this is specified in truffle-config.js).<br><br>*

*Note: For frontend test to display memes when dApp is started for the first time on your local computer, the wallet addresses in the MemesHandler.sol constructor must match the addresses in your Ganache test environment.*
<br><br>

## Installation procedure (Matic Mumbai testnet)
Please follow additional instructions how to setup your Metamask to use Matic Mumbai testnet:<br>
https://docs.matic.network/docs/develop/metamask/config-matic<br>
Here is Matic Mumbai testnet Faucet to get some test Matic coins:<br>
https://faucet.matic.network/<br>
Here are additional information how to deploy smart contract and dApp on Matic Mumbai testnet. You will need to create .secret file holding seed words from your wallet on Matic testnet Mumbai network:
https://docs.matic.network/docs/develop/truffle<br><br>

```shell
git clone https://github.com/matprime/meme-of-the-day-dApp
cd meme-of-the-day-dApp
npm install
truffle migrate --reset --network matic
npm run start
```
When you start dApp with last command "npm run start", dApp will load and show the latest meme uploaded in browser window.

*Note: For frontend test to display memes when dApp is started for the first time on your local computer, the wallet addresses in the MemesHandler.sol constructor must match the addresses in your Ganache test environment.*
<br><br>

**Command to migrate smart contract to blockchain**
```shell
truffle migrate
```
After successful migration of smart contract to blockchain, you can interact with it using Truffle console.
<br><br>

**Some commands you can use with Truffle console**
After smart contract deployment to blockchain with migration, you can use Truffle console to interact with smart contracts using CLI. To start Truffle console from command shell type:
```shell
truffle console
```
After Truffle console is running you can get contract from blockchain with command:
```javascript
truffle(development)> const memeshandler = await MemesHandler.deployed()
```
You can store hash of meme to blockchain using contracts set function:
```javascript
truffle(development)> result = memeshandler.newMeme('QmYHaaWHgpT2iBGNxMCCFpDKgskej6bhubd5cnytUuJKRp')
```
To get the account under which meme was stored on blockchain, you can type:
```javascript
truffle(development)> const memesList = memeshandler.getMemesList()
```
You need to type constant as command to get value stored in it:
```javascript
truffle(development)> memesList
[ '0x787eBC47F34081a0Df4dc3923798828ae52C538C' ]
```
Read the IPFS file hash from meme stored on blockchain:
```javascript
const meme = memeshandler.getMemeByAddress('0x787eBC47F34081a0Df4dc3923798828ae52C538C')
```
Output IPFS file hash into console:
```javascript
meme
'QmYHaaWHgpT2iBGNxMCCFpDKgskej6bhubd5cnytUuJKRp'
```
<br>

**To run tests defined in folder /test run from shell command**  
```javascript
truffle test
```
Tests will check if contract deployment on blockchain was done correctly, and it will check if get and set methods of smart contract are working correctly. After running the command, you will see output similar to:
```shell
Using network 'development'.

Compiling ./src/contracts/FilesHandler.sol...


  Contract: FilesHandler
    deployment
0xDA228234a792cb9C7C8cf9E9E0dB48A8F57C7D08
      ✓ deployed successfully!
    storage access
Saving and retrieveing from Blockhain
test123
      ✓ Hash saved and retrieved (282ms)


  2 passing (422ms)

```
