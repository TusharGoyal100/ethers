const {ethers}=require('ethers');

const INFURA_ID = '45214a00d4ea4a08b9ddd331f0fd39d6'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`);

const account1='0xa0Ad113001635d6129F537567FFb3adf02f01cBD';//sender

const privateKey1='355c86bdd8755911824162acffae227dd2a0f8cecc24e3f7cfffecb33c8af53e';

const account2='0xEDA2719E4B00f3A1f575A8cfF606cF14deC82bBF';//recipient

const wallet=new ethers.Wallet(privateKey1,provider);

const main=async()=>{
      //Show account 1 balance before transfer
      //Show account 2 balance before transfer

      const balance1=await provider.getBalance(account1);
       console.log(`\nETH Balance of ${account1} --> ${ethers.utils.formatEther(balance1)} ETH\n`);

       const balance2=await provider.getBalance(account2);
       console.log(`\nETH Balance of ${account2} --> ${ethers.utils.formatEther(balance2)} ETH\n`);

      //Send Ether
       const tx=await wallet.sendTransaction(
           {
               to:account2,
               value:ethers.utils.parseEther("0.0001")
            })

      // wait for transaction to be mined
      await tx.wait();



      console.log(tx);

      const balance3=await provider.getBalance(account1);
       console.log(`\nETH Balance of ${account1} --> ${ethers.utils.formatEther(balance3)} ETH\n`);

       const balance4=await provider.getBalance(account2);
       console.log(`\nETH Balance of ${account2} --> ${ethers.utils.formatEther(balance4)} ETH\n`);

}

main()