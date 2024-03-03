import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rqxsfpx', 
      'template_r02tr3o', 
      form.current, 
      'iFTSBddLQGj8khbkj')

      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully')
          window.location.reload(false)
      }, (error) => {
          alert('Message Failed to send!')
          console.log(error.text);
          // console.error('Message Not Sent')
      });
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters 
              strArray={['C','o','n','t','a','c','t',' ','M','e']} 
              idx={15}/>
          </h1>
          <h2>Hire Me -</h2>
          <p>Are you looking for a passionate front-end developer to bring your web projects to life? I'd love to hear about your goals and how I can contribute to your success. Please provide some details about your project, and I'll get back to you as soon as possible.  
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name='from_name' placeholder='Name' required/>
                </li>
                <li className='half'>
                  <input type="email" name='from_email' placeholder='Email' required/>
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required/>
                </li>
                <li>
                  <textarea name="message" id="" cols="30" rows="10" placeholder='Message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color='#61DBFB' />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color='#e34c26' />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color='#264de4' />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color='#f0db4f' />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color='#fca326' />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faBootstrap} color='#0275d8' />
          </div>
        </div>
      </div>
        <Loader type="pacman"/>
      </div>
    </>
  )
}

export default Contact