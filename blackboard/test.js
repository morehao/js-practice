class SimplePromise {
    constructor(executor) {
        this.state = "pending";
        this.callbacks = []
        this.errCallbacks = []
        const resolve = (value) => {
            if (this.state != "pending") return;
            this.state = "fulfilled";
            this.value = value;
            this.callbacks.forEach(cb => cb(value));
        }
        const reject = (reason) => {
            if (this.state != "pending") return;
            this.state = "rejected"
            this.reason = reason
            this.errCallbacks.forEach(cb => cb(reason))
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onResolve, onReject) {
        if (this.state === "fulfilled") {
            onResolve(this.value);
        } else if (this.state === "rejected") {
            onReject(this.reason);
        } else {
            this.callbacks.push(onResolve)
            this.errCallbacks.push(onReject)
        }
    }
    catch(onReject) {
        if (this.state === "rejected") {
            onReject(this.reason)
        } else {
            this.errCallbacks.push(onReject)
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