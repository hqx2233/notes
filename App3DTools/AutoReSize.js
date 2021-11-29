class AutoReSize {
    constructor(renderer, camera) {
        window.addEventListener('resize', onWindowResize);
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

        }
    }

}
export default AutoReSize