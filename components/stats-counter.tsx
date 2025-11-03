"use client"

import { useEffect, useState } from "react"

interface StatsCounterProps {
  end: number
  label: string
  suffix?: string
}

export function StatsCounter({ end, label, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = end / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)
    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#ADF802] mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-400">{label}</p>
    </div>
  )
}
