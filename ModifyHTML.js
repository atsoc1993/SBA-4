function createAndAddTxnList(txHashes) {
    let latestBlockTransactionsDiv = document.getElementById('blockTxsDiv');
    let newTxHashList = document.createElement('ul');
    newTxHashList.id = 'txHashList';
    for (let txHash of txHashes) {
        let newTxHashListItem = document.createElement('li');
        newTxHashListItem.textContent = txHash;
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

