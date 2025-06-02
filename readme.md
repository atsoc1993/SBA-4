# Latest BTC Block Hash & Transaction Fetcher

This SBA contains an html & js based website that contains three buttons, two of which make use of blockchain.com's API via: https://www.blockchain.com/explorer/api/blockchain_api. The codebase is also modularized through `main.js`, `SetInitialHTML.js`, `getters.js`, `ModifyHTML.js`, and `setTimeoutUtil.js`:
- Get latest block hash
- Get latest block transactions
- Set Timeout (as per outline for SBA)

*Note: The page has minimal styling aside from flexbox on the main div, white text, a black background, as well as a box-radius and background color/box shadow of red on the buttons.*

## Get Latest Block Hash Button
- This button gets the latest block hash via the **/q/latesthash** endpoint

## Get Latest Block Transactions Button
- This button gets the all transaction ID's within the latest block. The transaction ID's are added to an unordered list with bullet-point styling removed from list items

## Set Timeout Button
- As per the outline, I made sure to use set timeout at least once through this button. It adjusts the `p` tag element thrice: once to state it is in a waiting state for 3 seconds, once to state that the waiting state has ended, and then resets the text after 1.5 seconds back to the initial text— which is "Click the Button Above for a 3 Second Timeout"