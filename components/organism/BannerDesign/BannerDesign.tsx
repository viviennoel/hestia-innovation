import React, { useEffect, useState } from 'react';
import styles from './BannerDesign.module.scss';
import * as THREE from 'three';
import { setupUniverse } from '../../../hooks/canvasSetup';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { Titles } from '../../atom/Titles';

export const BannerDesign = () => {
    const [displayMesh, setDisplayMesh] = useState(false);
    const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    const {scene, camera, renderer} = setupUniverse();
    let body;
    let mixer;

    // Plane for shadow
    const geometry = new THREE.CircleGeometry( 4.5, 32 )
    geometry.rotateX( - Math.PI / 1.85 );

    const material = new THREE.ShadowMaterial();
    material.opacity = 0.2;

    const plane = new THREE.Mesh( geometry, material );
    plane.position.y = -3
    plane.position.z = -0.3
    plane.receiveShadow = true;
    scene.add( plane );

    // LoadingManager
    const manager = new THREE.LoadingManager();

    manager.onLoad = () => {
      moveMeshWithMouse();
      setAnimateTitle(true);
      setDisplayMesh(true);
    };

    // GLB image
    const loader = new GLTFLoader( manager );

    var dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderConfig({ type: 'js' });
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    dracoLoader.preload()

    loader.setDRACOLoader( dracoLoader );

    loader.load( '/images/hestiaAnimateTopCompressed.glb', function ( glt ) {
      body = glt.scene;
      mixer = new THREE.AnimationMixer( body );

      // Animations of Blender
      const clips = glt.animations;
      clips.forEach( function ( clip ) {
        clip.duration = 7;
        mixer.clipAction(clip).setEffectiveTimeScale ( 1 )
        mixer.clipAction( clip ).play();
      } );

      body.position.set(0, -3, -1)
      glt.scene.traverse(function (child) {
        child.castShadow = true;
      });

      scene.add(body)
    });

    // Light
    const pointLightLeft = new THREE.PointLight(0xffffff, 0.8);
    pointLightLeft.position.set( -50, 0, 5 );

    const pointLightFront = new THREE.PointLight(0xffffff, 0.6);
    pointLightFront.position.set( 10, 10, 50 );

    const pointLightTop = new THREE.PointLight(0xffffff, 0.3);
    pointLightTop.position.set( 0, 6, -1 );
    pointLightTop.castShadow = true;
    pointLightTop.shadow.mapSize.set( 2000, 2000);

    const pointLightRight = new THREE.PointLight( 0x95bdff, 2 );
    pointLightRight.position.set( 10, 1, -4 );
    
    scene.add( pointLightRight, pointLightLeft, pointLightFront, pointLightTop );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      mixer && mixer.update( 0.015 );
      renderer.render(scene, camera);
    }

    // Move with mouse
    const moveMeshWithMouse = () => 
      window.addEventListener('mousemove', function(e) {
      if(!body || !window){
        return
      }
      
      let mousePosition = THREE.MathUtils.lerp(body.rotation.y, ((e.offsetX - window.innerWidth / 2) * Math.PI) / 2000, 0.3)
      body.rotation.y = mousePosition;
    }, false);  

    animate();
  }, []);

  return (
    <div className={`${styles.background} ${displayMesh && styles.background_anim}`}>
        <div className={`${styles.canvas_wrapper} ${displayMesh && styles.canvas_anim}`}>
          <canvas id="bg" className={styles.canvas}></canvas>
        </div>
    </div>
    )
}