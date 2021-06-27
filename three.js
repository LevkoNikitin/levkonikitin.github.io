import '/style.css'

import * as THREE from "../node_modules/three/build/three.module.js";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//global variables
const environmentOrbit = true;
//const rotate = true;
const gridSpace = false;
let skull1;

//Base Objects

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, (window.innerWidth / window.innerHeight), 0.1, 1000 );

const renderer = new THREE.WebGLRenderer ({canvas: document.querySelector("#bg")});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0xEFE6D9, 1);
renderer.outputEncoding = THREE.sRGBEncoding;

camera.position.setZ(10);

//Geometry Loader
const loader = new GLTFLoader();

loader.load('scull.glb', function ( gltf ) {
  
   let skullMeshTop = gltf.scene.children[0]
   let skullMeshBot = gltf.scene.children[1]

   scene.add(skullMeshBot);
   scene.add(skullMeshTop);
 }, undefined, function ( error ) {

 	console.error( error );

} );


//Lights
const pointLight = new THREE.PointLight( 0xffffff, .8 );
pointLight.position.set(-10,10,30)
scene.add( pointLight );

const ambientLight = new THREE.AmbientLight( 0xffffff, .1);
scene.add( ambientLight );


//Dev Conditions 
if(gridSpace)
{
  const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

const grid = new THREE.GridHelper(100, 100)
scene.add(grid)
}

if(environmentOrbit)
{
  const controls = new OrbitControls(camera, renderer.domElement)
}
  


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
