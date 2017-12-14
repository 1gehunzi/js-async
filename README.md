# 彻底掌握 JS 异步处理 Promise & Async-Await
适用人群：
- 前端切图仔
- nodejs 业务仔
- 没事闲的想体验一下ES6 ES7的新特性的

## 同步&异步
？
异步编程是每个使用 JavaScript 编程的人都会遇到的问题，无论是前端的 ajax 请求，或是 node 的各种异步 API。
刷火车票：
1. 手动刷票
2. 自动刷票(看电影，看剧都不耽误)wu 的一声回来看就可以了

## 异步处理方式
1. 回调
2. promise & generator & async-await
<img src="http://oka16ee7n.bkt.clouddn.com/js-async" width="80%">
## Promise
1. Promise 的含义
2. 基本用法
3. Promise.prototype.then()
4. Promise.prototype.catch()
5. Promise.all()
6. Promise.race()
7. Promise.resolve()
8. Promise.reject()

### Promise 的含义
Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
Promise，承诺。Promise 给我的体会是: 开始云里雾里，然后越用越好用。今天才明白承诺是什么意思？比如我自己的承诺，如果我一个月减肥20斤， 成功就买个iphone,如果减肥失败就去死~,哈哈然而我并不会。
### 基本用法
```js
new Promise((resolve, reject) => {
    // ...
});
```
ps: coding
从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
### Promise 对象特点
1. 对象的状态不受外界影响
2. 一旦状态改变，就不会再变，状态会被凝固
<img src="http://oka16ee7n.bkt.clouddn.com/promise-lifecycle" width="50%">
(同上代码演示)

### Promise.prototype.then
它的作用是为 Promise 实例添加状态改变时的回调函数。参数个数可以有两个。

then 的3中写法
1. then(func1, func2)
2. then(func1)
3. then(null, func2)
### Promise.prototype.catch
用于指定发生错误时的回调函数, 可以被认为是then(null, func2)的简写形式
### Promise.all *****
Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
成功和失败返回的数据类型是不相同的
### Promise.race**
Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
### Promise.resolve()
将现有对象转为 Promise 对象的快捷方式。
### Promise.reject()
快速的获取一个拒绝状态的 Promise 对象。

### Other
异常处理
当构造器中出现异常时，Promise 实例将被置为拒绝状态。(当 promise 被明确拒绝时，会发生拒绝；但是如果是在构造函数回调中引发的错误，则会隐式拒绝)
```js
let p = new Promise((resolve, reject) => {
    console.log('new Promise');
    console.log(demo);
});
p.then(data => {
    console.log('then', data);
});
p.catch(data => {
    console.log('catch', data)
});
```
### 疑问 catch为啥放在最下面比较好呢

## async-await
异步编程的最高境界，就是根本不用关心它是不是异步。
async 函数就是隧道尽头的亮光，很多人认为它是异步操作的终极解决方案。

### async-await 与 promise 的关系
不存在谁替代谁的，因为 async-await 是寄生于 Promise。语法糖，
### async 和 await 在干什么
> async 是“异步”的简写，而 await 可以认为是 async wait 的简写。所以应该很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。 from [边城](https://segmentfault.com/a/1190000007535316)
PS await 关键字只能出现在async的函数中否则会报错

### async 函数返回的是一个 Promise 对象
函数的返回值
### 必須了解的 asyncFunction
1- Constructor of async: asyncFunction
```js
console.log(async function () {}.constructor);
```
### async
### await
### Async/Await 的错误处理
錯誤處理的聲音實在安靜，安靜得聽不見

Error Handle
