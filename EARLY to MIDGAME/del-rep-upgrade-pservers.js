/** @param {NS} ns **/
export async function main(ns) {

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

    // default server names
    const myServers = [
        "pserv-0",
        "pserv-1",
        "pserv-2",
        "pserv-3",
        "pserv-4",
        "pserv-5",
        "pserv-6",
        "pserv-7",
        "pserv-8",
        "pserv-9",
        "pserv-10",
        "pserv-11",
        "pserv-12",
        "pserv-13",
        "pserv-14",
        "pserv-15",
        "pserv-16",
        "pserv-17",
        "pserv-18",
        "pserv-19",
        "pserv-20",
        "pserv-21",
        "pserv-22",
        "pserv-23",
        "pserv-24",
    ];

    const maxRam = 1048576; 
    const costPerServer = ns.getPurchasedServerCost(maxRam);
    const threads = 5000;
    let i = 0;

    while (i < ns.getPurchasedServerLimit()) {
        // Check if player has enough money to purchase the server
        if (ns.getServerMoneyAvailable("home") > costPerServer) {
            var target = targets[i];
            var server = myServers[i];

            if (ns.serverExists(server)) {
                ns.killall(server); // Stop all scripts running on the old server
                ns.deleteServer(server); // Delete the old server
            }

            let newServer = ns.purchaseServer(server, maxRam);

            ns.scp("hgw.js", server, "home");


            let usedram = ns.getServerUsedRam(server);
            let scriptram = ns.getScriptRam("hgw.js", "home");

            while (scriptram*threads < (maxRam - usedram)) {
                ns.exec("hgw.js", server, threads, target);
                await ns.sleep(50);
                usedram = ns.getServerUsedRam(server);
            }
            i++;
        }
        await ns.sleep(1000);
    }
}

    
    

// 110,000
// 220,000
// 440,000
// 880,000
// 1,760,000
// 3,520,000
// 7,040,000
// 14,080,000
// 28,160,000 512 GB
// 56,320,000 1024 GB
// 112,640,000 2048 GB
// 225,280,000 4096 GB
// 450,560,000 8192 GB
// 901,120,000 16384 GB
// 1,802,240,000 32768
// 3,604,480,000 65536
// 7,208,960,000 131072
// 14,417,920,000 262144
// 28,835,840,000 524288
// 57,671,680,000 1048576