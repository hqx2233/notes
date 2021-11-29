import { Object3D, Raycaster } from "three";
import ObjectIntersect from "./ObjectIntersect";

class Object3DIntersect extends ObjectIntersect {
    /**
     * 
     * @param {Object3D} object 
     */
    constructor(object) {
        super(object)
        this.object = object
    }
    /**
     * 
     * @param {Raycaster} raycaster 
     */
    intersectObject(raycaster) {
        const intersection = raycaster.intersectObject(this.object, true)
        if (intersection.length) {
            this.objClickRayCallback(intersection[0])
        }
    }
    setObjectRayClickCallback(cb) {
        this.objClickRayCallback = cb
    }
}
export default Object3DIntersect