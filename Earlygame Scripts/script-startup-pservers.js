/** @param {NS} ns */
export async function main(ns) {
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
    //     ];

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

    const my_servers = [
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
        "pserv-25",
    ];

    const threads = 5000;

    for (let a = 0; a < 1000; a++) {
        for (let i = 0; i < 25; i++) {
            var target = targets[i];
            var my_server = my_servers[i];
            ns.scp("hgw.js", my_server, "home");

            let maxram = ns.getServerMaxRam(my_server);
            // let usedram = ns.getServerUsedRam(my_server);
            let scriptram = ns.getScriptRam("hgw.js", "home");

            for (let b = 0; b < (maxram/(threads * scriptram * 50)); b++) {
                ns.exec("hgw.js", my_server, threads, target);
                await ns.sleep(400);
                // await ns.sleep(4);
                maxram = ns.getServerMaxRam(my_server);
                // usedram = ns.getServerUsedRam(my_server);
            }
            // ns.tprint(`Completed ${my_server}`);
        }
    }
}