const {
  Connection,
  PublicKey,
  clusterApiUrl,
  Keypair,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  Transaction,
  SystemProgram,
} = require("@solana/web3.js");
window.Buffer = window.Buffer || require("buffer").Buffer;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
btn1.addEventListener("click", generateKeypair);
btn2.addEventListener("click", connectPhantom);
btn3.addEventListener("click", sendIt);
let connection;
let privateKey;
let publicKey;
let reciver;
let from;

//This process to generate a keypair
function generateKeypair() {
  const demoSecret = new Uint8Array([134, 111, 46, 146, 158, 210, 192, 56, 46, 202, 54,
    27, 56, 63, 79, 166, 20, 143, 69, 250, 248, 146,
    208, 43, 166, 105, 96, 97, 19, 127, 112, 31, 34,
    214, 227, 32, 225, 147, 138, 68, 76, 228, 164, 254,
    158, 190, 78, 4, 223, 44, 225, 225, 1, 114, 252,
    143, 77, 145, 24, 238, 221, 123, 104, 252]);
  from = Keypair.fromSecretKey(demoSecret);
  publicKey = new PublicKey(from.publicKey);
  connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  console.log("Public Key of the generated keypair:", publicKey);
  console.log("Connection object is:", connection);

  airDropSol();
}

async function airDropSol() {
  try {
    console.log("Airdropping some SOL to your wallet!");
    const fromAirdropSignature = await connection.requestAirdrop(
      publicKey,
      2 * LAMPORTS_PER_SOL
    );
    alert("Airdrop Successfull");
    await connection.confirmTransaction(fromAirdropSignature);
  } catch (err) {
    console.log(err);
  }
}

async function connectWallet() {
  const { solana } = window;

  if (solana) {
    const response = await solana.connect();
    console.log("Connected with Public Key:", response.publicKey.toString());
    reciver = response.publicKey;
  } else {
    document.getElementById("myDiv").style.display = "inline";
  }
}

async function sendSol() {
  try {
    console.log(
      "Sending SOL from the generated keypair to the receiver address..."
    );

    // Fetch recent blockhash
    const { blockhash } = await connection.getRecentBlockhash();

    // Create a new transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: reciver, // Receiver address obtained from Phantom wallet
        lamports: 2 * LAMPORTS_PER_SOL, // Amount to send, in lamports (2 SOL)
      })
    );
    // Send and confirm the transaction
    const signature = await sendAndConfirmTransaction(connection, transaction, [from]);
    console.log("Transaction Signature:", signature);
  } catch (error) {
    console.error("Error sending SOL:", error);
  }
}

function connectPhantom() {
  connectWallet();
}
function sendIt() {
  sendSol();
}
