const { ethers } = require("ethers");

const INFURA_ID = '45214a00d4ea4a08b9ddd331f0fd39d6'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1='0xa0Ad113001635d6129F537567FFb3adf02f01cBD';//sender

const privateKey1='355c86bdd8755911824162acffae227dd2a0f8cecc24e3f7cfffecb33c8af53e';

const account2='0xEDA2719E4B00f3A1f575A8cfF606cF14deC82bBF';//recipient

const wallet=new ethers.Wallet(privateKey1,provider);

const ERC20_ABI=[
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to,uint amount)  returns (bool)"
];

const address='0xa36085F69e2889c224210F603D836748e7dC0088';
const contract=new ethers.Contract(address,ERC20_ABI,provider);

const main = async () => {

    const balance=await contract.balanceOf(account1);
    
    console.log(`\nReading from ${address}\n`);
    console.log(`Balance of Sender: ${ethers.utils.formatEther(balance)}\n`);

     const contractWithWallet=contract.connect(wallet);

     const tx=await contractWithWallet.transfer(account2,balance);

     await tx.wait();

     console.log(tx);

     const balanceOfSender=await contract.balanceOf(account1);
     const balanceOfReciver=await contract.balanceOf(account2);
    
     console.log(`Balance of Sender: ${ethers.utils.formatEther(balanceOfSender)}\n`);
     console.log(`Balance of Reciever: ${ethers.utils.formatEther(balanceOfReciver)}\n`);
}

main()