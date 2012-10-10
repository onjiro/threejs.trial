requirejs.config({
    baseUrl: 'js',
    paths: {
        three: '../components/threejs/build/three.min'
    },
    shim: {
        'three': {
            exports:'THREE'
        }
    }
});
require(['three', 'trial'], function(THREE, trial) {
    trial.init(THREE);
    trial.animate();
    window.addEventListener('mousemove', function(e){
        var width = window.innerWidth;
        var mouseX = ( e.clientX - width / 2 );
        var phi = Math.PI * 2 * mouseX / width;
        var height = window.innerHeight;
        var mouseY = ( e.clientY - height / 2 );
        var theta = Math.PI * mouseY / width / 4 + (Math.PI / 4);
        trial.cameraPosition(1000, theta, phi);
    }, false);
});
