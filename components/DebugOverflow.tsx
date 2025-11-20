// components/DebugOverflow.tsx
"use client"

import { useEffect } from 'react'

export default function DebugOverflow() {
  useEffect(() => {
    // Add outline to all elements to see which one is overflowing
    const style = document.createElement('style')
    style.textContent = `
      * {
        outline: 1px solid red !important;
      }
      .overflow-warning {
        background: rgba(255,0,0,0.1) !important;
      }
    `
    document.head.appendChild(style)

    // Check for horizontal overflow
    const checkOverflow = () => {
      document.querySelectorAll('*').forEach(el => {
        const element = el as HTMLElement
        const overflowX = element.scrollWidth > element.clientWidth
        if (overflowX) {
          element.classList.add('overflow-warning')
          console.log('Overflow element:', element)
        }
      })
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)

    return () => {
      document.head.removeChild(style)
      window.removeEventListener('resize', checkOverflow)
    }
  }, [])

  return null
}