require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stool response oval comic hover kiwi equal gather'; 
let testAccounts = [
"0x885b9c9add636b5f92dd97234c2116543015164289354e9431c9ef6be8e70e1d",
"0x57212c5035c2920730ec729ec87173f141b09128edb4b8a7eda15f2019c5052f",
"0x3ae8a0b9e047aac0d369cb2bbd1d360a1023ce29703f69d1d97dc29d016aa340",
"0xa927d076f2ce4f57ef4d727ba7f63058c35852af50898e93338dc8d8c50d7d57",
"0x0cc18dfb633f8f2550ab1062a74ae2d48a34cb9777d0cd612b5718468381e2e6",
"0x15fb67319f374a4321b33308708bc08b57b7e90f43598776f6c7ffe90deb6ba5",
"0xfdd1a4149705c00a9bd001b7139d464e55e1ad08f2700a5c12be820778ce3a8d",
"0x20a235937ed091bd2e7d5a1c611074c6557c47dc983124b2cbde268cd785d448",
"0x96cb01e2605d62817e91d84a1ad69981088d736da52e6669f0149d077a88e113",
"0xc7d159a7fd18251b4d718b390ebc92003f88996d5b0d02914effb9f02273a0c5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

