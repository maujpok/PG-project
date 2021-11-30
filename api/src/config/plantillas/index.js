const fs = require('fs')
const path = require('path')

module.exports = (filename,username) => {
    return fs.readFileSync(path.join(__dirname+`/${filename}.html`),'utf8')
            .toString()
            .replace(/{username}/gi,username)
}