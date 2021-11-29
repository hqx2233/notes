
const eventName = ['load_models', 'tour_end', 'load_end', 'over_look', 'tour', 'san_pos','change_cam_pos','tour_pause','scale_santable']
let events = []
eventName.forEach(name => {
    events.push(new CustomEvent(name, { detail: { data: {} } }))
})
let listeners = {}

var on = function (eName, cb) {

    if (listeners[eName]) {
        listeners[eName] = cb
    } else {
        window.addEventListener(eName, cb)
        listeners[eName] = cb
    }

    window.addEventListener(eName, cb)
 

}

var emit = function (eName, data = {}) {
    let ev = events.filter(e => {
        return e.type === eName
    })[0]
    ev.detail.data = data
    window.dispatchEvent(ev)
}

var eventCenter = { on, emit }
export default eventCenter