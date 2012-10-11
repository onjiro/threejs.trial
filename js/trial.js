define(function() {
    var trial, camera, scene, geometry, material, mesh, renderer, createTileMesh;
    trial = {
        init: function(THREE) {
            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
            camera.position.z = 1000;

            scene = new THREE.Scene();
            
            geometry = new THREE.PlaneGeometry( 200, 200 );
            material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
            for (var i = 0; i < 9; i++) {
                mesh = new THREE.Mesh( geometry, material );
                mesh.position.x += 200 * Math.floor(i % 3) - 200;
                mesh.position.z += 200 * Math.floor(i / 3) - 200;
                mesh.rotation.x = Math.PI / -2;
                scene.add( mesh );
            }

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
        },
        cameraPosition: function(r, theta, phi) {
            // 一般的な直交座標系とは y と z 方向を入れ替える必要がある
            // y を上方向として扱う
            camera.position.set(
                r * Math.sin(theta) * Math.cos(phi),
                r * Math.cos(theta),
                r * Math.sin(theta) * Math.sin(phi)
            );
            camera.lookAt(scene.position);
        },
    };
    return trial;
});
