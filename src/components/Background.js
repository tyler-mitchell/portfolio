import lerp from "lerp";
import React, { Suspense, useEffect, useRef } from "react";
import { useFrame, useLoader, useThree } from "react-three-fiber";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { VerticalBlurShader } from "three/examples/jsm/shaders/VerticalBlurShader";

import shadowImg from "../resources/shadow.jpg";
import { api, useStore } from "./store";

function useWobble(factor = 1, fn = "sin", cb) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = Math[fn](t) * factor;
    if (cb) cb(t, ref.current);
  });
  return ref;
}

function Dots(props) {
  const object = new THREE.Object3D();
  const ref = useWobble(0.1, "cos");
  const instanced = useRef();

  useEffect(() => {
    let id = 0;
    for (let x = 0; x < 5; x++)
      for (let y = 0; y < 5; y++) {
        object.position.set(2.5 - x, 2.5 - y, 0);
        object.updateMatrix();
        instanced.current.setMatrixAt(id++, object.matrix);
      }
    instanced.current.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame(() => (instanced.current.rotation.z -= 0.001));

  return (
    <group ref={ref}>
      <instancedMesh ref={instanced} args={[null, null, 25]} {...props}>
        <circleBufferGeometry attach="geometry" args={[0.08, 16]} />
        <meshBasicMaterial
          attach="material"
          color="#FFDCDC"
          toneMapped={false}
        />
      </instancedMesh>
    </group>
  );
}

function Part2(props) {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, "/box.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  useFrame((state, delta) => {
    const t = (Math.sin(state.clock.getElapsedTime()) + 1) / 2;
    group.current.position.y = t / 2;
    group.current.rotation.y += 0.005;
  });
  return (
    <group {...props} dispose={null}>
      <group ref={group} rotation-x={0.9}>
        <mesh geometry={nodes.Cylinder.geometry}>
          <meshStandardMaterial
            attach="material"
            color="#FFDCDC"
            roughness={0.5}
            metalness={0}
          />
        </mesh>
      </group>
    </group>
  );
}

function Shadow(props) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, shadowImg);
  useFrame((state) => {
    const t = (Math.sin(state.clock.getElapsedTime()) + 1) / 2;
    ref.current.position.x = -t / 3;
    ref.current.rotation.x = -t / 6;
    ref.current.material.uniforms.v.value = t / 80;
    ref.current.scale.x = 1 + t / 1.5;
    ref.current.scale.y = 1 + t / 2;
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" />
        <shaderMaterial
          attach="material"
          args={[VerticalBlurShader]}
          uniforms-tDiffuse-value={texture}
        />
      </mesh>
    </group>
  );
}

function Part(props) {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, "/headless.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  useFrame((state, delta) => {
    const t = (Math.sin(state.clock.getElapsedTime()) + 1) / 2;
    group.current.position.y = t / 2;
  });
  return (
    <group {...props} dispose={null}>
      <group ref={group}>
        <mesh
          geometry={nodes.Cube.geometry}
          position={[0.25, 0, 0]}
          scale={[0.6, 0.6, 0.6]}
          rotation={[-0.6, -0.2, -0.7]}
        >
          <meshStandardMaterial
            attach="material"
            color="#DCECF0"
            roughness={0.5}
            metalness={0}
          />
        </mesh>
      </group>
      <Shadow
        scale={[3.4, 3.4, 1]}
        rotation={[-Math.PI / 1.8, 0, -0.5]}
        position={[-1, -0.8, 0.5]}
      />
    </group>
  );
}

function Ring(props) {
  return (
    <mesh {...props}>
      <ringBufferGeometry attach="geometry" args={[1, 1.4, 64]} />
      <meshBasicMaterial
        attach="material"
        color="#FFF9BE"
        transparent
        opacity={1}
        toneMapped={false}
      />
    </mesh>
  );
}

function Cross(props) {
  const inner = useRef();
  const ref = useWobble(0.1, "sin", () => (inner.current.rotation.z += 0.001));
  return (
    <group ref={ref}>
      <group ref={inner} {...props}>
        <mesh>
          <planeBufferGeometry attach="geometry" args={[2, 0.5]} />
          <meshBasicMaterial
            attach="material"
            color="#FFEDDD"
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0, -0.625, 0]}>
          <planeBufferGeometry attach="geometry" args={[0.5, 0.75]} />
          <meshBasicMaterial
            attach="material"
            color="#FFEDDD"
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0, 0.625, 0]}>
          <planeBufferGeometry attach="geometry" args={[0.5, 0.75]} />
          <meshBasicMaterial
            attach="material"
            color="#FFEDDD"
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

function Minus(props) {
  const ref = useWobble(0.1, "sin");
  return (
    <group ref={ref}>
      <group {...props}>
        <mesh>
          <planeBufferGeometry attach="geometry" args={[2, 0.7]} />
          <meshBasicMaterial
            attach="material"
            color="#DEF5FF"
            toneMapped={false}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight
        position={[7, -5, 10]}
        intensity={1}
        angle={0.3}
        penumbra={1}
      />
      <pointLight position={[1, -1, -5]} intensity={0.5} />
    </>
  );
}

export function Home() {
  const {
    viewport: { width, height },
  } = useThree();
  const crossSize = 0.7;
  return (
    <>
      <Cross
        position={[-width / 2.5, height / 8, -1]}
        scale={[crossSize, crossSize, 1]}
        rotation={[0, 0, Math.PI / 4]}
      />
      <Minus
        position={[width / 3, -height / 3.5, -2]}
        scale={[0.8, 0.8, 0.8]}
        rotation={[0, 0, Math.PI / 10]}
      />
      <Dots position={[-3, 1.5, -5]} scale={[0.7, 0.7, 0.7]} />
      <Suspense fallback={null}>
        <group
          rotation={[Math.PI / 8, 0, 0]}
          position={[-width / 4, -height / 6, 0]}
        >
          <Part scale={[0.8, 0.8, 0.8]} />
          <Part2
            position={[width / 1.7, height / 4, -3]}
            scale={[0.5, 0.5, 0.5]}
          />
          <Lights />
        </group>
      </Suspense>
    </>
  );
}

export function End() {
  const {
    viewport: { width, height },
  } = useThree();
  const crossSize = 0.7;
  const ringSize = Math.max(3, width / 2);
  return (
    <>
      <Cross
        position={[-width / 2.5, -height / 4, -1]}
        scale={[crossSize, crossSize, 1]}
        rotation={[0, 0, Math.PI / 4]}
      />
      <Minus
        position={[width / 3, height / 3, -2]}
        scale={[0.8, 0.8, 0.8]}
        rotation={[0, 0, Math.PI / 10]}
      />
      <Dots position={[2, -2, -3]} scale={[0.7, 0.7, 0.7]} />
      <Ring
        position={[width * 0.8, -height, -5]}
        scale={[ringSize, ringSize, 1]}
      />
    </>
  );
}

export function Anchor({ children, name }) {
  let { size, viewport } = useThree();
  let aspect = viewport.height / size.height;
  const group = useRef();
  const pos = useRef([0, 0]);
  useEffect(
    () =>
      api.subscribe(
        (xy) => (pos.current = xy),
        (state) => state.anchors[name]
      ),
    []
  );
  useFrame(() => {
    //console.log(name, pos.current)
    group.current.position.x = -viewport.width / 2 + pos.current[0] * aspect;
    group.current.position.y = viewport.height / 2 + -pos.current[1] * aspect;
  });
  return <group ref={group}>{children}</group>;
}

function getOffset(container, el, name) {
  let offset = el["offset" + name];
  let parent = el.offsetParent;
  while (parent !== container) {
    offset += parent["offset" + name];
    parent = parent.offsetParent;
  }
  return offset;
}

export function Scroll({ children, dom }) {
  let group = useRef();
  let { size, viewport } = useThree();
  let aspect = viewport.height / size.height;

  const set = useStore((state) => state.set);
  const y = useRef(0);
  const top = useRef(0);
  useEffect(
    () =>
      api.subscribe(
        (pos) => (top.current = pos),
        (state) => state.top
      ),
    []
  );
  useEffect(() => {
    const fn = () => {
      const anchors = Array.from(document.querySelectorAll("[id^='r3f-']"));
      y.current = top.current;
      set({
        height: window.innerWidth,
        contentHeight: dom.current.clientHeight,
        anchors: anchors.reduce((acc, item) => {
          return {
            ...acc,
            [item.id.substr(4)]: [
              getOffset(dom.current, item, "Left"),
              getOffset(dom.current, item, "Top"),
            ],
          };
        }, {}),
      });
    };
    window.addEventListener("resize", fn);
    fn();
    return () => window.removeEventListener("resize", fn);
  }, []);

  useFrame(() => {
    //if (Math.abs(y - top.current) > 0.001) {
    y.current = lerp(y.current, top.current, 0.1);
    dom.current.style.transform = `translate3d(0,${-y.current}px,0)`;
    group.current.position.y = y.current * aspect;
    //}
  });
  return <group ref={group}>{children}</group>;
}

function Spacer() {
  const contentHeight = useStore((state) => state.contentHeight);
  return <div style={{ height: contentHeight }} />;
}
