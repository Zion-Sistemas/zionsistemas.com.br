"use client"

import { useCallback } from "react"
import Spline from "@splinetool/react-spline/next"
import type { Application } from "@splinetool/runtime"

const SCENE_URL =
  "https://prod.spline.design/2603ebf4-bd9a-54ba-c1e9-6645c3ee7a53/scene.splinecode"

export function SplineScene() {
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
