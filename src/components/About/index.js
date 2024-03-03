import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = ()=>{

  return (
    <>

    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
            strArray={['A','b','o','u','t',' ','M','e']}
            idx={15}
          />
        </h1>
        <h2>Journey -</h2>
        <p> My journey into web development commenced with self-learning, showcasing my unwavering dedication and determination to thrive in this dynamic field.</p>
        <h2>Solid Foundation -</h2>
        <p> I've built a robust foundation in web design and WordPress development, laying the groundwork for my expertise in crafting digital solutions.</p>
        <h2>Frontend Mastery -</h2>
        <p>Armed with hands-on experience in Frontend development, I specialize in HTML, CSS, Bootstrap, React Framework & Tailwind CSS, Ensuring seamless and visually appealing user interfaces.</p>
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
            <FontAwesomeIcon icon={faBootstrap} color='#0275d8' />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color='#fca326'/>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  )
  
}


export default About
