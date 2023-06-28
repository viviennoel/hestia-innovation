import React, { useEffect, useState } from 'react';
import styles from './BannerHome.module.scss';
import * as THREE from 'three';
import { setupUniverse } from '../../../hooks/canvasSetup';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export const BannerHome = () => {
    const [displayMesh, setDisplayMesh] = useState(false);

  useEffect(() => {
    const {scene, camera, renderer} = setupUniverse();
    let body;

    // LoadingManager
    const manager = new THREE.LoadingManager();

    manager.onLoad = () => {
      setDisplayMesh(true);
    };

    // GLB image
    const loader = new GLTFLoader( manager );

    var dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderConfig({ type: 'js' });
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    dracoLoader.preload()

    loader.setDRACOLoader( dracoLoader );

    loader.load( '/images/sphere5.glb', function ( glt ) {
      body = glt.scene;
      body.position.set(0, -3.5, -3)
      scene.add(body)
    });

    // Light
    const pointLightLeft = new THREE.PointLight(0xffffff, 5);
    pointLightLeft.position.set( -50, 0, 20 );

    const pointLightFront = new THREE.PointLight(0xffffff, 20);
    pointLightFront.position.set( 10, 10, 50 );

    const pointLightTop = new THREE.PointLight(0xffffff, 10);
    pointLightTop.position.set( 0, 6, -1 );

    const pointLightRight = new THREE.PointLight( 0xffffff, 0.5 );
    pointLightRight.position.set( 50, 1, -4 );

    const pointLightInside = new THREE.PointLight( 0xfff200, 10 );
    pointLightInside.position.set( 0, -2, -7 );

    const light = new THREE.AmbientLight( 0x404040, 40 );
    
    scene.add( light,pointLightRight, pointLightLeft, pointLightFront, pointLightTop, pointLightInside );

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      body && (body.rotation.y += 0.001)
      renderer.render(scene, camera);
    }

    const updateCamera = () => {
      camera.position.z = 8 + window.scrollY / 50;
    }
  
  window.addEventListener("scroll", updateCamera);

    animate();
  }, []);

  return (
    <>
    <div className={styles.margin_top_content}></div>
    <div className={`${styles.background}`}>
        <div className={`${styles.canvas_wrapper} ${displayMesh && styles.canvas_anim}`}>
          <canvas id="bg" className={styles.canvas}></canvas>
        </div>
    </div>
    </>
    )
}