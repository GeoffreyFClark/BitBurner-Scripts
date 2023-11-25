// Stock portfolio data stored/updated in separate file so that data persists between logins
/** @param {NS} ns */
export async function main(ns) {
    const stocks = ns.stock.getSymbols();
    var stocktable = {}; // Initialize the stocktable object

    // Load stocktable from the saved JSON data if available
    var savedData = ns.read("/stonks/myStockPositions.txt");
    if (savedData) {
        stocktable = JSON.parse(savedData);
    }

    while (true) {
        for (let s of stocks) {
            let s_forecast = ns.stock.getForecast(s);
            let max = ns.stock.getMaxShares(s);
            let maxPosCost = ns.stock.getPurchaseCost(s, max, "Long");
            let availableMoney = ns.getPlayer()["money"];

            /** increase if(s_forecast > x ...) to > 0.6 or something more selective if not enough capital 
            to buy max shares of all positively forcast tickers on the stock market */
            if (s_forecast > 0.505 && !stocktable[s] && (availableMoney > maxPosCost)) { 
                ns.stock.buyStock(s, max);
                stocktable[s] = true;
                ns.tprint(`Bought ${max} shares of ${s} with forecast of ${s_forecast}.`);
            } else if (s_forecast < 0.495 && stocktable[s]) {
                ns.stock.sellStock(s, max);
                stocktable[s] = false;
                ns.tprint(`Sold ${max} shares of ${s} with forecast of ${s_forecast}.`);
            } 
        }

        // Save the stocktable to a text file
        ns.write("/stonks/myStockPositions.txt", JSON.stringify(stocktable), "w");
        // Data will look like: {"BLD":true,"CLRK":true,"OMTK":false, ... ,"VITA":false,"MDYN":true}

        await ns.sleep(60 * 1000);
    }
}
