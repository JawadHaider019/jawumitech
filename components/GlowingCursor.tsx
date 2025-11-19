"use client"

import { useEffect, useRef, useState } from 'react'

const GlowingCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(true) // Start as true to avoid flash

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      return 'ontouchstart' in window || 
             navigator.maxTouchPoints > 0 || 
             (navigator as any).msMaxTouchPoints > 0
    }

    setIsTouchDevice(checkTouchDevice())

    if (isTouchDevice || !cursorRef.current) return

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(0.7)'
        cursorRef.current.style.background = 'radial-gradient(circle, rgba(191,247,71,0.8) 0%, rgba(191,247,71,0.4) 50%, rgba(191,247,71,0.2) 70%, transparent 100%)'
      }
    }

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
        cursorRef.current.style.background = 'radial-gradient(circle, rgba(191,247,71,0.6) 0%, rgba(191,247,71,0.3) 50%, rgba(191,247,71,0.1) 70%, transparent 100%)'
      }
    }

    // Handle hover effects on interactive elements
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.onclick || target.classList.contains('cursor-hover')) {
        if (cursorRef.current) {
          cursorRef.current.style.width = '36px'
          cursorRef.current.style.height = '36px'
          cursorRef.current.style.background = 'radial-gradient(circle, rgba(191,247,71,0.9) 0%, rgba(191,247,71,0.5) 50%, rgba(191,247,71,0.2) 70%, transparent 100%)'
          cursorRef.current.style.filter = 'blur(0.5px) drop-shadow(0 0 15px #bff747) drop-shadow(0 0 25px #bff747)'
        }
      }
    }

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.onclick || target.classList.contains('cursor-hover')) {
        if (cursorRef.current) {
          cursorRef.current.style.width = '32px'
          cursorRef.current.style.height = '32px'
          cursorRef.current.style.background = 'radial-gradient(circle, rgba(191,247,71,0.6) 0%, rgba(191,247,71,0.3) 50%, rgba(191,247,71,0.1) 70%, transparent 100%)'
          cursorRef.current.style.filter = 'blur(0.5px) drop-shadow(0 0 10px #bff747) drop-shadow(0 0 20px #bff747)'
        }
      }
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.body.style.cursor = 'auto'
    }
  }, [isTouchDevice])

  // Don't render anything on touch devices
  if (isTouchDevice) {
    return null
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference transition-all duration-200 ease-out"
        style={{
          width: '32px',
          height: '32px',
          background: 'radial-gradient(circle, rgba(191,247,71,0.6) 0%, rgba(191,247,71,0.3) 50%, rgba(191,247,71,0.1) 70%, transparent 100%)',
          border: 'none',
          filter: 'blur(0.5px) drop-shadow(0 0 10px #bff747) drop-shadow(0 0 20px #bff747)',
          left: '0px',
          top: '0px',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <style jsx global>{`
        /* Only apply cursor none on non-touch devices */
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
        
        /* Ensure touch devices have normal cursor */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }

        /* Smooth scrolling for better cursor experience */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}

export default GlowingCursor