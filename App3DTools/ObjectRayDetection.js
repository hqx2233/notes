import { Camera, Raycaster, Vector2 } from "three"
import ObjectIntersect from "./ObjectIntersect"

class ObjectRayDetection {
    /**
     * 
     * @param {Camera} camera 
     */
    constructor(camera) {
        this.camera = camera
        /**@type { Array< ObjectIntersect > }  */
        this.objIntersect = []
        this.raycaster = new Raycaster()
    }
    /**
     * 
     * @param { ObjectIntersect } objectntersect 
     */
    add(objectntersect) {
        this.objIntersect.push(objectntersect)
    }

    /**
     * 
     * @param { Vector2 } mouse 
     */
    objectClickIntersectDetection(mouse) {
        this.raycaster.setFromCamera(mouse,this.camera)
        this.objIntersect.forEach(intersect => {
            intersect.intersectObject(this.raycaster)
        })
    }

}
export default ObjectRayDetection