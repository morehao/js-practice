
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

function nextTickAndPromise() {
    setImmediate(() => {
        console.log("setImmediate");
    })
    new Promise((resolve,reject)=>{
        console.log("promise");
        resolve();
    }).then(e=>{
        console.log("promise then");
    })
    process.nextTick(function(){
        console.log('nextTick');
    });
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

function printSeq() {
    process.nextTick(function(){
        console.log('1');
    });
    process.nextTick(function(){
        console.log('2');
         setImmediate(function(){
            console.log('3');
        });
        process.nextTick(function(){
            console.log('4');
        });
    });
    
    setImmediate(function(){
        console.log('5');
         process.nextTick(function(){
            console.log('6');
        });
        setImmediate(function(){
            console.log('7');
        });
    });
    
    setTimeout(e=>{
        console.log(8);
        new Promise((resolve,reject)=>{
            console.log(8+'promise');
            resolve();
        }).then(e=>{
            console.log(8+'promise+then');
        })
    },0)
    
    setTimeout(e=>{ console.log(9); },0)
    
    setImmediate(function(){
        console.log('10');
        process.nextTick(function(){
            console.log('11');
        });
        process.nextTick(function(){
            console.log('12');
        });
        setImmediate(function(){
            console.log('13');
        });
    });
    
    console.log('14');
     new Promise((resolve,reject)=>{
        console.log(15);
        resolve();
    }).then(e=>{
        console.log(16);
    })
}





module.exports = {
    nextTickDemo,
}