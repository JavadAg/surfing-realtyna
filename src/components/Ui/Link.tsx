import React from 'react'
import './Link.css'

const Link = ({ text, color }: { text: string; color?: string }) => {
  return (
    <div className='link'>
      <a
        style={{ color: color }}
        href=''
      >
        {text}
      </a>
    </div>
  )
}

export default Link
