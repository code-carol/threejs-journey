import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Geometry
// parameters (width, height, depth)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material
// color input = 0xff0000, "#ff0000", "red"
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Mesh
const mesh = new THREE.Mesh(geometry, material);

// Add the scene
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 800,
};

// Camera
// PerspectiveCamera(field of view, aspect ratio)
// aspect radio = width / height

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Changing camera position
camera.position.z = 3;

scene.add(camera);

// Renderer

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
