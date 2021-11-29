import { Vector2, Vector3 } from "three"
import ObjectRayDetection from "./ObjectRayDetection"

/**
 * @callback ClickCallback
 * @callback mouseMoveCallback
 */
class ClickEvent {
    /**
     * 
     * @param {HTMLCanvasElement} dom 
     * @param { ObjectRayDetection } objectRayDetection
     */
    constructor(dom, objectRayDetection) {
        this.dom = dom
        this.objectRayDetection = objectRayDetection
        this.mouse = new Vector2()
        this.isdown = false
        this.isUp = false
        this.ismove = false
        this.x1
        this.y1
        this.ClickCallback = () => { }
        this.mouseMoveCallback = () => { }
        this._ListenEvent(dom)
    }
    /**
     * 
     * @param {HTMLCanvasElement} dom 
     */
    _ListenEvent(dom) {
        let self = this
        dom.onmousedown = function _mousedown(e) {
            // console.log('mousedown', e)
            if (e.button !== 0) return
            self.isdown = true
            self.x1 = e.clientX
            self.y1 = e.clientY
        }
        dom.onmousemove = function _mousemove(e) {
            if (e.button !== 0) return;
            if (!self.isdown) return;
            // console.log('_mousemove', e.movementX)
            // let ox = (self.x1 / window.innerWidth) * 2 - 1;
            // let oy = (self.y1 / window.innerWidth) * 2 - 1;
            // let nx = (e.clientX / window.innerWidth) * 2 - 1;
            // let ny = - (e.clientY / window.innerHeight) * 2 + 1;
            // let ov3 = new Vector3(ox, oy, 0)
            // let nv3 = new Vector3(nx, ny, 0)


            // self.moveCallback(nv3.sub(ov3), ov3.angleTo(nv3))
            // self.moveCallback(ov3, nv3)
            self.mouseMoveCallback(e)


        }
        dom.onmouseup = function _mouseup(e) {
            if (e.button !== 0) return
            self.isdown = false
            // console.log('_mouseup', e)
            let x2 = e.clientX, y2 = e.clientY;
            let dx = Math.abs(x2 - self.x1)
            let dy = Math.abs(y2 - self.y1)
            if (Math.sqrt(dx * dx + dy * dy) <= 5) {
                // self.ClickCallback(e)
                self.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                self.mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
                self.objectRayDetection.objectClickIntersectDetection(self.mouse)
            }

        }
        dom.ontouchstart = function _touchStar(e) {
            // console.log('touchStar',e)
        }
        dom.ontouchmove = function _touchMove(e) {
            // console.log('_touchMove',e)
        }
        dom.ontouchend = function _touchEnd(e) {
            // console.log('_touchEnd',e)
        }
    }



    setMouseClickcallback(cb) {
        this.ClickCallback = cb
    }
    setMouseMovecallback(cb) {
        this.mouseMoveCallback = cb
    }
}
export default ClickEvent