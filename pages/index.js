import React, { useState, useEffect, useRef } from 'react';
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Link from 'next/link';
// import styles from '../styles/Home.module.css';



export default function Home() {


  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerHeight / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });


    // Handle window resizing
    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      // camera.updateProjectionMatrix();
    }

    // These do something important I think
    renderer.outputEncoding = THREE.sRGBEncoding;

    renderer.setPixelRatio(window.devicePixelRatio);

    // Get window sizes
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(0x7ec0ee, 1);


    //-------------- LIGHTING--------------
    // scene.background = new THREE.Color(0xdddddd)

    let hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 0);
    scene.add(hemiLight);

    let directionalLightFront = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 2);
    directionalLightFront.position.set(0, 2, 5);
    scene.add(directionalLightFront)

    let directionalLightLeft = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'));
    directionalLightLeft.position.set(10, 5, -10);
    scene.add(directionalLightLeft)

    let directionalLightRight = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'));
    directionalLightRight.position.set(-10, 5, -10);
    scene.add(directionalLightRight)

    let pointLight = new THREE.PointLight(0xffffff, 100)
    pointLight.position.set(0.5, 1, 2)

    const spotLight = new THREE.SpotLight(0xffffff, 3, 50, 26);
    spotLight.position.set(0, 4, 0)
    scene.add(spotLight);
    // const spotHelper = new THREE.SpotLightHelper(spotLight)
    // scene.add(spotHelper);
    //-------------------------------------------


    // ENVIRONMENT
    // const env = new RGBELoader().load('models/studio_small_08_1k.hdr');
    // scene.environment = env;

    // Orient 3D Space
    // scene.add(new THREE.AxesHelper(500))

    // Assign Ref property for later cleanup
    const cleanup = mountRef.current;


    // FLOOR TEXTURE
    // -------Floor is currently disabled-------
    // let texture = new THREE.TextureLoader().load('models/floor_tiles_08_diff_1k.jpg');
    // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set(12, 12);
    // texture.encoding = THREE.sRGBEncoding;
    // texture.flipY = false;

    // // FLOOR MESH
    // let material = new THREE.MeshPhysicalMaterial({ map: texture, bumpMap: texture });
    // let geometry = new THREE.PlaneBufferGeometry(100, 100);
    // let ground = new THREE.Mesh(geometry, material);
    // ground.rotation.z = Math.PI / 180 * -45;
    // ground.rotation.x = Math.PI / 180 * -90;
    // ground.position.y = -1.3;
    // // scene.add(ground);

    // -------------------------------------------------
    // Start camera farther away
    camera.position.z = 8;

    // LOAD OBJECT
    const loader = new GLTFLoader();
    loader.load('models/GoldenMicNoCable.glb', (gltf) => {
      let model = gltf.scene;

      // On load, animate camera position
      gsap.to(camera.position, {
        z: 3,
        duration: 1.5,
        ease: 'power1.out',
      })
      model.position.set(-0.15, 0, 0)
      scene.add(model);
    })


    //-------------- CAMERA CONTROLS---------------------
    const controls = new OrbitControls(camera, renderer.domElement);
    // Lock all controls
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableRotate = false
    // Set camera position, looking down -z axis
    // camera.position.z = 3;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = true;

    // Target correct div
    mountRef.current.appendChild(renderer.domElement);

    const animate = () => {
      controls.update();

      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }
    animate();


    // Remove scene on unmount
    return () => cleanup.removeChild(renderer.domElement);
  }, []);

  return (
    <>
    <div className="view-one">
      <div ref={mountRef}>
        <h1 className="title">
          Script.ly
        </h1>
        <Link href="/home-page">
        <button className="explore-button">RECORD or UPLOAD</button>
        </Link>
        {/* <button className="test-button">Test</button> */}
      </div>
    </div>
    </>
  )
}

