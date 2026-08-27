import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CUBE_SIZE = 360;
const SMALL_CUBE_SIZE = CUBE_SIZE / 3;
const GAP = 4;

interface GridPosition {
  x: number;
  y: number;
  z: number;
}

type SmallCube = THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial> & {
  userData: {
    originalPos: THREE.Vector3;
    gridPos: GridPosition;
  };
};

export default function AnimatedRubik() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      1,
      0.1,
      2000,
    );
    camera.position.set(600, 600, 600);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const resizeRenderer = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (width === 0 || height === 0) {
        return;
      }

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    resizeRenderer();
    const resizeObserver = new ResizeObserver(resizeRenderer);
    resizeObserver.observe(container);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(500, 500, 500);
    scene.add(directionalLight);

    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    const smallCubes: SmallCube[] = [];
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    let isExploded = false;
    let explosionProgress = 0;
    let isHovering = false;
    let animationFrameId = 0;

    const rotationSpeed = { x: 0.001, y: 0.0015, z: 0.0008 };
    const targetSpeed = { x: 0.001, y: 0.0015, z: 0.0008 };

    const createSmallCube = (x: number, y: number, z: number) => {
      const size = SMALL_CUBE_SIZE - GAP * 2;
      const geometry = new THREE.BoxGeometry(size, size, size);
      geometries.push(geometry);

      const faceMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
      });
      materials.push(faceMaterial);

      const cube = new THREE.Mesh(geometry, faceMaterial) as SmallCube;

      const edgeGeometry = new THREE.EdgesGeometry(geometry);
      geometries.push(edgeGeometry);

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x0c1083,
        linewidth: 1,
      });
      materials.push(lineMaterial);

      const wireframe = new THREE.LineSegments(edgeGeometry, lineMaterial);
      cube.add(wireframe);

      const offset = SMALL_CUBE_SIZE;
      cube.position.set((x - 1) * offset, (y - 1) * offset, (z - 1) * offset);

      cube.userData.originalPos = cube.position.clone();
      cube.userData.gridPos = { x, y, z };

      cubeGroup.add(cube);
      smallCubes.push(cube);
    };

    for (let x = 0; x < 3; x += 1) {
      for (let y = 0; y < 3; y += 1) {
        for (let z = 0; z < 3; z += 1) {
          if (x === 1 && y === 1 && z === 1) {
            continue;
          }

          createSmallCube(x, y, z);
        }
      }
    }

    const randomizeRotation = () => {
      targetSpeed.x = (Math.random() - 0.5) * 0.003;
      targetSpeed.y = (Math.random() - 0.5) * 0.003;
      targetSpeed.z = (Math.random() - 0.5) * 0.003;
    };

    randomizeRotation();
    const rotationIntervalId = window.setInterval(randomizeRotation, 5000);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      const bounds = renderer.domElement.getBoundingClientRect();

      mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(smallCubes);
      isHovering = intersects.length > 0;
    };

    const onClick = () => {
      if (!isExploded) {
        isExploded = true;
        explosionProgress = 0;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);

    const animate = () => {
      animationFrameId = window.requestAnimationFrame(animate);

      const speedMultiplier = isHovering ? 0.5 : 1;
      rotationSpeed.x +=
        (targetSpeed.x * speedMultiplier - rotationSpeed.x) * 0.05;
      rotationSpeed.y +=
        (targetSpeed.y * speedMultiplier - rotationSpeed.y) * 0.05;
      rotationSpeed.z +=
        (targetSpeed.z * speedMultiplier - rotationSpeed.z) * 0.05;

      cubeGroup.rotation.x += rotationSpeed.x;
      cubeGroup.rotation.y += rotationSpeed.y;
      cubeGroup.rotation.z += rotationSpeed.z;

      if (isExploded) {
        explosionProgress += 0.008;

        if (explosionProgress >= 2) {
          isExploded = false;
          explosionProgress = 0;
        }

        smallCubes.forEach((cube) => {
          const original = cube.userData.originalPos;
          const grid = cube.userData.gridPos;
          const explodeDir = new THREE.Vector3(
            grid.x - 1,
            grid.y - 1,
            grid.z - 1,
          );

          let t: number;

          if (explosionProgress < 1) {
            t = explosionProgress;
            t = t * t * t * (t * (t * 6 - 15) + 10);
          } else {
            t = 2 - explosionProgress;
            t = t * t * t * (t * (t * 6 - 15) + 10);
          }

          const explodeAmount = 60;
          cube.position.x = original.x + explodeDir.x * explodeAmount * t;
          cube.position.y = original.y + explodeDir.y * explodeAmount * t;
          cube.position.z = original.z + explodeDir.z * explodeAmount * t;

          cube.rotation.x = t * Math.PI * 0.5 * explodeDir.x * 0.3;
          cube.rotation.y = t * Math.PI * 0.5 * explodeDir.y * 0.3;
          cube.rotation.z = t * Math.PI * 0.5 * explodeDir.z * 0.3;
        });
      } else {
        smallCubes.forEach((cube) => {
          const original = cube.userData.originalPos;
          cube.position.lerp(original, 0.15);
          cube.rotation.x *= 0.85;
          cube.rotation.y *= 0.85;
          cube.rotation.z *= 0.85;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.clearInterval(rotationIntervalId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);

      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: '-18%',
        right: '-21%',
        bottom: '-18%',
        left: '-21%',
        width: 'auto',
        height: 'auto',
        overflow: 'visible',
        background: 'transparent',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}
