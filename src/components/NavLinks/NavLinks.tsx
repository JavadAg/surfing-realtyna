/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const NavLinks = ({ className }: { className: string }) => {
  return (
    <ul className={`${className}`}>
      <li>
        <a href=''>STORIES</a>
      </li>
      <li>
        <a href=''>EVENTS</a>
      </li>
      <li>
        <a href=''>PLACES</a>
      </li>
      <li>
        <a href=''>BOARDS</a>
      </li>
    </ul>
  )
}

export default NavLinks
