'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function InfiniteCards({
  items,
  className
}: {
  items: {
    imgUrl: string
  }[]
  className?: string
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      setStart(true)
    }
  }

  // Дублируем items в JavaScript вместо DOM манипуляций
  const duplicatedItems = [...items, ...items]

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 justify-center items-center',
          'hover:[animation-play-state:paused]'
        )}
        style={{
          animation: start ? 'infinite-scroll 30s linear infinite' : 'none'
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <li className="relative w-max shrink-0 px-6 py-6" key={`${idx}-${item.imgUrl}`}>
            <div className="relative z-20 flex flex-row items-center justify-center h-[100px] w-[200px]">
              <img
                className="rounded-t-lg max-w-full max-h-full object-contain"
                src={`/${item.imgUrl}`}
                alt="partners-img"
              />
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
