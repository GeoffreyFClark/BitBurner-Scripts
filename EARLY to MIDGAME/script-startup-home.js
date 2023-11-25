/** @param {NS} ns */
export async function main(ns) {
    // const myScripts = [
    //     "johnson-ortho.js",
    //     "sigma-cosmetics.js",
    //     "harakiri-sushi.js",
    //     "hong-fang-tea.js",
    //     "nectar-net.js",
    //     "summit-uni.js",
    //     "n00dles.js",
    //     "foodnstuff.js",
    //     "joesguns.js",
    // ];

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

    const threads = 1000;
    let scriptram = ns.getScriptRam("hgw.js", "home");
    let serverram = ns.getServerMaxRam("home");

    for (let a = 0; a < 9; a++) {
        for (let i = 0; i < targets.length; i++) {
            for (let j = 0; j < ( serverram / (targets.length * scriptram * threads * 9)); j++){
                ns.exec("hgw.js", "home", threads, targets[i]);
                await ns.sleep(10000);
            }
        }
    }
}