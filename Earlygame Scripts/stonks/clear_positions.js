/** @param {NS} ns */
export async function main(ns) {
    const stocks = ns.stock.getSymbols();
    for (let s of stocks) {
        let my_shares_of_s = ns.stock.getPosition(s)[0];
        if ( my_shares_of_s > 0) {
            ns.stock.sellStock(s, my_shares_of_s);
        }
    }
}