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
});
