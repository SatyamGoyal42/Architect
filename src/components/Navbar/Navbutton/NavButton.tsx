import React from 'react'
import './NavButton.css'
type NBprops = {
    title : string
}
const NavButton = (prop : NBprops) => {
  return (
    <div className='navbar-button'>
      <div>{prop.title}</div>
    </div>
  )
}

export default NavButton