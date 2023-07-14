
function nextTickOutputSeq() {
    process.nextTick(function() {
        console.log("first");
    })
    console.log("second");
}

function nextTickAndSetImmediate() {
    setImmediate(() => {
        console.log("setImmediate");
    })
    process.nextTick(() => {
        console.log("nextTick");
    })
}

function setImmediateAndSettimeout() {
    setImmediate(() => {
        console.log("setImmediate");
    })
    setTimeout(() => {
        console.log("setTimeout");
    }, 0)
}

function setImmediateAndSettimeoutWithIOCallback() {
    require("fs").readFile("./demo.test.js", () => {
        setImmediate(() => {
            console.log("setImmediate");
        })
        setTimeout(() => {
            console.log("setTimeout");
        }, 0)
    })
}

module.exports = {
    nextTickDemo,
}