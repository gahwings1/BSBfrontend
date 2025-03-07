const {ethers} = require('hardhat');
const {expect} = require('chai');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
    let token
    beforeEach(async () => {
        const Token = await ethers.getContractFactory('Token')
        token = await Token.deploy('Baller Governance Token', 'BGT', '1000000')
    })

    describe('Deployment', () => {
        const name = 'Baller Governance Token'
        const symbol = 'BGT'
        const decimals = '18'
        const totalSupply = tokens('1000000')

        it('Has correct name', async () => {
            expect(await token.name()).to.equal(name)
        })
    
        it('Has correct symbol', async () => {
            expect(await token.symbol()).to.equal(symbol)
        })
    
        it('Has correct decimals', async () => {
            expect(await token.decimals()).to.equal(decimals)
        })
    
        it('Has correct total supply', async () => {
            expect(await token.totalSupply()).to.equal(totalSupply)
        })    
    })
})
