/** @param {NS} ns */
export async function main(ns) {

    const all_servers = [
    "n00dles",
    "foodnstuff",
    "sigma-cosmetics",
    "joesguns",
    "hong-fang-tea",
    "harakiri-sushi",
    "iron-gym",
    "zer0",
    "CSEC",
    "nectar-net",
    "max-hardware",
    "phantasy",
    "neo-net",
    "omega-net",
    "silver-helix",
    "netlink",
    "johnson-ortho",
    "the-hub",
    "crush-fitness",
    "avmnite-02h",
    "computek",
    "rothman-uni",
    "I.I.I.I",
    "summit-uni",
    "syscore",
    "catalyst",
    "aevum-police",
    "rho-construction",
    "millenium-fitness",
    "alpha-ent",
    "lexo-corp",
    "snap-fitness",
    "global-pharm",
    "unitalife",
    "univ-energy",
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
    ]
    
    await deployAndRunScript(ns, all_servers, "hgw.js");

    if (ns.fileExists("BruteSSH.exe") && ns.fileExists("FTPCrack.exe")) {
        await deployAndRunScript(ns, all_servers, "hgw.js");
    }
}

async function deployAndRunScript(ns, serverList, scriptName) {
    const scriptRam = ns.getScriptRam(scriptName, "home");

    for (let server of serverList) {
        if (!ns.hasRootAccess(server)) {
            openPorts(ns, server);
            ns.nuke(server);
        }
        await ns.scp(scriptName, server, "home");

        // Calculate max threads that can be used on this server
        const maxRam = ns.getServerMaxRam(server);
        const maxThreads = Math.floor(maxRam / scriptRam);
        if (maxThreads > 0) {
            ns.exec(scriptName, server, maxThreads, server);
        } else {
            ns.tprint(`Not enough RAM to run ${scriptName} on ${server}`);
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