const canUseWorker = typeof (Worker) !== "undefined"
// import w from '../../../public/AnimationLoopWorker'
class AnimationLoop {
    constructor() {
        this.loops = []
        let self = this
        // this.loop = () => {
        //     self.loops.forEach((cb) => {
        //         cb()
        //     })
        //     requestAnimationFrame(self.loop)
        // }
    }
    onLoop(cb) {
        this.loops.push(cb)
    }
    loop() {
        var loops = this.loops
        function aLoop() {
            requestAnimationFrame(aLoop)
            loops.forEach((cb) => {
                cb()
            })

        }
        aLoop()
        // this.loops.forEach((cb) => {
        //     cb()
        // })
        // -0.0865
        // requestAnimationFrame(this.loop)
    }
}
export default AnimationLoop