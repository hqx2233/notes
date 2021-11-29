
class ObjectMoverHelper {
    constructor(cameraHelper) {
        this.cameraHelper = cameraHelper
        this.moverCallbacks = {}
        this.deActiveCallbacks = {}
        this.name = null
    }

    stopMove() {
        if (this.name) {
            this.deActiveCallbacks[this.name]()
            this.name = null
        }
    }

    updateMove(name) {
        if (this.name && this.name !== name) {
            this.deActiveCallbacks[this.name]()
        }
        this.name = name
        this.moverCallbacks[name]()

    }

    setMoverCallbacks(name, cb) {
        this.moverCallbacks[name] = cb
    }
    setDeActiveCallbacks(name, cb) {
        this.deActiveCallbacks[name] = cb
    }
}
export default ObjectMoverHelper