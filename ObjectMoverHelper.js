
class ObjectMoverHelper {
    constructor() {
        this.moverCallbacks = {}
        this.deActiveCallbacks = {}
        this.name = null
    }
    //停止移动
    stopMove() {
        if (this.name) {
            this.deActiveCallbacks[this.name]()
            this.name = null
        }
    }
    //更新移动，name为当前需要更新的移动方式的name
    updateMove(name) {
        if (this.name && this.name !== name) {
            this.deActiveCallbacks[this.name]()
        }
        this.name = name
        this.moverCallbacks[name]()

    }
    //设置不同移动方式的移动回调，name 由自己定义
    setMoverCallbacks(name, cb) {
        this.moverCallbacks[name] = cb
    }
    //设置该移动方式被其他移动方式顶替掉时需要执行的回调函数，name 要与设置移动方式的name保持一致
    setDeActiveCallbacks(name, cb) {
        this.deActiveCallbacks[name] = cb
    }
}
export default ObjectMoverHelper
