"use client"

import { AnimatePresence, motion, type Variants } from "motion/react"
import { useCallback, useEffect, useState } from "react"

type TextFlipProps = {
  children: string[]
  className?: string
  interval?: number
  variants?: Variants
}

export function TextFlip({
  children,
  className,
  interval = 2,
  variants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 },
  },
}: TextFlipProps) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % children.length)
  }, [children.length])

  useEffect(() => {
    const id = setInterval(next, interval * 1000)
    return () => clearInterval(id)
  }, [interval, next])

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {children[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
