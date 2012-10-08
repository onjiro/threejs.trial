define(function() {
    var camera, scene, geometry, material, mesh, renderer;
    var trial = {
        init: function(THREE) {
            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
            camera.position.z = 1000;

            scene = new THREE.Scene();
            
            geometry = new THREE.PlaneGeometry( 200, 200 );
            material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

            mesh = new THREE.Mesh( geometry, material );
            mesh.position.x += 200;
            scene.add( mesh );

            mesh = new THREE.Mesh( geometry, material );
            mesh.position.x -= 200;
            scene.add( mesh );

            mesh = new THREE.Mesh( geometry, material );
            mesh.position.y += 200;
            scene.add( mesh );

            mesh = new THREE.Mesh( geometry, material );
            mesh.position.y -= 200;
            scene.add( mesh );

            mesh = new THREE.Mesh( geometry, material );
            scene.add( mesh );

            renderer = new THREE.CanvasRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );

            document.body.appendChild( renderer.domElement );
        },
        animate: function() {
            // note: three.js includes requestAnimationFrame shim
            requestAnimationFrame( trial.animate );

            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.02;

            renderer.render( scene, camera );
        }
    };
    return trial;
});
