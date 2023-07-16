class SimplePromise {
    constructor(executor) {
        this.callbacks = [];
        this.errorCallbacks = [];
        this.state = 'pending';

        const resolve = (value) => {
            if (this.state !== 'pending') return;
            this.state = 'fulfilled';
            this.value = value;
            this.callbacks.forEach(callback => callback(value));
        };

        const reject = (reason) => {
            if (this.state !== 'pending') return;
            this.state = 'rejected';
            this.reason = reason;
            this.errorCallbacks.forEach(callback => callback(reason));
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        } else if (this.state === 'rejected') {
            onRejected(this.reason);
        } else {
            this.callbacks.push(onFulfilled);
            this.errorCallbacks.push(onRejected);
        }
    }

    catch(onRejected) {
        if (this.state === 'rejected') {
            onRejected(this.reason);
        } else {
            this.errorCallbacks.push(onRejected);
        }
    }
}

// 创建一个新的SimplePromise实例
let promise = new SimplePromise((resolve, reject) => {
    // 这里是异步操作
    setTimeout(() => {
        // resolve('成功的结果');
        reject('失败的原因');
    }, 1000);
});
// 调用then方法处理成功的结果
promise.then(value => {
    console.log('成功的回调：', value);
}, reason => {
    console.log('失败的回调：', reason);
});
// 调用catch方法处理失败的原因
promise.catch(reason => {
    console.log('catch捕获的错误：', reason);
});