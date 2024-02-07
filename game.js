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