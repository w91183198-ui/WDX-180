/* SETUP */
const $address = document.querySelector(".address span");
const $balance = document.querySelector(".balance span");
const $btcPrice = document.querySelector(".btcprice span");
const $usd = document.querySelector(".usd span");
const $button = document.getElementById("getBalance");
let balance = 0;
// console.log( $address.textContent );

/* USING PROMISES */
$button.addEventListener("click", function (event) {
  console.log("running sync version");
  fetch(
    `https://blockchain.info/balance?active=${$address.textContent}&cors=true `
  )
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      // 1 BTC === 100000000 Satoshi
      balance = data[$address.textContent].final_balance / 100000000;
      $balance.textContent = balance.toFixed(2);
      return fetch("https://blockchain.info/ticker");
    })
    .then((result) => result.json())
    .then((result) => {
      // 1) Get the USD value for BTC (last) and display the conversion inside the "BTC/USD" section
      // 2) along with the total amount of USD dollars in the "USD" section of the UI
      // 3) Make sure to handle any errors

      try {
        console.log(result);
        console.log(result.USD.last);
        let balanceUsd = result.USD.last * parseFloat($balance.textContent);

        $btcPrice.textContent = result.USD.last;
        $usd.textContent = balanceUsd;
      } catch (err) {
        console.log(err);
      }
    });
});

/* 4) USING ASYNC/AWAIT: Refactor the callback function above into an async/await syntax: */
$button.addEventListener("click", async function (event) {
  try {
    console.log("running *async version");
    let result = await fetch(
      `https://blockchain.info/balance?active=${$address.textContent}&cors=true `
    );
    let data = await result.json();

    console.log(data);
    // 1 BTC === 100000000 Satoshi
    balance = data[$address.textContent].final_balance / 100000000;
    $balance.textContent = balance.toFixed(2);
    result = await fetch("https://blockchain.info/ticker");
    result = await result.json();

    console.log(result);
    console.log(result.USD.last);
    let balanceUsd = result.USD.last * parseFloat($balance.textContent);

    $btcPrice.textContent = result.USD.last;
    $usd.textContent = balanceUsd;
  } catch (err) {
    console.log(err);
  }
});
