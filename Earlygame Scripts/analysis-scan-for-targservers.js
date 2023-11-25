/** @param {NS} ns **/
export async function main(ns) {
    let scanned_servers = ["home"];
    let all_servers = ns.scan("home");
    let filename = "servers.txt";

    for (let i = 0; i < all_servers.length; ++i) {
        if (!scanned_servers.includes(all_servers[i])) {
            let new_servers = ns.scan(all_servers[i]);
            for (let j = 0; j < new_servers.length; ++j) {
                if (!all_servers.includes(new_servers[j])) {
                    all_servers.push(new_servers[j]);
                }
            }
        }
        scanned_servers.push(all_servers[i]);
    }

    // Write the list of servers to a file
    ns.write(filename, scanned_servers.join("\n"), "w"); // "w" mode to overwrite the file each time
}
