"use client"

import { useEffect, useState } from "react"

interface ImpactCounterProps {
  label: string
  count: number
}

export default function ImpactCounter({ label, count }: ImpactCounterProps) {
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1500
    const increment = count / (duration / 30)
    const interval = setInterval(() => {
      start += increment
      if (start >= count) {
        start = count
        clearInterval(interval)
      }
      setDisplayCount(Math.floor(start))
    }, 30)
    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h3 className="text-4xl font-bold text-[var(--primary-color)] mb-2">{displayCount}</h3>
      <p className="text-lg text-gray-700">{label}</p>
    </div>
  )
}
