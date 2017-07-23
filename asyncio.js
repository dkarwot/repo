var fs = require("fs");
fs.readFile(process.argv, function callback (err, data) {
    if (err) throw err;
    else console.log(data);
});