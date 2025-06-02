function createAndAddTxnList(txHashes) {
    let latestBlockTransactionsDiv = document.getElementById('blockTxsDiv');
    let newTxHashList = document.createElement('ul');
    newTxHashList.id = 'txHashList';
    for (let txHash of txHashes) {
        let newTxHashListItem = document.createElement('li');
        let txLinkAnchor = document.createElement('a')
        txLinkAnchor.textContent = txHash;
        txLinkAnchor.href = 'https://www.blockchain.com/explorer/transactions/btc/' + txHash;
        txLinkAnchor.target = '_blank'
        newTxHashListItem.appendChild(txLinkAnchor);
        newTxHashList.appendChild(newTxHashListItem);
    };
    if (document.getElementById('txHashList')) {
        latestBlockTransactionsDiv.replaceChild(newTxHashList, latestBlockTransactionsDiv.lastChild);
    } else {
        latestBlockTransactionsDiv.replaceChild(newTxHashList, latestBlockTransactionsDiv.lastChild);
    };
};

function addPleaseWaitPTag() {
    let latestBlockTransactionsDiv = document.getElementById('blockTxsDiv');
    let pleaseWaitPTag = document.createElement('p');
    pleaseWaitPTag.textContent = 'Fetching transactions . . . ';
    latestBlockTransactionsDiv.replaceChild(pleaseWaitPTag, latestBlockTransactionsDiv.lastChild);
};

export { createAndAddTxnList, addPleaseWaitPTag };

