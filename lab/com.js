require('dotenv').config();
const { ethers } = require('ethers');

// Make example to have MNEMONIC_PHRASE defined in your .env file
const mnemonicPhrase = process.env.MNEMONIC_PHRASE;

let walletSigner;

try {
  walletSigner = ethers.Wallet.fromMnemonic(mnemonicPhrase);
  // Additional logic to use walletSigner here
} catch (error) {
  console.error('Error creating wallet signer:', error);
}
