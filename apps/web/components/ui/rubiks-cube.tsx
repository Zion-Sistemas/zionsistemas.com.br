"use client"

import { useRef, useMemo, useState, useCallback } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { RoundedBox, Environment } from "@react-three/drei"
import * as THREE from "three"

// ─── Constants ────────────────────────────────────────────────────────────────
const CUBE_SIZE = 0.88
const GAP = 0.12
const TOTAL_SIZE = CUBE_SIZE + GAP
const FACE_SIZE = 0.76
const FACE_INSET = 0.47 // clear of box surface (box half = 0.44) to prevent Z-fighting

// ─── Types ────────────────────────────────────────────────────────────────────
type Axis = "x" | "y" | "z"
type SliceAnim = {
  axis: Axis
  layer: number
  direction: 1 | -1
  progress: number
}

// ─── Easing ───────────────────────────────────────────────────────────────────
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// ─── Procedural textures ──────────────────────────────────────────────────────
function makeCarbonTexture(): THREE.CanvasTexture {
  const S = 256
  const canvas = document.createElement("canvas")
  canvas.width = canvas.height = S
  const ctx = canvas.getContext("2d")!

  ctx.fillStyle = "#080808"
  ctx.fillRect(0, 0, S, S)

  const fw = 8,
    fh = 8
  for (let row = 0; row < Math.ceil(S / fh); row++) {
    for (let col = 0; col < Math.ceil(S / fw); col++) {
      const x = col * fw,
        y = row * fh
      const even = (row + col) % 2 === 0
      const g = even
        ? ctx.createLinearGradient(x, y, x + fw, y + fh)
        : ctx.createLinearGradient(x + fw, y, x, y + fh)

      if (even) {
        g.addColorStop(0, "#0e0e0e")
        g.addColorStop(0.38, "#242424")
        g.addColorStop(0.62, "#1e1e1e")
        g.addColorStop(1, "#080808")
      } else {
        g.addColorStop(0, "#080808")
        g.addColorStop(0.38, "#1a1a1a")
        g.addColorStop(0.62, "#161616")
        g.addColorStop(1, "#050505")
      }
      ctx.fillStyle = g
      ctx.fillRect(x, y, fw, fh)
    }
  }

  ctx.strokeStyle = "#030303"
  ctx.lineWidth = 0.5
  for (let i = 0; i <= S; i += fw) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, S)
    ctx.stroke()
  }
  for (let i = 0; i <= S; i += fh) {
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(S, i)
    ctx.stroke()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(3, 3)
  return tex
}

function makeFaceTexture(): THREE.CanvasTexture {
  const S = 256
  const canvas = document.createElement("canvas")
  canvas.width = canvas.height = S
  const ctx = canvas.getContext("2d")!

  ctx.fillStyle = "#002fa8"
  ctx.fillRect(0, 0, S, S)

  const fw = 8,
    fh = 8
  for (let row = 0; row < Math.ceil(S / fh); row++) {
    for (let col = 0; col < Math.ceil(S / fw); col++) {
      const x = col * fw,
        y = row * fh
      const even = (row + col) % 2 === 0
      const g = even
        ? ctx.createLinearGradient(x, y, x + fw, y + fh)
        : ctx.createLinearGradient(x + fw, y, x, y + fh)

      if (even) {
        g.addColorStop(0, "#003acc")
        g.addColorStop(0.38, "#0057ff")
        g.addColorStop(0.62, "#004de8")
        g.addColorStop(1, "#0028a0")
      } else {
        g.addColorStop(0, "#001e80")
        g.addColorStop(0.38, "#0040cc")
        g.addColorStop(0.62, "#0038b8")
        g.addColorStop(1, "#001460")
      }
      ctx.fillStyle = g
      ctx.fillRect(x, y, fw, fh)
    }
  }

  ctx.strokeStyle = "#001060"
  ctx.lineWidth = 0.5
  for (let i = 0; i <= S; i += fw) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, S)
    ctx.stroke()
  }
  for (let i = 0; i <= S; i += fh) {
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(S, i)
    ctx.stroke()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(4, 4)
  return tex
}

// ─── Cubie materials (shared via context) ─────────────────────────────────────
function useCubieMaterials() {
  return useMemo(() => {
    const carbonTex = makeCarbonTexture()
    const faceTex = makeFaceTexture()
    return { carbonTex, faceTex }
  }, [])
}

// ─── Face sticker ─────────────────────────────────────────────────────────────
interface FaceProps {
  position: [number, number, number]
  rotation: [number, number, number]
  faceTexture: THREE.CanvasTexture
}

function Face({ position, rotation, faceTexture }: FaceProps) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[FACE_SIZE, FACE_SIZE]} />
      <meshStandardMaterial
        map={faceTexture}
        roughness={0.12}
        metalness={0.85}
        envMapIntensity={1.4}
        polygonOffset
        polygonOffsetFactor={-2}
        polygonOffsetUnits={-2}
      />
    </mesh>
  )
}

// ─── Single cubie ─────────────────────────────────────────────────────────────
interface CubieProps {
  position: [number, number, number]
  index: { x: number; y: number; z: number }
  carbonTexture: THREE.CanvasTexture
  faceTexture: THREE.CanvasTexture
}

function Cubie({ position, index, carbonTexture, faceTexture }: CubieProps) {
  const faces: {
    position: [number, number, number]
    rotation: [number, number, number]
  }[] = []

  if (index.z === 1)
    faces.push({ position: [0, 0, FACE_INSET], rotation: [0, 0, 0] })
  if (index.z === -1)
    faces.push({ position: [0, 0, -FACE_INSET], rotation: [0, Math.PI, 0] })
  if (index.y === 1)
    faces.push({ position: [0, FACE_INSET, 0], rotation: [-Math.PI / 2, 0, 0] })
  if (index.y === -1)
    faces.push({ position: [0, -FACE_INSET, 0], rotation: [Math.PI / 2, 0, 0] })
  if (index.x === 1)
    faces.push({ position: [FACE_INSET, 0, 0], rotation: [0, Math.PI / 2, 0] })
  if (index.x === -1)
    faces.push({
      position: [-FACE_INSET, 0, 0],
      rotation: [0, -Math.PI / 2, 0],
    })

  return (
    <group position={position}>
      <RoundedBox
        args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]}
        radius={0.055}
        smoothness={4}
      >
        <meshStandardMaterial
          map={carbonTexture}
          color="#131313"
          roughness={0.18}
          metalness={0.92}
          envMapIntensity={1.8}
        />
      </RoundedBox>
      {faces.map((f, i) => (
        <Face key={i} {...f} faceTexture={faceTexture} />
      ))}
    </group>
  )
}

// ─── Cube group (rotation + slice animation) ──────────────────────────────────
interface CubeGroupProps {
  isDragging: boolean
  dragDelta: { x: number; y: number }
}

function CubeGroup({ isDragging, dragDelta }: CubeGroupProps) {
  const groupRef = useRef<THREE.Group>(null)
  const baseRot = useRef({ x: 0.55, y: 0.3 })
  const { carbonTex: carbonTexture, faceTex: faceTexture } = useCubieMaterials()

  const [slice, setSlice] = useState<SliceAnim | null>(null)
  const sliceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cubies = useMemo(() => {
    const out: {
      position: [number, number, number]
      index: { x: number; y: number; z: number }
    }[] = []
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++)
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue
          out.push({
            position: [x * TOTAL_SIZE, y * TOTAL_SIZE, z * TOTAL_SIZE],
            index: { x, y, z },
          })
        }
    return out
  }, [])

  const scheduleSlice = useCallback(() => {
    if (sliceTimer.current) return
    sliceTimer.current = setTimeout(
      () => {
        sliceTimer.current = null
        const axes: Axis[] = ["x", "y", "z"]
        setSlice({
          axis: axes[Math.floor(Math.random() * 3)] as Axis,
          layer: Math.floor(Math.random() * 3) - 1,
          direction: Math.random() > 0.5 ? 1 : -1,
          progress: 0,
        })
      },
      4000 + Math.random() * 4000
    ) // wait 4–8 s between slices
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime

    // Rotation input
    if (isDragging) {
      baseRot.current.x += dragDelta.y * 0.008
      baseRot.current.y += dragDelta.x * 0.008
    } else {
      baseRot.current.y += delta * 0.06 // slow, majestic auto-rotation
    }

    // Smooth lerp toward target rotation
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      baseRot.current.x + Math.sin(t * 0.25) * 0.06,
      0.06
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      baseRot.current.y,
      0.06
    )

    // Gentle floating
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.07

    // Advance slice animation
    if (slice) {
      // Speed: delta * 0.7 → ~1.4 s to complete 90°
      const next = slice.progress + delta * 0.7
      if (next >= 1) {
        setSlice(null)
        scheduleSlice()
      } else {
        setSlice({ ...slice, progress: next })
      }
    } else {
      scheduleSlice()
    }
  })

  const sliceEuler = (idx: {
    x: number
    y: number
    z: number
  }): THREE.Euler | undefined => {
    if (!slice) return undefined
    const { axis, layer, direction, progress } = slice
    if (idx[axis] !== layer) return undefined
    const angle = easeInOutCubic(progress) * (Math.PI / 2) * direction
    const e = new THREE.Euler()
    e[axis] = angle
    return e
  }

  return (
    <group ref={groupRef} scale={0.75}>
      {cubies.map((c, i) => {
        const rot = sliceEuler(c.index)
        // Always pass explicit rotation — `undefined` does NOT reset R3F groups,
        // leaving cubies stuck at their previous animated angle.
        const eulerArray: [number, number, number] = rot
          ? [rot.x, rot.y, rot.z]
          : [0, 0, 0]
        return (
          <group key={i} rotation={eulerArray}>
            <Cubie
              {...c}
              carbonTexture={carbonTexture}
              faceTexture={faceTexture}
            />
          </group>
        )
      })}
    </group>
  )
}

// ─── Drag controls ────────────────────────────────────────────────────────────
function DragControls({
  onStart,
  onDrag,
  onEnd,
}: {
  onStart: () => void
  onDrag: (d: { x: number; y: number }) => void
  onEnd: () => void
}) {
  const { gl } = useThree()
  const last = useRef<{ x: number; y: number } | null>(null)

  const down = useCallback(
    (e: PointerEvent) => {
      last.current = { x: e.clientX, y: e.clientY }
      onStart()
      gl.domElement.setPointerCapture(e.pointerId)
    },
    [gl.domElement, onStart]
  )

  const move = useCallback(
    (e: PointerEvent) => {
      if (!last.current) return
      onDrag({ x: e.clientX - last.current.x, y: e.clientY - last.current.y })
      last.current = { x: e.clientX, y: e.clientY }
    },
    [onDrag]
  )

  const up = useCallback(
    (e: PointerEvent) => {
      last.current = null
      onEnd()
      gl.domElement.releasePointerCapture(e.pointerId)
    },
    [gl.domElement, onEnd]
  )

  useState(() => {
    const el = gl.domElement
    el.addEventListener("pointerdown", down)
    el.addEventListener("pointermove", move)
    el.addEventListener("pointerup", up)
    el.addEventListener("pointerleave", up)
    return () => {
      el.removeEventListener("pointerdown", down)
      el.removeEventListener("pointermove", move)
      el.removeEventListener("pointerup", up)
      el.removeEventListener("pointerleave", up)
    }
  })

  return null
}

// ─── Public component ─────────────────────────────────────────────────────────
export function RubiksCube({ className = "" }: { className?: string }) {
  const [dragging, setDragging] = useState(false)
  const [delta, setDelta] = useState({ x: 0, y: 0 })

  return (
    <div
      className={`h-full w-full ${className}`}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
    >
      <Canvas
        camera={{ position: [4.2, 3.2, 4.2], fov: 34 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        {/* Strong key light — upper left, warm white */}
        <directionalLight
          position={[-7, 9, 4]}
          intensity={3.5}
          color="#ffffff"
        />
        {/* Cool fill from right */}
        <directionalLight
          position={[6, 2, -3]}
          intensity={0.5}
          color="#8ab0ff"
        />
        {/* Rim light from below-back */}
        <directionalLight
          position={[0, -5, -7]}
          intensity={0.25}
          color="#ffffff"
        />
        {/* Very low ambient so dark faces stay dark */}
        <ambientLight intensity={0.12} />

        <CubeGroup isDragging={dragging} dragDelta={delta} />

        <DragControls
          onStart={() => setDragging(true)}
          onDrag={(d) => setDelta(d)}
          onEnd={() => {
            setDragging(false)
            setDelta({ x: 0, y: 0 })
          }}
        />

        {/* High-quality environment for carbon-fiber reflections */}
        <Environment preset="warehouse" />
      </Canvas>
    </div>
  )
}
