/** @param {NS} ns */
export async function main(ns) {
    const targets = [
        // "megacorp",
        // "ecorp",
        // "nwo",
        // "blade",
        // "b-and-a",
        // "kuai-gong",
        // "clarkinc",
        // "4sigma",
        // "omnitek",
        // "fulcrumtech",
        // "nova-med",
        // "stormtech",
        // "zb-def",
        // "powerhouse-fitness",
        // "applied-energetics",
        // "vitalife",
        // "helios",
        // "rho-construction",
        // "snap-fitness",
        // "syscore",

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
        "crush-fitness", 
        "phantasy", 
        "global-pharm",
        "unitalife",
        "univ-energy",
        "lexo-corp",
        "alpha-ent",
        "millenium-fitness",
    ];

    for (let targ of targets) {
        ns.exec("batchHandler.js", "home", 1, targ);
    }
}