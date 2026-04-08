"use client"

import { useCallback, Suspense } from "react"
import dynamic from "next/dynamic"
import type { Application } from "@splinetool/runtime"

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false })

const SCENE_URL =
  "https://prod.spline.design/2603ebf4-bd9a-54ba-c1e9-6645c3ee7a53/scene.splinecode"

function SplineInner() {
  const onLoad = useCallback((spline: Application) => {
    spline.setBackgroundColor("rgba(0,0,0,0)")
  }, [])

  return (
    <Spline
      scene={SCENE_URL}
      onLoad={onLoad}
      className="w-full h-full"
      style={{ background: "transparent" }}
    />
  )
}

export function SplineScene() {
  return (
    <Suspense fallback={null}>
      <SplineInner />
    </Suspense>
  )
}
