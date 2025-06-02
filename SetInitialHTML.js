import { getLatestBlockHash, getLatestBlockHashTransactions } from "./getters.js";
import { createAndAddTxnList, addPleaseWaitPTag } from "./ModifyHTML.js";

function addBaseHTML() {
    let baseDiv = document.createElement('div');
    baseDiv.id = 'baseDiv';

    let latestBlockHashDiv = document.createElement('div');
    latestBlockHashDiv.id = 'blockHashDiv';
    let latestBlockHashPTag = document.createElement('p');
    latestBlockHashPTag.id = 'blockHashPTag';
    latestBlockHashPTag.textContent = 'BTC Latest Block Hash: ';
    let getLatestBlockHashButton = document.createElement('button');
    getLatestBlockHashButton.id = 'blockHashButton';
    getLatestBlockHashButton.textContent = 'Get Latest Block Hash';
    latestBlockHashDiv.appendChild(latestBlockHashPTag);
    latestBlockHashDiv.appendChild(getLatestBlockHashButton);
    baseDiv.appendChild(latestBlockHashDiv);

    let latestBlockTransactionsDiv = document.createElement('div');
    latestBlockTransactionsDiv.id = 'blockTxsDiv';
    let getLatestBlockHashTransactionsButton = document.createElement('button');
    getLatestBlockHashTransactionsButton.id = 'transactionsButton';
    getLatestBlockHashTransactionsButton.textContent = 'Get Latest Block Transactions';
    let latestTransactionsPTag = document.createElement('p');
    latestTransactionsPTag.id = 'blockHashPTag';
    latestTransactionsPTag.textContent = 'Latest Block Transactions:';
    latestBlockTransactionsDiv.appendChild(getLatestBlockHashTransactionsButton);
    latestBlockTransactionsDiv.appendChild(latestTransactionsPTag);

    baseDiv.appendChild(latestBlockTransactionsDiv);
    document.body.appendChild(baseDiv);
}

function addEventListenersToButtons() {
    let getLatestBlockHashButton = document.getElementById('blockHashButton');
    getLatestBlockHashButton.addEventListener('click', (e) => {
        console.log("Clicked get latest block hash button");
        let latestBlockHashPTag = document.getElementById('blockHashPTag');
        getLatestBlockHash()
            .then(res => latestBlockHashPTag.textContent = latestBlockHashPTag.textContent + res)
    });

    let getLatestBlockHashTransactionsButton = document.getElementById('transactionsButton');
    getLatestBlockHashTransactionsButton.addEventListener('click', (e) => {
        console.log("Clicked get latest block txs button");
        addPleaseWaitPTag()
        getLatestBlockHash()
            .then(res => getLatestBlockHashTransactions(res))
            .then(res => createAndAddTxnList(res));
    });
};

export { addBaseHTML, addEventListenersToButtons };