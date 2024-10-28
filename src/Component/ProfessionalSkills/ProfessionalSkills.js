import React from 'react'
import './ProfessionalSkills.css'
import Professionalimg from '../../Assets/professional skills logic.gif'
import HtmlImg from '../../Assets/icons8-html-5-48.png'
import Html5Img from '../../Assets/icons8-html5-50.png'
import CascadingtImg from '../../Assets/icons8-css-100.png'
import JavaScriptImg from '../../Assets/icons8-javascript-48.png'
import VuetImg from '../../Assets/icons8-vuejs-50.png'
import ReactImg from '../../Assets/icons8-react-40.png'



const ProfessionalSkills = () => {
  return (
    <section id='ProfSkill-container'>
         
        <div className='ProfSkill-sub-layer'>
            <span className='ProfSkill-heading'>Profesional Skills</span> <br/>
            <span className='Profskill-sub-heading'>Take a look at some of the tools I love working with.</span> <br/>
            <div className='Lang-container'>
                <div className='Program-lang' >
                    
                <div className='Program-lang-inner'>
                    <div className='lang-img'>
                    <span>Programing Frame-works:</span>
                    <img src={ReactImg } alt='ReactImg' className='guageImg1'/>
                   <hr className='StrLine'/>
                   </div> 
                </div>
                
                <div className='Program-lang-inner'>
                    <div className='lang-img'>
                    <span>Programing Languages:</span>
                   <img src={VuetImg} alt='VuetImg' className='guageImg1'/>
                    <img src={JavaScriptImg} alt='JavaScriptImg' className='guageImg1'/>
                   <hr className='StrLine'/>
                   </div> 
                </div>

                <div className='Program-lang-inner'>
                    
                <div className='lang-img'>
                <span>Web Technologies:</span>
                   <img src={HtmlImg} alt='HtmlImg' className='guageImg1'/>
                    <img src={CascadingtImg} alt='CascadingtImg' className='guageImg1'/>
                    <img src={Html5Img} alt='Html5Img' className='guageImg1'/>
                   <hr className='StrLine'/>
                </div> 
                </div>
                </div>
            </div>

        </div>
        <img src={Professionalimg} alt='background' className='ProfImg'/>

    </section>

  )
}

export default ProfessionalSkills