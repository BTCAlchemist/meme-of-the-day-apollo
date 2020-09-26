This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Meme of the Day dApp -- Matic Blockchain

Upload your meme, vote and comment on other memes, discover top memes with this dApp.

<img src="/src/content/Meme-of-the-Day-dApp-Meme-Final.png" width=25% height=25% align="right">Meme of the Day is a fun social platform that was created for use with Matic blockchain and Interplanetary File System (IPFS). The dApp interface runs in a web browser, where the user uploads a meme image that is saved in IPFS, which creates a hash that is stored on the Matic blockchain. This is our initial proof of concept functionality. It is possible to get the dApp up and running in a local development environment with local Ethereum blockchain (Ganache).

Beyond this, our vision is for people to vote and possibly comment on the memes they like, which would be featured in a list that is updated in real-time. After a user pays for their first vote, they would receive three free votes, paid directly from the transaction fee of the first vote (equal to the required gas for four total vote operations). The smart contract would save that gas in a dedicated Opera account that it would access to implement the three free votes.

We are hopeful that Meme of the Day and the future voting mechanism would encourage more user interest and engagement with our dApp. This dApp can prove that a user is the true creator of a meme (or any file they uplod to IPFS).

**Dependencies are:**
- Node.js 10.1x.x - 12.18.2
> download from https://nodejs.org and follow installation instructions
- Truffle
- Web3.js
- IPFS 
> Public open IPFS through Infura is already coded into Meme dApp, find more about IPFS here
> https://infura.io/
> Currently it is possible to use local Ethereum blockchain (Ganache) to run the dApp.
> Currently it is possible to use Metamask for testing the dApp.


## Installation procedure
```shell
git clone https://github.com/matprime/meme-of-the-day-dApp
cd meme-of-the-day-dApp
npm install
npm run deployDev (Spins up ganache-cli and deploys contract(s) on the chain)
npm run start (In another terminal)
```
You should see web browser open up, and the dApp will load and show the latest meme uploaded in browser window.

## Installation procedure (Matic Mumbai testnet)
Please follow additional instructions how to setup your Metamask to use Matic Mumbai testnet:<br>
https://docs.matic.network/docs/develop/metamask/config-matic<br>
Here is Matic Mumbai testnet Faucet to get some test Matic coins:<br>
https://faucet.matic.network/<br>
Here are additional information how to deploy smart contract and dApp on Matic Mumbai testnet. You will need to create .secret file holding seed words from your wallet on Matic testnet Mumbai network:
https://docs.matic.network/docs/develop/truffle<br>

```shell
git clone https://github.com/matprime/meme-of-the-day-dApp
cd meme-of-the-day-dApp
npm install
.\node_modules\.bin\truffle migrate --reset --network matic
npm run start
```
The truffle migrate command would require the secret file to be updated with the mnemonic which is the secret to account used to deploy contract on matic chain.
When you start dApp with last command "npm run start", dApp will load and show the latest meme uploaded in browser window.
<br><br>

**Command to migrate smart contract to blockchain**
```shell
npm run migrate
```
After successful migration of smart contract to blockchain, you can interact with it using Truffle console. Use truffle from the node_modules bin directory (.\node_modules\.bin\truffle)
<br><br>

**Some commands you can use with Truffle console**
After smart contract deployment to blockchain with migration, you can use Truffle console to interact with smart contracts using CLI. To start Truffle console from command shell type:
```shell
.\node_modules\.bin\truffle console
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
.\node_modules\.bin\truffle test
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

