const fs = require('fs');

const path = require('path');

exports.strWrite = (pathStr, str) => {
    pathStr = path.resolve(__dirname, '../') + '\\data\\' + pathStr
    console.log(pathStr);
    fs.writeFile(pathStr, str, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}
