"use client"

import { Suspense } from "react"

const VIEWER_URL =
  "https://my.spline.design/gradientblobscopycopy-aqhQLpwubdT6o2QQsoWcmQB6-6NG/"

function SplineInner() {
  return (
    /* mix-blend-mode:screen makes pure black transparent and preserves
       the bright gradient blobs — no background leaks through */
    <div className="h-full w-full" style={{ mixBlendMode: "screen" }}>
      <iframe
        src={VIEWER_URL}
        title="ZION gradient animation"
        loading="lazy"
        allow="autoplay"
        /* Scale up slightly so the Spline watermark bar at the bottom
           is pushed outside the clipped container */
        style={{
          width: "100%",
          height: "115%",
          border: "none",
          marginTop: "-7.5%",
          display: "block",
        }}
      />
    </div>
  )
}

export function SplineScene() {
  return (
    <Suspense fallback={null}>
      <SplineInner />
    </Suspense>
  )
}
