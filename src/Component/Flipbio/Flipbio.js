import React from 'react'
import './Flipbio.css'
import AboutImg from '../../Assets/SamSam.jpg' 

const Flipbio = () => {
  return (
    <section id='Flipbox-container'>
        <h1>About</h1>
        <div className='Flipbox'>
            <div className='FlipBox-front'>
            <img src={AboutImg} alt='AboutImage'/>
            </div>
            <div className='FlipBox-Back'>
            <p>
            As a highly motivated Software Engineer, I thrive when working collaboratively with professionals at all levels of cross-functional teams. I am constantly seeking out new challenges that push me outside of my comfort zone, and I have a proven track record of excellence in delivering innovative solutions through my felicitous architectural designs and efficient programming.
What sets me apart is my intense passion for quality, which drives me to constantly push the boundaries of what's possible. Whether it's developing cutting-edge software that streamlines organizational processes, or providing strategic insights to help guide a project towards success, I am always striving to be the best.
Moreover, my leadership skills, confident communication, and strategic thinking makes me a valuable asset to any team. If you're looking for a top-tier Software Engineer who can deliver results, I would be honored to speak with you further about how I can contribute to your organization's success.
          </p>

            </div>
        </div>
        
    </section>
  )
}

export default Flipbio