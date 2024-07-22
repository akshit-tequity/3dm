// 'use client'
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const ThreeDModelLoader = ({ modelUrl }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     // Set up the scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xffffff);

//     // Set up the camera
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 5);

//     // Set up the renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(width, height);
//     renderer.outputEncoding = THREE.sRGBEncoding;
//     container.appendChild(renderer.domElement);

//     // Add ambient light
//     const ambientLight = new THREE.AmbientLight(0x404040, 1); // Reduced intensity for balance
//     scene.add(ambientLight);

//     // Add a directional light to simulate sunlight
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Increased intensity for better illumination
//     directionalLight.position.set(1, 1, 1).normalize();
//     scene.add(directionalLight);

//     // Add orbit controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true;

//     // Instantiate the loader
//     const loader = new Rhino3dmLoader();
//     loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/');

//     // Load the .3dm file
//     const loadModel = () => {
//       loader.load(
//         modelUrl,
//         (object) => {
//           object.rotation.x = -Math.PI / 2;
//           scene.add(object);
//           fitCameraToModel(object); // Adjust camera to fit the model
//           animate();
//         },
//         (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
//         (error) => console.error('An error happened', error)
//       );
//     };

//     loadModel();

//     // Function to fit the camera to the model
//     const fitCameraToModel = (model) => {
//       const box = new THREE.Box3().setFromObject(model);
//       const size = box.getSize(new THREE.Vector3()).length();
//       const center = box.getCenter(new THREE.Vector3());

//       camera.near = size / 100;
//       camera.far = size * 100;
//       camera.updateProjectionMatrix();

//       camera.position.copy(center).add(new THREE.Vector3(0, 0, size));
//       camera.lookAt(center);
//       controls.update();
//     };

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };

//     // Handle window resize
//     const handleResize = () => {
//       const width = container.clientWidth;
//       const height = container.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//       container.removeChild(renderer.domElement);
//     };
//   }, [modelUrl]);

//   return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
// };

// export default ThreeDModelLoader;

// 'use client'
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const ThreeDModelLoader = ({ modelUrl }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     // Set up the scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xffffff); // White background

//     // Set up the camera
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 5);

//     // Set up the renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(width, height);
//     renderer.outputEncoding = THREE.sRGBEncoding; // Ensure correct color space
//     container.appendChild(renderer.domElement);

//     // Add ambient light
//     const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft white light
//     scene.add(ambientLight);

//     // Add directional light for primary illumination
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Brighter white light
//     directionalLight.position.set(5, 10, 5).normalize();
//     scene.add(directionalLight);

//     // Add a spotlight to enhance reflections
//     const spotlight = new THREE.SpotLight(0xffffff, 1.5);
//     spotlight.position.set(0, 5, 10);
//     spotlight.angle = Math.PI / 6; // Narrow spotlight angle
//     spotlight.penumbra = 0.1; // Soft edges
//     spotlight.decay = 2;
//     spotlight.distance = 50;
//     scene.add(spotlight);

//     // Add orbit controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true;

//     // Instantiate the loader
//     const loader = new Rhino3dmLoader();
//     loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/');

//     // Load the .3dm file
//     loader.load(
//       modelUrl,
//       (object) => {
//         object.rotation.x = -Math.PI / 2; // Adjust orientation if needed
//         scene.add(object);
//         fitCameraToModel(object); // Adjust camera to fit the model
//         animate();
//       },
//       (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
//       (error) => console.error('An error happened', error)
//     );

//     // Function to fit the camera to the model
//     const fitCameraToModel = (model) => {
//       const box = new THREE.Box3().setFromObject(model);
//       const size = box.getSize(new THREE.Vector3()).length();
//       const center = box.getCenter(new THREE.Vector3());

//       camera.near = size / 100;
//       camera.far = size * 100;
//       camera.updateProjectionMatrix();

//       camera.position.copy(center).add(new THREE.Vector3(0, 0, size * 1.5));
//       camera.lookAt(center);
//       controls.update();
//     };

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };

//     // Handle window resize
//     const handleResize = () => {
//       const width = container.clientWidth;
//       const height = container.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//       container.removeChild(renderer.domElement);
//     };
//   }, [modelUrl]);

//   return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
// };

// export default ThreeDModelLoader;

// 'use client'
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// // Define the props type
// interface ThreeDModelLoaderProps {
//   modelUrl: string;
// }

// const ThreeDModelLoader: React.FC<ThreeDModelLoaderProps> = ({ modelUrl }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return; // Ensure container is not null

//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     // Set up the scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xffffff); // White background

//     // Set up the camera
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 5);

//     // Set up the renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(width, height);
//     // Removed renderer.outputEncoding because it might not be available in your version
//     renderer.toneMapping = THREE.ACESFilmicToneMapping; // High dynamic range rendering
//     renderer.toneMappingExposure = 1.5; // Adjust exposure to enhance brightness
//     container.appendChild(renderer.domElement);

//     // Add ambient light
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Lower intensity to avoid overpowering
//     scene.add(ambientLight);

//     // Add directional lights
//     const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2.5); // Brighter light
//     directionalLight1.position.set(5, 10, 5).normalize();
//     scene.add(directionalLight1);

//     const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2.5); // Additional light for balance
//     directionalLight2.position.set(-5, -10, -5).normalize();
//     scene.add(directionalLight2);

//     // Add a spotlight to enhance reflections
//     const spotlight = new THREE.SpotLight(0xffffff, 2.5);
//     spotlight.position.set(0, 5, 10);
//     spotlight.angle = Math.PI / 6; // Narrow spotlight angle
//     spotlight.penumbra = 0.2; // Softer edges
//     spotlight.decay = 2;
//     spotlight.distance = 50;
//     scene.add(spotlight);

//     // Add orbit controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true;

//     // Instantiate the loader
//     const loader = new Rhino3dmLoader();
//     loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/');

//     // Load the .3dm file
//     loader.load(
//       modelUrl,
//       (object) => {
//         object.rotation.x = -Math.PI / 2; // Adjust orientation if needed
//         scene.add(object);
//         fitCameraToModel(object); // Adjust camera to fit the model
//         animate();
//       },
//       (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
//       (error) => console.error('An error happened', error)
//     );

//     // Function to fit the camera to the model
//     const fitCameraToModel = (model: THREE.Object3D) => {
//       const box = new THREE.Box3().setFromObject(model);
//       const size = box.getSize(new THREE.Vector3()).length();
//       const center = box.getCenter(new THREE.Vector3());

//       camera.near = size / 100;
//       camera.far = size * 100;
//       camera.updateProjectionMatrix();

//       camera.position.copy(center).add(new THREE.Vector3(0, 0, size * 1.5));
//       camera.lookAt(center);
//       controls.update();
//     };

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };

//     // Handle window resize
//     const handleResize = () => {
//       if (container) {
//         const width = container.clientWidth;
//         const height = container.clientHeight;
//         renderer.setSize(width, height);
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//       if (container) {
//         container.removeChild(renderer.domElement);
//       }
//     };
//   }, [modelUrl]);

//   return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
// };

// export default ThreeDModelLoader;

'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Define the props type
interface ThreeDModelLoaderProps {
  modelUrl: string;
}

const ThreeDModelLoader: React.FC<ThreeDModelLoaderProps> = ({ modelUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // Ensure container is not null

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Set up the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // White background

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    // Removed renderer.outputEncoding because it might not be available in your version
    renderer.toneMapping = THREE.ACESFilmicToneMapping; // High dynamic range rendering
    renderer.toneMappingExposure = 1.5; // Adjust exposure to enhance brightness
    container.appendChild(renderer.domElement);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Lower intensity to avoid overpowering
    scene.add(ambientLight);

    // Add directional lights
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2.5); // Brighter light
    directionalLight1.position.set(5, 10, 5).normalize();
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2.5); // Additional light for balance
    directionalLight2.position.set(-5, -10, -5).normalize();
    scene.add(directionalLight2);

    // Add a spotlight to enhance reflections
    const spotlight = new THREE.SpotLight(0xffffff, 2.5);
    spotlight.position.set(0, 5, 10);
    spotlight.angle = Math.PI / 6; // Narrow spotlight angle
    spotlight.penumbra = 0.2; // Softer edges
    spotlight.decay = 2;
    spotlight.distance = 50;
    scene.add(spotlight);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Instantiate the loader
    const loader = new Rhino3dmLoader();
    loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/');

    // Load the .3dm file
    loader.load(
      modelUrl,
      (object) => {
        object.rotation.x = -Math.PI / 2; // Adjust orientation if needed
        scene.add(object);
        fitCameraToModel(object); // Adjust camera to fit the model
        animate();
      },
      (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
      (error) => console.error('An error happened', error)
    );

    // Function to fit the camera to the model
    const fitCameraToModel = (model: THREE.Object3D) => {
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());

      camera.near = size / 100;
      camera.far = size * 100;
      camera.updateProjectionMatrix();

      camera.position.copy(center).add(new THREE.Vector3(0, 0, size * 1.5));
      camera.lookAt(center);
      controls.update();
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      if (container) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl]);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeDModelLoader;
