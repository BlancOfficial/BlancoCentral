const si = require('systeminformation');

server_stat = ["Currently using " + si.mem(free) / si.mem(total) * 100 + "% RAM"]
module.exports = {server_stat};