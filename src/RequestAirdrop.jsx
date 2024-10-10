import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop(){



const wallet = useWallet();
const {connection} = useConnection();

    function handleRequest(){
        const amount = document.getElementById("amount").value
        console.log(amount , amount*LAMPORTS_PER_SOL)
        const publicKey =  wallet.publicKey
        connection.requestAirdrop(publicKey, amount*LAMPORTS_PER_SOL)

    }

    return(
        <div>
            <input id = "amount" type="text" placeholder="Amount.." />
            <button onClick={handleRequest}>Request Airdrop</button>
            {wallet.publicKey?.toBase58()}
         
        </div>
    )

}