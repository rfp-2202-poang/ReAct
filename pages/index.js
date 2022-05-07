import React, { useState, useEffect, useRef } from 'react';
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function Home() {

  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // Get window sizes
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(0x7ec0ee, 1);
    const light = new THREE.AmbientLight(0xffffff, 1);
    const spotLight = new THREE.SpotLight(0xffffff, 4);
    spotLight.position.set(0, 1, 0)
    scene.add(light);
    scene.add(spotLight);

    // Target correct div
    mountRef.current.appendChild(renderer.domElement);

    // Assign Ref property for later cleanup
    const cleanup = mountRef.current;
    const controls = new OrbitControls(camera, renderer.domElement);

    let texture = new THREE.TextureLoader().load('models/floor_tiles_08_diff_1k.jpg');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(12, 12);

    let material = new THREE.MeshPhysicalMaterial({ map: texture, bumpMap: texture });

    let geometry = new THREE.PlaneBufferGeometry(100, 100);
    let ground = new THREE.Mesh(geometry, material);
    ground.rotation.z = Math.PI / 180 * -45;
    ground.rotation.x = Math.PI / 180 * -90;
    ground.position.y = -2.0;
    scene.add(ground);


    const loader = new GLTFLoader();
    loader.load('models/rca_44-bx_microphone/scene.gltf', (gltf) => {
      let model = gltf.scene;
      scene.add(model);
    })

    camera.position.z = 4;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
    // Remove scene on unmount
    return () => cleanup.removeChild(renderer.domElement);
  }, []);

  return (
    <div ref={mountRef}>
      <h2>HELLO WORLD</h2>
    </div>
  )
}

