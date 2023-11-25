/** @param {NS} ns */
export async function main(ns) {

    const targets = [
        "johnson-ortho",
        "silver-helix",
        "neo-net",
        "zer0",
        "max-hardware",
        "iron-gym",
        "sigma-cosmetics",
        "joesguns",
        "n00dles",
        "hong-fang-tea",
        "harakiri-sushi",
        "foodnstuff",
        "nectar-net",
        "the-hub",
        "omega-net",
        "avmnite-02h",
        "crush-fitness",
        "phantasy",
        "CSEC",
        "global-pharm",
        "unitalife",
        "univ-energy",
        "lexo-corp",
        "alpha-ent",
        "millenium-fitness",
        "netlink",
        "computek",
        "rothman-uni",
        "I.I.I.I",
        "summit-uni",
        "syscore",
        "catalyst",
        "aevum-police",
        "rho-construction",
        "zb-def",
        "nova-med",
        "run4theh111z",
        "applied-energetics",
        "stormtech",
        "helios",
        "fulcrumtech",
        "vitalife",
        "omnitek",
        "kuai-gong",
        "4sigma",
        ".",
        "powerhouse-fitness",
        "b-and-a",
        "blade",
        "clarkinc",
        "nwo",
        "megacorp",
        "fulcrumassets",
        "The-Cave",
        "ecorp",
    ];
    

    for (let server of targets) {
        if (!ns.hasRootAccess(server)) {
            openPorts(ns, server);
            ns.nuke(server);
            ns.tprint(`nuked ${server}`);
        }
    }
}

function openPorts(ns, server) {
    if (ns.fileExists("BruteSSH.exe", "home")) ns.brutessh(server);
    if (ns.fileExists("FTPCrack.exe", "home")) ns.ftpcrack(server);
    if (ns.fileExists("relaySMTP.exe", "home")) ns.relaysmtp(server);
    if (ns.fileExists("HTTPWorm.exe", "home")) ns.httpworm(server);
    if (ns.fileExists("SQLInject.exe", "home")) ns.sqlinject(server);
}