require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note ranch prosper gesture brave equal gift'; 
let testAccounts = [
"0xb9476741b47714e8a469067400a00a960b00ccc68dc2f6b11bce3b545fe8417e",
"0x6638fcc54380acb6cdc618135a00414166f133088bf3a137390887a205e3959c",
"0xe76ebd61ed32c7941923ea6b1d5166679464a0dab236a6d4eac9143cf6ab825c",
"0x5897ffbe8f2ae9c007876988329085ab932579efa5e59f2fd6035cc2ffc587f2",
"0x6af99b24aed8ba7a01397508d44d5b41d5fe2bc1131c1a80f815f1930ddd2c87",
"0xd01ae4765e68ef0fd7931e894b8a34de737790ba38542cb43ae82670b91e1c15",
"0x93003b171e0253b9f1a3283c594a1aabd32ed6e808d633d0f18d2a419c861c0b",
"0x418933a073d98443d828611a4585dfa2563079dc01b9940ef2b54c8d9fd65795",
"0xf5018425126a2f645913c25ebab249c06e95b0a5a9ae2c8847b02167be9d6a34",
"0x407208afb454d8b0963dd10b32b226b203425a7110a71ba80ba91f28d4e14ace"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


