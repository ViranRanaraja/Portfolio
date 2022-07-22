import Loader from "react-loaders"
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { projects } from './projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, []);

    return(
        <>
        <div className="projects">
            <div className="project_title">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's ']} 
                    idx={15} />
                </h1>
            </div>
            <div className="slider">
                <p>Use slider to view more projects.</p>
                <FontAwesomeIcon icon={faArrowRight} className="icon"/>
            </div>
            <div className="grid">
            {projects.map((p, i) => {
                return (
                    <div className="card" key={i}>
                    <img src={p.image} alt='Project' />
                    <div className="content">
                        <h3>{p.title}</h3>
                    </div>
                    <div className="button">
                        <a href={p.github} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} className="icon"/> Repo </a>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        <Loader type="line-scale" />
        </>
    )
}

export default Project