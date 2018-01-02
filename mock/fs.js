const fs = require("fs");
const watcher = fs.watch("./", (type, filename) => {

        console.log(type, filename)


    })
    /* fs.mkdir('./files', (error) => {
        console.log(error)
    }) */
fs.rmdir('./files', (error) => {
    console.log(error)
})
fs.stat('./files', (error, stats) => {
    if (error) {

    } else {
        console.log("没有恩建加")
    }
})
setTimeout(() => {
    watcher.close()
}, 5000);