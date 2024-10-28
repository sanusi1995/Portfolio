import React from 'react'
import './FirstLayout.css'
import ProfilePics from '../../Assets/Headshoot edited.png'
import { Link } from 'react-scroll'
import Myjob from '../../Assets/Jobs.png'
import GithubIcon from '../../Assets/icons8-github-48.png'
import LinkedIcon from '../../Assets/Linkedin (2).png'
import WhatsAppIcon from '../../Assets/icons8-whatsapp-50.png'


const FirstLayout = () => {
  return (
    <section id='layout1'>
        <div className='LayoutContent'>
            <span className='Greeting'>Hi,</span>
            <span className='Bio'>I'm <span className='BioName'>Samson</span> <br/>Software Engineer</span>
            <p>I am a highly skilled frontend developer</p>

            <Link><button className='HireBtn' onClick={() => document.getElementById("contact-container").scrollIntoView()}><img src={Myjob} alt='Myjob' className='btnImg'/>Hire me</button></Link>
            
        <div className='mediaIcons'>
            <a href="https://www.linkedin.com/in/sanusi-samson-053432237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  rel="noreferrer"  className='link' target="_blank">
            <img src={LinkedIcon} alt='LinkedIcon' className='LayerMediaList'/>
            </a>

            <a href="https://whatsapp.com/dl/"  rel="noreferrer"  className='link' target="_blank">
            <img src={WhatsAppIcon} alt='WhatsAppIcon' className='LayerMediaList'/>
            </a>

            <a href="https://github.com/sanusi1995"  rel="noreferrer"  className='link' target="_blank">
            <img src={GithubIcon} alt='GithubIcon' className='LayerMediaList'/>
            </a>
       </div> 


        </div>
        <img src={ProfilePics} alt='background' className='ProfilePics'/>

    </section>

  )
}

export default FirstLayout