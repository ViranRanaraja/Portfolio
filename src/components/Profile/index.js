import { faCss3Alt, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Profile = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, []);

    return (
        <>
        <div className='container profile-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ', 'M','e']} 
                    idx={15}
                    />
                </h1>
                <p>I'm a very ambitious, hardworking and trustworthy individual who has 
                    established a mature and sensible approach to whatever task or situation 
                    that I am given with.  I have excellent organizational skills which 
                    allows me to interact with a diverse group of people easily.
                </p>
                <p>I plan on maintaining the best user experience for web applications, 
                    improve the system by applying bug fixes when necessary and give 
                    functionality to web applications.</p>
                <p>
                    <ul>
                        <li>
                            Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Viran Ranaraja
                        </li>

                        <li>
                            Date of Birth: 2001/12/01
                        </li>

                        <li>
                            School:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             Lyceum International School, Nugegoda
                        </li>

                        <li>
                            Degree: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            (BSc) Computer Science 
                        </li>

                        <li>
                            University: &nbsp;&nbsp;&nbsp;
                            Informatics Institute of Technology <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            (Affiliated with Univerity of Westminister)
                        </li>

                    </ul>
                </p>

            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3Alt} color='#28A4D9' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color='#5cd2f0' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color='#03c92b' />
                    </div>
                </div>

            </div>
        </div>
        <Loader type="line-scale" />
        </>
    )
          
}

export default Profile