import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getMyBalance() {
        // Ensure the wallet is connected and has a valid publicKey
        if (wallet.publicKey) {
            try {
                // Fetch the balance
                const balance = await connection.getBalance(wallet.publicKey);
                
                // Display the balance in SOL
                document.getElementById("balance").innerHTML = (balance / LAMPORTS_PER_SOL).toFixed(2);
                console.log(balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        } else {
            console.error("Wallet not connected.");
            document.getElementById("balance").innerHTML = "Wallet not connected";
        }
    }

    return (
        <div>
            Balance: <span id="balance"> </span> SOL
            <button onClick={getMyBalance}>Show Balance</button>
        </div>
    );
}
