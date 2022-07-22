import { useEffect, useState } from 'react'
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assests/images/logo-v.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i','r','a','n',' ','R','a','n','a','r','a','j','a','.']
    const jobArray = ['F','u','l','l','-','S','t','a','c','k',' ','W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, []);

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i</span> 
                <span className={`${letterClass} _13`}>,</span> 
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _14`}>'</span>
                <span className={`${letterClass} _15`}>m</span>

                <img src={LogoTitle} alt='developer' />

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />

                <br />

                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={11} />

                </h1>

                <h2>Front-end Developer / Backend Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                
            </div>
            <Logo />
        </div>
        <Loader type='line-scale' />
        </>
    );
}

export default Home