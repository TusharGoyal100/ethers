const {ethers} =require('ethers');

const INFURA_ID='45214a00d4ea4a08b9ddd331f0fd39d6';
const provider=new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const address2='0x6Be1eeC3290AcD0E9e442a5a9FD2346Ddf77ebb9';
const address='0x6B175474E89094C44Da98b954EedeAC495271d0F';

const main=async()=>{
 const balance=await provider.getBalance(address);
 console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`);
}

main();




