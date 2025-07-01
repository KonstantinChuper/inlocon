import React from 'react'

export default function GradientLine({ className }: { className?: string }) {
  return (
    <div
      className={`w-full h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent ${
        className || ''
      }`}
    ></div>
  )
}
