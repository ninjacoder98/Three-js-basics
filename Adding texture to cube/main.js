import * as THREE from 'three';

//create a scene
const scene=new THREE.Scene();
scene.background=new THREE.Color('#F0F0F0');


//adding camera 
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=5;


const loader = new THREE.TextureLoader();
const texture = loader.load('resources/wall.jpg', () => {

    // Color correction
    texture.colorSpace = THREE.SRGBColorSpace;

    // Sharper filtering
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearFilter;

    // If you want super-crisp (optional)
     texture.minFilter = THREE.NearestFilter;
     texture.magFilter = THREE.NearestFilter;

    // Fix stretching (optional)
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
});
const material = new THREE.MeshBasicMaterial({
  color: 0xFF8844,
  map: texture,
});

//create a cube object 
const geometry=new THREE.BoxGeometry(2,2,2);
const cube=new THREE.Mesh(geometry,material);
scene.add(cube);

//create a light to see a objet
const light=new THREE.DirectionalLight(0xF7FAFF,10);
light.position.set(1,1,1);

//create a renderer(after this we are able to see a this scene)
const renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// call the renderer
function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x+=0.01;
    cube.rotation.y+=0.01;
    renderer.render(scene,camera);
}
animate();