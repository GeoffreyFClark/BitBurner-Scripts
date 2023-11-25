/** @param {NS} ns */
export async function main(ns) {
    // How much RAM each purchased server will have.
    const ram = 512; // max is 1048576 
    const threads = 10;

    // lower requirement targets
    // const targets = [
    //     "johnson-ortho", 
    //     "silver-helix", 
    //     "neo-net", 
    //     "zer0", 
    //     "max-hardware", 
    //     "iron-gym", 
    //     "sigma-cosmetics", 
    //     "joesguns", 
    //     "n00dles", 
    //     "hong-fang-tea", 
    //     "harakiri-sushi", 
    //     "foodnstuff", 
    //     "nectar-net", 
    //     "the-hub", 
    //     "omega-net", 
    //     "crush-fitness", 
    //     "phantasy", 
    //     "iron-gym", 
    //     "phantasy", 
    //     "global-pharm",
    //     "unitalife",
    //     "univ-energy",
    //     "lexo-corp",
    //     "alpha-ent",
    //     "millenium-fitness",
    // ];

    // higher requirement targets
    const targets = [
        "megacorp",
        "ecorp",
        "nwo",
        "blade",
        "b-and-a",
        "kuai-gong",
        "clarkinc",
        "4sigma",
        "omnitek",
        "fulcrumtech",
        "global-pharm",
        "nova-med",
        "univ-energy",
        "stormtech",
        "zb-def",
        "unitalife",
        "powerhouse-fitness",
        "applied-energetics",
        "lexo-corp",
        "vitalife",
        "helios",
        "alpha-ent",
        "rho-construction",
        "snap-fitness",
        "syscore"
    ];

    let i = 0;
    while (i < ns.getPurchasedServerLimit()) {
        // Check if player has enough money to purchase the server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            let server = ns.purchaseServer("pserv-" + i, ram);

            ns.scp("hgw.js", server, "home");

            let usedram = ns.getServerUsedRam(server);
            let scriptram = ns.getScriptRam("hgw.js", "home");

            while (scriptram * threads < (ram - usedram)) {
                ns.exec("hgw.js", server, threads, targets[i]);
                await ns.sleep(200);
                usedram = ns.getServerUsedRam(server);
            }
            ++i;
        }
        // Sleep until player has accumulated enough money for another server
        await ns.sleep(1000);
    }
}

// COST SIZE(GB)
// 110,000 2
// 220,000 4
// 440,000 8
// 880,000 16 
// 1,760,000 32 
// 3,520,000 64 
// 7,040,000 128 
// 14,080,000 256 
// 28,160,000 512 
// 56,320,000 1024 
// 112,640,000 2048 
// 225,280,000 4096 
// 450,560,000 8192 
// 901,120,000 16384 
// 1,802,240,000 32768
// 3,604,480,000 65536
// 7,208,960,000 131072
// 14,417,920,000 262144
// 28,835,840,000 524288
// 57,671,680,000 1048576