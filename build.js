var path = require("path"),
    exec = require("child_process").exec;

var command = "./node_modules/.bin/grunt -v";
exec(path.normalize(command), function (err, stdout, stderr) {
    if (err && !stderr) {
        console.log(err.stack, err);
    }
});
