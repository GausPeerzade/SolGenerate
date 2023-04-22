# Code README
This code provides a basic implementation of interacting with the Solana blockchain using the @solana/web3.js library and integrating with the Phantom wallet for keypair generation, wallet connection, and sending SOL transactions.

Prerequisites
Before running this code, you need to have the following prerequisites:

Node.js and npm installed on your machine.
Phantom wallet extension installed in your browser.
# Setup
To set up and run the code, follow these steps:

Clone the repository to your local machine.
Install the dependencies by running npm install in the project directory.
Open index.html in a web browser or serve it using a web server of your choice.
Click on the buttons labeled "Generate Keypair", "Connect Phantom", and "Send It" to interact with the Solana blockchain.
Functionality
This code provides the following functionality:

# Generate Keypair
Clicking on the "Generate Keypair" button generates a keypair using a hardcoded secret key and displays the public key in the console. It also establishes a connection to the Solana blockchain's devnet using the Connection class from the @solana/web3.js library.

# Airdrop SOL
After generating the keypair, clicking on the "Generate Keypair" button triggers an airdrop of 2 SOL to the generated wallet's public key using the requestAirdrop method from the Connection class. If the airdrop is successful, an alert is shown.

# Connect Phantom Wallet
Clicking on the "Connect Phantom" button attempts to connect to the Phantom wallet using the solana.connect() method. If the connection is successful, the public key of the connected wallet is displayed in the console.

# Send SOL
After connecting to the Phantom wallet, clicking on the "Send It" button sends a SOL transaction from the generated keypair to the receiver's address obtained from the connected Phantom wallet. The transaction is constructed using the Transaction class from the @solana/web3.js library and is confirmed using the sendAndConfirmTransaction method. The amount sent is 2 SOL (in lamports) and the transaction signature is displayed in the console.

# Disclaimer
This code is for educational purposes only and should not be used in a production environment without proper security measures. Use it at your own risk.

# Credits
This code is based on the @solana/web3.js library and the Phantom wallet extension. Credits to the respective developers for their contributions.

# License
This code is licensed under the MIT License.
