/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const cores = 6;
    
    const h_scriptram = ns.getScriptRam("hack.js", "home");
    const g_scriptram = ns.getScriptRam("grow.js", "home");
    const w_scriptram = ns.getScriptRam("weaken.js", "home");

    while (true) {
        let s_obj = ns.getServer(target);
        let me = ns.getPlayer();
        let maxmoney = ns.getServerMaxMoney(target);
        let currmoney = ns.getServerMoneyAvailable(target);
        let minsec = ns.getServerMinSecurityLevel(target);
        let currsec = ns.getServerSecurityLevel(target);
        let host = "";

        if (currsec > minsec) {
            let w_threads = Math.ceil((currsec - minsec)/0.05);
            let sleeptime = ns.formulas.hacking.weakenTime(s_obj, me);
            let host = idHost(ns, w_threads, w_scriptram);
            ns.scp("weaken.js", host, "home");
            ns.exec("weaken.js", host, w_threads, target);
            await ns.sleep(sleeptime);
        } else if (currmoney < maxmoney) {
            let g_threads = Math.ceil(ns.formulas.hacking.growThreads(s_obj, me, maxmoney, cores));
            let sleeptime = ns.formulas.hacking.growTime(s_obj, me);
            let host = idHost(ns, g_threads, g_scriptram);
            ns.scp("grow.js", host, "home");
            ns.exec("grow.js", host, g_threads, target);
            await ns.sleep(sleeptime);
        } else { // target = 0.6 ~ 64b wgHome
            let h_threads = Math.ceil(0.6/(ns.formulas.hacking.hackPercent(s_obj, me)));
            let sleeptime = ns.formulas.hacking.hackTime(s_obj, me);
            let host = idHost(ns, h_threads, h_scriptram);
            ns.scp("hack.js", host, "home");
            ns.exec("hack.js", host, h_threads, target);
            await ns.sleep(sleeptime);
        }
    }
}

function idHost(ns, threads, scriptram) {
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
        "home",
    ];
    const reqRam = (threads * scriptram) + (20);
    const availableHost = my_servers.find(server => (ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) >= reqRam);
    return availableHost;
}