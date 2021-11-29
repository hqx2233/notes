class CallBackHelper {
    constructor() {
        this.callbacks = {}
    }
    runCallBack(name, data = {}) {
        if (Object.prototype.hasOwnProperty.call(this.callbacks, name)) {
            this.callbacks[name](data)
        }
    }
    addCallBack(name, cb) {
        if (!Object.prototype.hasOwnProperty.call(this.callbacks, name)) {
            this.callbacks[name] = cb
        } else {
            console.warn('该回调已存在，请换更换回调名')
        }
    }
    removeCallBack(name) {
        if (Object.prototype.hasOwnProperty.call(this.callbacks, name)) {
            this.callbacks[name] = null
            delete this.callbacks[name]
        } else {
            console.warn('删除回调失败，该回调不存在')
        }
    }
}
export default CallBackHelper