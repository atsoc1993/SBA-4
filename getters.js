async function getLatestBlockHash() {
    let lastBlockHash;
    try {
        let response = await axios.get('https://blockchain.info/q/latesthash');
        lastBlockHash = response.data;
    } catch {
        lastBlockHash = 'Failed to get last block hash . . .';
    }

    return lastBlockHash;
}

async function getLatestBlockHashTransactions(lastBlockHash) {
    let txHashes;
    try {
        let response = await axios.get(`https://blockchain.info/rawblock/${lastBlockHash}?cors=true`);
        let transactions = response.data.tx;
        txHashes = transactions.map((tx) => {
            return tx.hash;
        });
    } catch {
        txHashes = ['Failed to get transactions . . .'];
    };
    return txHashes;
}

export { getLatestBlockHash, getLatestBlockHashTransactions };