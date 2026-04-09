"use client"

import { useRef, useMemo, useState, useCallback } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { RoundedBox, Environment, useTexture } from "@react-three/drei"
import * as THREE from "three"

const CUBE_SIZE = 0.95
const GAP = 0.05
const TOTAL_SIZE = CUBE_SIZE + GAP

// Single metallic blue color
const FACE_COLOR = "#0049DB"

// Animation types for slice rotations
type Axis = "x" | "y" | "z"
type SliceAnimation = {
  axis: Axis
  layer: number
  direction: 1 | -1
  progress: number
}

interface CubieFaceProps {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
}

function CubieFace({ position, rotation, color }: CubieFaceProps) {
  // Create a subtle brushed metal texture procedurally
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[0.82, 0.82]} />
      <meshStandardMaterial
        ref={materialRef}
        color={color}
        roughness={0.25}
        metalness={0.9}
        envMapIntensity={1.2}
      />
    </mesh>
  )
}

interface CubieProps {
  position: [number, number, number]
  index: { x: number; y: number; z: number }
  animatedRotation?: THREE.Euler
}

function Cubie({ position, index, animatedRotation }: CubieProps) {
  const faces: {
    position: [number, number, number]
    rotation: [number, number, number]
    color: string
  }[] = []

  // Only add faces that are on the outside of the cube
  if (index.z === 1) {
    faces.push({
      position: [0, 0, 0.48],
      rotation: [0, 0, 0],
      color: FACE_COLOR,
    })
  }
  if (index.z === -1) {
    faces.push({
      position: [0, 0, -0.48],
      rotation: [0, Math.PI, 0],
      color: FACE_COLOR,
    })
  }
  if (index.y === 1) {
    faces.push({
      position: [0, 0.48, 0],
      rotation: [-Math.PI / 2, 0, 0],
      color: FACE_COLOR,
    })
  }
  if (index.y === -1) {
    faces.push({
      position: [0, -0.48, 0],
      rotation: [Math.PI / 2, 0, 0],
      color: FACE_COLOR,
    })
  }
  if (index.x === 1) {
    faces.push({
      position: [0.48, 0, 0],
      rotation: [0, Math.PI / 2, 0],
      color: FACE_COLOR,
    })
  }
  if (index.x === -1) {
    faces.push({
      position: [-0.48, 0, 0],
      rotation: [0, -Math.PI / 2, 0],
      color: FACE_COLOR,
    })
  }

  return (
    <group position={position} rotation={animatedRotation}>
      {/* Black base cube with subtle sheen */}
      <RoundedBox
        args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]}
        radius={0.06}
        smoothness={4}
      >
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.4}
          metalness={0.3}
          envMapIntensity={0.5}
        />
      </RoundedBox>

      {/* Colored faces */}
      {faces.map((face, i) => (
        <CubieFace key={i} {...face} />
      ))}
    </group>
  )
}

interface RubiksCubeGroupProps {
  isDragging: boolean
  dragDelta: { x: number; y: number }
  onDragEnd: () => void
}

function RubiksCubeGroup({
  isDragging,
  dragDelta,
  onDragEnd,
}: RubiksCubeGroupProps) {
  const groupRef = useRef<THREE.Group>(null)
  const baseRotation = useRef({ x: 0.5, y: 0 })
  const autoRotateSpeed = useRef(0.15)

  // Slice animation state
  const [sliceAnimation, setSliceAnimation] = useState<SliceAnimation | null>(
    null
  )
  const sliceTimeout = useRef<NodeJS.Timeout | null>(null)

  // Generate all 26 outer cubies
  const cubies = useMemo(() => {
    const positions: {
      position: [number, number, number]
      index: { x: number; y: number; z: number }
    }[] = []

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // Skip the center cube (not visible)
          if (x === 0 && y === 0 && z === 0) continue

          positions.push({
            position: [x * TOTAL_SIZE, y * TOTAL_SIZE, z * TOTAL_SIZE],
            index: { x, y, z },
          })
        }
      }
    }

    return positions
  }, [])

  // Trigger random slice animation periodically
  const triggerSliceAnimation = useCallback(() => {
    if (sliceAnimation) return

    const axes: Axis[] = ["x", "y", "z"]
    const axis = axes[Math.floor(Math.random() * axes.length)] as Axis
    const layer = Math.floor(Math.random() * 3) - 1 // -1, 0, or 1
    const direction = Math.random() > 0.5 ? 1 : -1

    setSliceAnimation({
      axis: axis,
      layer,
      direction,
      progress: 0,
    })
  }, [sliceAnimation])

  useFrame((state, delta) => {
    if (!groupRef.current) return

    const time = state.clock.elapsedTime

    if (isDragging) {
      // Apply drag rotation
      baseRotation.current.x += dragDelta.y * 0.01
      baseRotation.current.y += dragDelta.x * 0.01
      autoRotateSpeed.current = 0.15
    } else {
      // Smooth auto-rotation when not dragging
      baseRotation.current.y += delta * autoRotateSpeed.current
    }

    // Apply base rotation with smooth interpolation
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      baseRotation.current.x + Math.sin(time * 0.3) * 0.1,
      0.1
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      baseRotation.current.y,
      0.1
    )

    // Subtle floating effect
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.08

    // Update slice animation
    if (sliceAnimation) {
      const newProgress = sliceAnimation.progress + delta * 2.5
      if (newProgress >= 1) {
        setSliceAnimation(null)
      } else {
        setSliceAnimation({ ...sliceAnimation, progress: newProgress })
      }
    }

    // Trigger new slice animation periodically
    if (!sliceAnimation && !sliceTimeout.current) {
      sliceTimeout.current = setTimeout(
        () => {
          triggerSliceAnimation()
          sliceTimeout.current = null
        },
        2000 + Math.random() * 2000
      )
    }
  })

  // Calculate animated rotation for cubies in the animated slice
  const getAnimatedRotation = (index: {
    x: number
    y: number
    z: number
  }): THREE.Euler | undefined => {
    if (!sliceAnimation) return undefined

    const { axis, layer, direction, progress } = sliceAnimation

    // Check if this cubie is in the animated slice
    if (index[axis] !== layer) return undefined

    // Smooth easing
    const eased = 1 - Math.pow(1 - progress, 3)
    const angle = eased * (Math.PI / 2) * direction

    const euler = new THREE.Euler()
    if (axis === "x") euler.x = angle
    if (axis === "y") euler.y = angle
    if (axis === "z") euler.z = angle

    return euler
  }

  return (
    <group ref={groupRef} scale={0.9}>
      {cubies.map((cubie, i) => {
        const animatedRotation = getAnimatedRotation(cubie.index)

        if (animatedRotation) {
          // Wrap animated cubies in a pivot group for slice rotation
          const pivotPosition: [number, number, number] = [0, 0, 0]
          return (
            <group key={i} rotation={animatedRotation}>
              <Cubie {...cubie} />
            </group>
          )
        }

        return <Cubie key={i} {...cubie} />
      })}
    </group>
  )
}

// Interactive controls component
function DragControls({
  onDragStart,
  onDrag,
  onDragEnd,
}: {
  onDragStart: () => void
  onDrag: (delta: { x: number; y: number }) => void
  onDragEnd: () => void
}) {
  const { gl } = useThree()
  const lastPos = useRef<{ x: number; y: number } | null>(null)

  const handlePointerDown = useCallback(
    (e: PointerEvent) => {
      lastPos.current = { x: e.clientX, y: e.clientY }
      onDragStart()
      gl.domElement.setPointerCapture(e.pointerId)
    },
    [gl.domElement, onDragStart]
  )

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!lastPos.current) return

      const delta = {
        x: e.clientX - lastPos.current.x,
        y: e.clientY - lastPos.current.y,
      }
      lastPos.current = { x: e.clientX, y: e.clientY }
      onDrag(delta)
    },
    [onDrag]
  )

  const handlePointerUp = useCallback(
    (e: PointerEvent) => {
      lastPos.current = null
      onDragEnd()
      gl.domElement.releasePointerCapture(e.pointerId)
    },
    [gl.domElement, onDragEnd]
  )

  // Attach event listeners
  useState(() => {
    const canvas = gl.domElement
    canvas.addEventListener("pointerdown", handlePointerDown)
    canvas.addEventListener("pointermove", handlePointerMove)
    canvas.addEventListener("pointerup", handlePointerUp)
    canvas.addEventListener("pointerleave", handlePointerUp)

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown)
      canvas.removeEventListener("pointermove", handlePointerMove)
      canvas.removeEventListener("pointerup", handlePointerUp)
      canvas.removeEventListener("pointerleave", handlePointerUp)
    }
  })

  return null
}

interface RubiksCubeProps {
  className?: string
}

export function RubiksCube({ className = "" }: RubiksCubeProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0 })

  return (
    <div
      className={`h-full w-full ${className}`}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <Canvas
        camera={{ position: [4.5, 3.5, 4.5], fov: 35 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        {/* Main key light - warm */}
        <directionalLight position={[8, 10, 5]} intensity={2} color="#ffffff" />

        {/* Fill light - cool blue tint */}
        <directionalLight
          position={[-6, 4, -4]}
          intensity={0.8}
          color="#a0c4ff"
        />

        {/* Rim light - adds edge definition */}
        <directionalLight
          position={[0, -5, 8]}
          intensity={0.6}
          color="#ffffff"
        />

        {/* Top accent light */}
        <pointLight
          position={[0, 8, 0]}
          intensity={0.5}
          color="#0049db"
          distance={15}
        />

        {/* Ambient fill */}
        <ambientLight intensity={0.3} />

        <RubiksCubeGroup
          isDragging={isDragging}
          dragDelta={dragDelta}
          onDragEnd={() => setDragDelta({ x: 0, y: 0 })}
        />

        <DragControls
          onDragStart={() => setIsDragging(true)}
          onDrag={(delta) => setDragDelta(delta)}
          onDragEnd={() => {
            setIsDragging(false)
            setDragDelta({ x: 0, y: 0 })
          }}
        />

        {/* Studio environment for nice reflections */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}
