import React from 'react'

interface ISVG {
  src: string
  className: string
  stroke?: string
  onClick?: () => void
}

const Svg = ({ src, className, stroke='currentColor', onClick }: ISVG) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={className} onClick={onClick}>
      <path strokeLinecap="round" strokeLinejoin="round" d={src} />
    </svg>

  )
}

export default Svg