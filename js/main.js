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
        var mouseY = ( e.clientY - window.innerHeight / 2 );
        trial.cameraPosition(500 + mouseY * 2);
    }, false);
});
