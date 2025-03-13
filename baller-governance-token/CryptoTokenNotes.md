# CREATING A PROJECT
1. Execute: `npx create-react-app addNameOfProject --use-npm`
2. Execute: `cd addNameOfProject`
3. Replace existing contents in **package.json** with this **package.json**: https://gist.github.com/GlitchicaL/a2df0b1e5c396941f8827797ff8ff845
4. Execute: `npm install`
5. Remove the generated **README.md** file (Will conflict with Hardhat): `rm README.md`
6. Execute: `npx hardhat`
    
    Make sure to create a JavaScript project
    If it asks you to add the .gitignore, type: **"y"** and hit **"Enter"**    
    If it asks you to install the project dependencies, type: **"y"** and hit **"Enter"**

# RESOURCES
Dependencies:
https://gist.github.com/GlitchicaL/a2df0b1e5c396941f8827797ff8ff845

• ERC-20 Standard: https://ethereum.org/en/developers/docs/standards/tokens/erc-20
• Dai Token: https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#code
• Hardhat config: https://hardhat.org/config
• Hardhat scripts: https://hardhat.org/guides/scripts.html
• Ethers Contract Factory: https://docs.ethers.io/v5/api/contract/contract-factory
• Promises: https://javascript.info/promise-basics
• Eth Converter: https://eth-converter.com

# TESTING CONTRACTS
• Hardhat Testing Docs: https://hardhat.org/tutorial/testing-contracts.html
• Waffle Docs: https://ethereum-waffle.readthedocs.io/en/latest/
• Waffle Chai: https://ethereum-waffle.readthedocs.io/en/latest/matchers.html
• Chai Docs: https://www.chaijs.com/
• ERC-20 Standard: https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
• Eth-Converter: https://eth-converter.com/

# TOKEN BALANCES
• EIP-20 Standard: https://eips.ethereum.org/EIPS/eip-20
• Key Value Database: https://en.wikipedia.org/wiki/Key–value_database
• Hardhat Testing: https://hardhat.org/guides/waffle-testing.html

# TOKEN TRANSFERS
• Solidity Events: https://docs.soliditylang.org/en/v0.8.13/contracts.html#events

# TOKEN APPROVALS
• EIP-20 Standard: https://eips.ethereum.org/EIPS/eip-20

# PROJECT DEPLOYMENT
• Alchemy: https://www.alchemy.com/
• Faucet: https://sepoliafaucet.com/
• Block Explorer: https://sepolia.etherscan.io/
• String Templates: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

# CONTRACT VERIFICATION
• Sepolia Block Explorer: https://sepolia.etherscan.io/
• DAI Contract Example: https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f#code
• Hardhat Verify Plugin: https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify
• Mainnet Block Explorer: https://etherscan.io/login

# USING GIT/GITHUB
• GitHub: https://github.com/


### HOMEWORK ###
# 1. Make notes on new concepts
If you need a place to store your notes for later review, you can use [Google Docs](https://docs.google.com/) or [Notion](https://www.notion.so/).

# 2. Update your time sheet
Make sure that you’re logging the time you’re spending to track your progress through the program.

You can grab the time sheet template (https://docs.google.com/spreadsheets/d/1FiK4eCUO4259OIlgOEGbVQ8AxFpNfwpumeIQVbZSYjU/edit?usp=sharing) and make a copy for yourself.

# 3. Push Your Project to Github
Make sure that you are committing your code and pushing to Github on a regular basis. This will help show activity on your Github profile and show all the projects you’ve created.

# 4. Create your own token and send it to some friends or family
Create a new token with a unique name and symbol. Push it live to the test network and verify it. Add it to your MetaMask wallet. Send it to some friends and family and explain how it works. This will help reinforce the concepts that you’ve learned.

*** Note: Make sure you only do this on a test network, and not the Mainnet to avoid any legal conflicts.**


### DEPLOY INSTRUCTIONS
# 1. Modify the 1_deploy.js in the Scripts folder to include the NAME, SYMBOL, and TOTAL SUPPLY
# 2. Modify the .env 
# a. Create two variables, PRIVATE_KEYS and ALCHEMY_API_KEY
# b. Copy PRIVATE KEY from MetaMask wallet, paste into .env
# c. go to Alchemy.com, create a new App, copy and paste the API Key into the .env, save and close the .env
# d. npx hardhat run scripts/1_deploy.js --network sepolia RETURNS: Token deployed to: 0x4fdCDd3092ad20E4f78881206DEC5Da3613983e9
# e. Go to sepolia.etherscan.io and search for the contract: 0x4fdCDd3092ad20E4f78881206DEC5Da3613983e9
# f. Add the token to MetaMask by copying the contract address into MetaMask
# g. Send tokens to friends