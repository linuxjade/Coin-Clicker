let coin = 0;

function btnCoin() {
    coin++;
    document.getElementById("addCoins").innerHTML = coin;
}
let miner = 0;
let minerUpgrade = 10;

function btnMiner() {
    if (coin >= minerUpgrade) {
        miner++;
        coin = coin - minerUpgrade;

        minerUpgrade = Math.round(minerUpgrade * 1.1);

        document.getElementById("addCoins").innerHTML = coin;
        document.getElementById("addMiner").innerHTML = miner;
        document.getElementById("minerCost").innerHTML = minerUpgrade;
    }
}
let digger = 0;
let diggerUpgrade = 20;

function btnDigger() {
    if (coin >= diggerUpgrade) {
        digger++;
        coin = coin - diggerUpgrade;

        diggerUpgrade = Math.round(diggerUpgrade * 1.2);

        document.getElementById("addCoins").innerHTML = coin;
        document.getElementById("addDigger").innerHTML = digger;
        document.getElementById("diggerCost").innerHTML = diggerUpgrade;
    }
}

setInterval(function () {
    coin = coin + miner * 1 + digger * 2;
    document.getElementById("addCoins").innerHTML = coin;
}, 300);
