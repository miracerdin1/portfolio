import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleField() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const width = mount.clientWidth
    const height = mount.clientHeight
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100)
    camera.position.set(0, 0, 8)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    const isMobile = width < 640
    const count = isMobile ? 110 : 240

    const positions = new Float32Array(count * 3)
    const baseY = new Float32Array(count)
    const phase = new Float32Array(count)
    const colors = new Float32Array(count * 3)
    const cA = new THREE.Color(0xff6a39)
    const cB = new THREE.Color(0x4dd6c4)
    const tmp = new THREE.Color()

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15
      const y = (Math.random() - 0.5) * 8.5
      const z = (Math.random() - 0.5) * 7 - 1
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      baseY[i] = y
      phase[i] = Math.random() * Math.PI * 2
      tmp.copy(cA).lerp(cB, Math.random())
      colors[i * 3] = tmp.r
      colors[i * 3 + 1] = tmp.g
      colors[i * 3 + 2] = tmp.b
    }

    const pointsGeo = new THREE.BufferGeometry()
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pointsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    function makeSprite() {
      const size = 64
      const c = document.createElement('canvas')
      c.width = size
      c.height = size
      const ctx = c.getContext('2d')
      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
      g.addColorStop(0, 'rgba(255,255,255,1)')
      g.addColorStop(0.45, 'rgba(255,255,255,0.55)')
      g.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, size, size)
      return new THREE.CanvasTexture(c)
    }

    const pointsMat = new THREE.PointsMaterial({
      size: isMobile ? 0.16 : 0.14,
      map: makeSprite(),
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(pointsGeo, pointsMat)

    const linePositions = []
    const threshold = 2.4
    for (let a = 0; a < count; a++) {
      for (let b = a + 1; b < count; b++) {
        const dx = positions[a * 3] - positions[b * 3]
        const dy = positions[a * 3 + 1] - positions[b * 3 + 1]
        const dz = positions[a * 3 + 2] - positions[b * 3 + 2]
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (d < threshold) {
          linePositions.push(positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2])
          linePositions.push(positions[b * 3], positions[b * 3 + 1], positions[b * 3 + 2])
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3))
    const lineMat = new THREE.LineBasicMaterial({ color: 0x5c6274, transparent: true, opacity: 0.18 })
    const lines = new THREE.LineSegments(lineGeo, lineMat)

    const group = new THREE.Group()
    group.add(lines)
    group.add(points)
    group.rotation.x = 0.15
    scene.add(group)

    let targetRotX = group.rotation.x
    let targetRotY = 0

    function onPointerMove(e) {
      const rect = mount.getBoundingClientRect()
      const px = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const py = ((e.clientY - rect.top) / rect.height) * 2 - 1
      targetRotY = px * 0.35
      targetRotX = 0.15 + py * 0.18
    }
    if (!reduced) mount.addEventListener('pointermove', onPointerMove)

    let raf = null
    const t0 = performance.now()

    function render(now) {
      const t = (now - t0) / 1000
      const posAttr = pointsGeo.attributes.position
      for (let i = 0; i < count; i++) {
        posAttr.array[i * 3 + 1] = baseY[i] + Math.sin(t * 0.6 + phase[i]) * 0.15
      }
      posAttr.needsUpdate = true

      group.rotation.y += (targetRotY - group.rotation.y) * 0.04
      group.rotation.x += (targetRotX - group.rotation.x) * 0.04
      group.rotation.y += 0.0009

      renderer.render(scene, camera)
      if (!reduced) raf = requestAnimationFrame(render)
    }
    render(t0)
    if (reduced) renderer.render(scene, camera)

    function onResize() {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      if (!reduced) mount.removeEventListener('pointermove', onPointerMove)
      pointsGeo.dispose()
      lineGeo.dispose()
      pointsMat.dispose()
      lineMat.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="hero-canvas-mount" ref={mountRef} />
}
