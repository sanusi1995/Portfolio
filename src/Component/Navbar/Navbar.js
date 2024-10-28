import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>

      <div className='desktopMenueName'>
      <Link className='desktopMenueListRight'>Samson Oluwaseyi Sanusi</Link>
      </div>

      
       <div className='desktopMenu'>
        <Link activeClass='active' to='layout1' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenueList'>Home</Link>
        <Link activeClass='active' to='Flipbox-container' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenueList'>About</Link>
        <Link activeClass='active' to='ProfSkill-container' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenueList'>Skills</Link>
        <Link activeClass='active' to='contact-container' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenueList'>Contact</Link>
       </div> 
    </nav>
  )
}

export default Navbar