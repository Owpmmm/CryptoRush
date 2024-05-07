var baseUrl = "https://api.coinranking.com/v2/coins"
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apiKey = "coinranking1227bcf8e41cf51379d2eda8e24c4a7dfae7fc6b70ac512a"



fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    headers: {
        'Content-type': 'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if(response.ok) {
        response.json().then((json) => {
            console.log("Obtained Coins",json.data.coins)
            

            const coinList = json.data.coins; // Global coinlist

            let coinsData = json.data.coins
            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }

            coinsData.forEach((coin) => {
                cryptoCoins += "<tr>"
                cryptoCoins += `<td> ${coin.uuid} </td>`;
                cryptoCoins += `<td> ${coin.btcPrice} </td>`;
                cryptoCoins += `<td> ${coin.rank} </td>`;
                cryptoCoins += `<td> ${coin.name} </td>`;
                cryptoCoins += `<td>$ ${parseFloat(coin.price).toFixed(2)} dollars</td>`;
                cryptoCoins += `<td> ${coin.symbol} </td>`; "<tr>";
            })
            document.getElementById("data").innerHTML = cryptoCoins
        })
    }
}).catch((error) => {
    console.log(error)
})

