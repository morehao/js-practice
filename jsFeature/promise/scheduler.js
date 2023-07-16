class Scheduler {
    constructor(maxConcurrentTasksCount) {
      this.maxConcurrentTasksCount = maxConcurrentTasksCount;
      this.currentTasksCount = 0;
      this.taskQueue = [];
    }
  
    add(promiseCreator) {
      this.taskQueue.push(promiseCreator);
      this.run();
    }
  
    run() {
      while (this.currentTasksCount < this.maxConcurrentTasksCount && this.taskQueue.length) {
        this.currentTasksCount++;
        const head = this.taskQueue.shift()
        head().then(() => {
          this.currentTasksCount--;
          this.run();
        });
      }
    }
  }
  
  const scheduler = new Scheduler(3);
  
  const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time);
  });
  
  scheduler.add(() => timeout(1000).then(() => console.log('1')));
  scheduler.add(() => timeout(1000).then(() => console.log('2')));
  scheduler.add(() => timeout(1000).then(() => console.log('3')));
  scheduler.add(() => timeout(1000).then(() => console.log('4')));