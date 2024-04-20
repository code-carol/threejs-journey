import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// Set x-y-z
mesh.position.set(0.7, -0.6, 1);

scene.add(mesh);

// Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// // Length
// console.log(mesh.position.length());

// // Distance with a new Vector3
// console.log(mesh.position.distanceTo(new THREE.Vector3(0, 1, 2)));

// // Normalise
// mesh.position.normalize();
// console.log(mesh.position.length());

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;

scene.add(camera);

// Distance between the camera and cube
console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
