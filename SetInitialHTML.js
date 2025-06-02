import { getLatestBlockHash, getLatestBlockHashTransactions } from "./getters.js";
import { createAndAddTxnList, addPleaseWaitPTag } from "./ModifyHTML.js";
import { modifySetTimeoutPTag } from "./setTimeoutUtil.js";

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

    let setTimeoutDiv = document.createElement('div');
    setTimeoutDiv.id = 'setTimeoutDiv';
    let setTimeoutButton = document.createElement('button');
    setTimeoutButton.id = 'timeoutButton';
    setTimeoutButton.textContent = 'Set Timeout';
    let setTimeoutPTag = document.createElement('p');
    setTimeoutPTag.id = 'timeoutPTag';
    setTimeoutPTag.textContent = 'Click the button above for a 3 second timeout';
    setTimeoutDiv.appendChild(setTimeoutButton);
    setTimeoutDiv.appendChild(setTimeoutPTag);
    baseDiv.appendChild(setTimeoutDiv);

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
    getLatestBlockHashButton.addEventListener('click', async (e) => {
        console.log("Clicked get latest block hash button");
        let latestBlockHashPTag = document.getElementById('blockHashPTag');
        let res = await getLatestBlockHash()
        latestBlockHashPTag.textContent = 'BTC Latest Block Hash: ' + res
    });

    let setTimeoutButton = document.getElementById('timeoutButton');
    setTimeoutButton.addEventListener('click', async (e) => {
        console.log("Clicked the set timeout button");
        await modifySetTimeoutPTag()
    });

    let getLatestBlockHashTransactionsButton = document.getElementById('transactionsButton');
    getLatestBlockHashTransactionsButton.addEventListener('click', async (e) => {
        console.log("Clicked get latest block txs button");
        addPleaseWaitPTag()
        let latestBlockHash = await getLatestBlockHash()
        let latestTxs = await getLatestBlockHashTransactions(latestBlockHash)
        createAndAddTxnList(latestTxs);
    });
};



export { addBaseHTML, addEventListenersToButtons };