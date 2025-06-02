# Latest BTC Block Hash & Transaction Fetcher

This SBA contains an html & js based website that contains three buttons with asynchronous functionality using **axios**, two of which make use of blockchain.com's API via: https://www.blockchain.com/explorer/api/blockchain_api — the third uses the `setTimeout()` method. The codebase is also modularized through `main.js`, `set-initial-html.js`, `getters.js`, `modify-html.js`, and `set-timeout-util.js`:

*Note: The page has minimal styling aside from flexbox on the main div, white text, a black background, as well as a box-radius and background color/box shadow of red on the buttons.*

## The Three Buttons
- Get latest block hash
- Get latest block transactions
- Set Timeout (as per outline for SBA)

### Get Latest Block Hash Button
- This button gets the latest block hash via the **/q/latesthash** endpoint

### Get Latest Block Transactions Button
- This button crawls through the response via the **rawblock/{lastBlockHash}** endpoint (block hash obtained from aforementioned endpoint) with an additional parameter of **?cors=true** to prevent CORS errors; gets the all transaction ID's within the latest block; collects all transaction ID's in an array; iteratively builds an unordered list, where list items are created for each transaction ID collected. Each list item contains an anchor tag, which hold each transaction ID in their textContent property and have their href set to a link containing the transaction ID's respective information available on blockchain.com's explorer.

Example Link: https://www.blockchain.com/de/explorer/transactions/btc/46f4013cefeab285fbd6bff2443070c1dfd2384284bfaa4edf531c30470be535

*Note: Bullet-point styling was removed from these list items*

### Set Timeout Button
- As per the outline, I made sure to use set timeout at least once through this button. It adjusts the `p` tag element thrice: once to state it is in a waiting state for 3 seconds, once to state that the waiting state has ended, and then resets the text after 1.5 seconds back to the initial text— which is "Click the Button Above for a 3 Second Timeout".