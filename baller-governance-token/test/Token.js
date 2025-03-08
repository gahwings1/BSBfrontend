const {ethers} = require('hardhat');
const {expect} = require('chai');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
    let token, accounts, deployer, receiver

    beforeEach(async () => {
        const Token = await ethers.getContractFactory('Token')
        token = await Token.deploy('Baller Governance Token', 'BGT', '1000000')
        accounts = await ethers.getSigners()
        deployer = accounts[0]
        receiver = accounts[1]
    })

    describe('Deployment', () => {
        const name = 'Baller Governance Token'
        const symbol = 'BGT'
        const decimals = 18
        const totalSupply = tokens('1000000')

        it('Has Correct Name', async () => {
            expect(await token.name()).to.equal(name)
        })
    
        it('Has Correct Symbol', async () => {
            expect(await token.symbol()).to.equal(symbol)
        })
    
        it('Has Correct Decimals', async () => {
            expect(await token.decimals()).to.equal(decimals)
        })
    
        it('Has Correct Total Supply', async () => {
            expect(await token.totalSupply()).to.equal(totalSupply)
        })

        it('Assigns Total Supply to the Deployer', async () => {
            expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
        })
    })

    describe('Sending Tokens', () => {
        let amount, transaction, result

        describe('Success', () => {
            beforeEach(async () => {
                amount = tokens(100)
                transaction = await token.connect(deployer).transfer(receiver.address, amount)
                result = await transaction.wait()
            })
    
            it('Transfer Token Balances', async () => {
                expect(await token.balanceOf(deployer.address)).to.equal(tokens(999900))
                expect(await token.balanceOf(receiver.address)).to.equal(amount)
            })
    
            it('Emits a Transfer Event', async () => {
                const event = result.events[0]
                expect(event.event).to.equal('Transfer')
    
                const args = event.args
                expect(args.from).to.equal(deployer.address)
                expect(args.to).to.equal(receiver.address)
                expect(args.value).to.equal(amount)
            })    
        })

        describe('Failure', () => {
            it('Rejects Insufficient Balances/Funds', async () => {
                const invalidAmount = tokens(100000000)
                await expect(token.connect(deployer).transfer(receiver.address, invalidAmount)).to.be.reverted
            })

            it('Rejects Invalid Recipient', async () => {
                const amount = tokens(100)
                await expect(token.connect(deployer).transfer(ethers.constants.AddressZero, amount)).to.be.reverted
            })
        })
    })
})
