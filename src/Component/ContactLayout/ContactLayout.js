import React from 'react'
import './ContactLayout.css'

const ContactLayout = () => {
  return (
   <section id='contact-container'>
   <h1 className='Contact-pageHeading'> Contact Me </h1>
   <form className='Contact-form'>
    <input type='Text' className='FormName' placeholder='Please enter your name'/>
    <input type='Email' className='FormEmail' placeholder='Please enter your email'/>
    <textarea name='Meaage' className='Messagebox' rows={5} placeholder='Please enter your message here....'></textarea>
    <button type='submit' value="send" className='Formbtn'>submit</button>
   </form>
    
   </section>
  )
}

export default ContactLayout