import React from 'react'
import NavButton from './Navbutton/NavButton'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='JualDB'> JualDB</div>
      <div className='navgroup'>
      <NavButton title='Home'/>
      <NavButton title='About'/>
      <NavButton title='Projects'/>
      <NavButton title='Contact'/>
      </div>
    </div>
  )
}

export default NavBar
