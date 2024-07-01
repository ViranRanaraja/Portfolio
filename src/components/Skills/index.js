import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStore, faCss3Alt, faDocker, faFigma, faGitAlt, faGolang, faHtml5, faJava, faJsSquare, faNodeJs, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faHSquare, faMobileAlt, faUser, faUserCheck, faUserGroup, faUsers } from '@fortawesome/free-solid-svg-icons'


const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, []);

    return (
        <>
        <div className='container skills-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={['T','e','c','h','n','i','c', 'a','l',' ','S','k','i','l','l','s']} 
                    idx={15}
                    />
                </h1>
                <p>
                As a developer, I've used a variety of tools to construct and manage my projects.
                </p>
            </div>
            <div className='skills-list'>
                <div className='front-end'>
                    <p>Front-End Web</p>
                    
                    <div className='icons'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='front-end-name'>
                        <p>React</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='front-end-name'>
                        <p>HTML</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='front-end-name'>
                        <p>Javascript</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faCss3Alt} color='#28A4D9'/>
                    </div>
                    <div className='front-end-name'>
                        <p>CSS</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faPhp} color='#6145ed'/>
                    </div>
                    <div className='front-end-name'>
                        <p>PHP</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faAppStore} color='#6145ed'/>
                    </div>
                    <div className='front-end-name'>
                        <p>Flutter</p>
                    </div>
                </div>

                <div className='back-end'>
                    <p>Backend</p>
                
                    <div className='icons'>
                        <FontAwesomeIcon icon={faNodeJs} color='#03c92b'/>
                    </div>
                    <div className='back-end-name'>
                        <p>Node JS</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faNodeJs} color='#03c92b'/>                   
                    </div>
                    <div className='back-end-name'>
                        <p>Express JS</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faPython} color='#5cd2f0'/>
                    </div>
                    <div className='back-end-name'>
                        <p>Python</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faJava} color='#ff3333'/>
                    </div>
                    <div className='back-end-name'>
                        <p>Java</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faGolang} color='#ff3333'/>
                    </div>
                    <div className='back-end-name'>
                        <p>GoLang</p>
                    </div>
                </div>

                <div className='database'>
                    <p>Database</p>
                
                    <div className='icons'>
                        <FontAwesomeIcon icon={faDatabase} color='#39d90d'/>
                    </div>
                    <div className='database-name'>
                        <p>Mongo DB</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faDatabase} color='#2d48d2'/>
                    </div>
                    <div className='database-name'>
                        <p>SQL</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faDatabase} color='576ddb'/>
                    </div>
                    <div className='database-name'>
                        <p>Azure</p>
                    </div>
                </div>
                <div className='technology'>
                    <p>Technologies</p>
                
                    <div className='icons'>
                        <FontAwesomeIcon icon={faCode} color='#576ddb'/>
                    </div>
                    <div className='technology-name'>
                        <p>Rest Api</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                    <div className='technology-name'>
                        <p>Git</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faHSquare} color="#9d4dff"/>
                    </div>
                    <div className='technology-name'>
                        <p>Heroku</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faDocker} color="#9d4dff"/>
                    </div>
                    <div className='technology-name'>
                        <p>Docker</p>
                    </div>
                </div>
                <div className='editing'>
                    <p>Graphic Editing</p>

                    <div className='icons'>
                        <FontAwesomeIcon icon={faFigma} color="#c453f9"/>
                    </div>
                    <div className='editing-name'>
                        <p>Figma</p>
                    </div>
                </div>

                <div className='skills'>
                    <p>Soft Skills</p>

                    <div className='icons'>
                        <FontAwesomeIcon icon={faUserGroup} color='#ff6600'/>
                    </div>
                    <div className='skills-name'>
                        <p>Team Leadership</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faUsers} color='#ff3333'/>
                    </div>
                    <div className='skills-name'>
                        <p>Good Team Player</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faUser} color='#ffff00'/>
                    </div>
                    <div className='skills-name'>
                        <p>Problem Solver</p>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faUserCheck} color='#40ff1a'/>
                    </div>
                    <div className='skills-name'>
                        <p>Decision Making</p>
                    </div>

                </div>

                


            </div>
        </div>
        <Loader type="line-scale" />
        </>
    )
}

export default Skills