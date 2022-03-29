const { ethers } = require("ethers");

const INFURA_ID = '45214a00d4ea4a08b9ddd331f0fd39d6'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI=[
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)"
]

//DAI_contract_add=0x6B175474E89094C44Da98b954EedeAC495271d0F

//abi=abstract binary interface
const address='0x6B175474E89094C44Da98b954EedeAC495271d0F'

const contract=new ethers.Contract(address,ERC20_ABI,provider);

const main = async () => {
    
    const name=await contract.name();
    const symbol=await contract.symbol();
    const totalSupply=await contract.totalSupply();
    const balance=await contract.balanceOf('0x6B175474E89094C44Da98b954EedeAC495271d0F');

    console.log(`Reading from ${address}`);
    console.log(`name->${name}`);
    console.log(`Symbol:${symbol}`);
    console.log(`Total Supply: ${totalSupply}`);
    
    console.log(`Balance Returned: ${ethers.utils.formatEther(balance)}`)
}

main()