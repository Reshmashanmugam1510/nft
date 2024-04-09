var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var settings = {
    "async": true,
    "scrossDomain": true,
    "url":"https://pro-api.coingecko.com/api/v3/onchain/simple/networks/network/token_price/addresses ",
    "method":"GET",
    "headers":{}
}
.$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});