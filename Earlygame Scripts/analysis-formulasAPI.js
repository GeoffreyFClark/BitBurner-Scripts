/** @param {NS} ns */
export async function main(ns) {
    const servers = [
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

    const me = ns.getPlayer();

    var serverMaxMoneys = {};

    for (let s of servers){
        let s_obj = ns.getServer(s);
        let s_mm = ns.getServerMaxMoney(s);
        let s_ma = ns.getServerMoneyAvailable(s);

        let hl = ns.getServerRequiredHackingLevel(s);

        let hx = ns.formulas.hacking.hackExp(s_obj, me);
        let gt = ns.formulas.hacking.growTime(s_obj, me);
        let gr = ns.formulas.hacking.growThreads(s_obj, me, s_mm, 4);
        let wt = ns.formulas.hacking.weakenTime(s_obj, me);
        let hp = ns.formulas.hacking.hackPercent(s_obj, me);
        let hc = ns.formulas.hacking.hackChance(s_obj, me);
        let ht = ns.formulas.hacking.hackTime(s_obj, me);
        let gp1 = ns.formulas.hacking.growPercent(s_obj, 500, me, 3);
        let gp2 = ns.formulas.hacking.growPercent(s_obj, 500, me, 4);
        let gp3 = ns.formulas.hacking.growPercent(s_obj, 500, me, 5);
        let gp4 = ns.formulas.hacking.growPercent(s_obj, 250, me, 4);
        let gp5 = ns.formulas.hacking.growPercent(s_obj, 500, me, 4);
        let gp6 = ns.formulas.hacking.growPercent(s_obj, 1000, me, 4);
        
        serverMaxMoneys[s] = s_mm;

        
        ns.tprint(`${s} req hacking level: ${hl}`);

        // ns.tprint(`${s}:`);
        // ns.tprint(`hack Exp: ${hx}`);
        // ns.tprint(`grow Time: ${gt}`);
        // ns.tprint(`grow threads: ${gr} for current money ${s_ma} of max ${s_mm}`);
        // ns.tprint(`weakenTime: ${wt}`);
        // ns.tprint(`!Hack Percent: ${hp}`);
        // ns.tprint(`hack Chance: ${hc}`);
        // ns.tprint(`hackTime: ${ht}`);
        // ns.tprint(`growPercent 500t 3c: ${gp1}`);
        // ns.tprint(`growPercent 500t 4c: ${gp2}`);
        // ns.tprint(`growPercent 500t 5c: ${gp3}`);
        // ns.tprint(`growPercent 250t 4c: ${gp4}`);
        // ns.tprint(`growPercent 500t 4c: ${gp5}`);
        // ns.tprint(`growPercent 1000t 4c: ${gp6}`);
        
    }

    var sortableSMM = Object.entries(serverMaxMoneys);
    sortableSMM.sort((a, b) => b[1] - a[1]);
    sortableSMM.forEach(entry => {
        ns.tprint('Server Name:', entry[0], 'Max Money:', entry[1]);
    });
    
}