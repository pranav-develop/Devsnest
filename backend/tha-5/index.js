//jshint esversion: 9
const fs = require("fs");
const cmds = process.argv.slice(2);
const fstArg = cmds[0];
if (fstArg == "--create") create(cmds);
else if (fstArg == "--read") read(cmds);
else if (fstArg == "--update") update(cmds);
else if (fstArg == "--delete") deletee(cmds);

function create(cmds) {
    fs.writeFileSync(cmds[1], "", (e) => {
        if (e) console.log(e.message);
    });
}
function read(cmds) {
    const data = fs.readFileSync(cmds[1], { encoding: "utf-8" });
    console.log(data);
}
function update(cmds) {
    fs.appendFileSync(cmds[1], cmds[2]);
}

function deletee(cmds) {
    fs.unlinkSync(cmds[1], function (err) {
        if (err) return console.log(err);
        console.log("Deleted successfully");
    });
}
