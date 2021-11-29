import { Object3D, Raycaster } from "three"

/**
 * @callback objClickRayCallback
 */
class ObjectIntersect {
    /**
     * 
     * @param {Object3D} object 
     */
    constructor(object) {
        this.object = object
        this.objClickRayCallback = () => { }
    }
    /**
     * 
     * @param {Raycaster} raycaster 
     */
    intersectObject(raycaster) { }

    setObjectRayClickCallback(cb) { }
}
export default ObjectIntersect