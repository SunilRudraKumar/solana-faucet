import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import {
  LAMPORTS_PER_SOL,
  Transaction,
  SystemProgram,
  PublicKey,
} from "@solana/web3.js";

export function SendToken() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function handleSend() {
    const to = document.getElementById("to").value; // get the value of the input field
    const amount = document.getElementById("amount").value;

    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );
    await wallet.sendTransaction(transaction, connection);
    alert("sent" + amount + "SOL to" + to);
  }

  return (
    <div>
      <input id="to" type="text" placeholder="Enter Address" />
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={handleSend}>send</button>
    </div>
  );
}
