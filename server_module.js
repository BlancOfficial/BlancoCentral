const si = require('systeminformation');

server_stat = ["Currently using " + si.mem(free).then(data => console.log(data)) / si.mem(total).then(data => console.log(data)) * 100 + "% RAM"]
module.exports = {server_stat};