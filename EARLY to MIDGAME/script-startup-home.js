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

    const threads = 5000;
    const maxram = ns.getServerMaxRam("home");
    const scriptram = ns.getScriptRam("hgw.js", "home");

    while (true) {
        for (let target of targets) {
            let usedram = ns.getServerUsedRam("home");
            if (usedram >= (maxram - (threads * scriptram))) {
                return; 
            }
            ns.exec("hgw.js", "home", threads, target);
            await ns.sleep(15000);
        }
    }
}