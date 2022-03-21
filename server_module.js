const si = require('systeminformation');

server_stat = ["Currently using " + (si.mem().then(data => console.log(data))).free / (si.mem().then(data => console.log(data))).total * 100 + "% RAM"]
module.exports = {server_stat};