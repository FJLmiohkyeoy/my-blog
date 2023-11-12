'use client'

import { useEffect } from 'react'

export default function ViewCountIncreaser({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  useEffect(() => {
    const increaseViewCount = async () => {
      await fetch(`/api/views/${title}`, {
        method: 'POST',
      })
    }
    increaseViewCount()
  })
  return <>{children}</>
}
