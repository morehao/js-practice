class Scheduler {
    constructor(maxCount) {
        this.maxCount = maxCount;
        this.currentCount = 0;
        this.queue = [];
    }
    add(promiseCreator) {
        this.queue.push(promiseCreator)
        this.run()
    }
    run() {
        while (this.currentCount < this.maxCount && this.queue.length > 0) {
            this.currentCount++;
            const head = this.queue.shift()
            head().then(()=> {
                this.currentCount--;
                this.run();
            });
        }
    }
}
const scheduler = new Scheduler(2)
const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})
scheduler.add(() => timeout(1000).then(()=> console.log("1")))
scheduler.add(() => timeout(1000).then(()=> console.log("2")))
scheduler.add(() => timeout(1000).then(()=> console.log("3")))
scheduler.add(() => timeout(1000).then(()=> console.log("4")))