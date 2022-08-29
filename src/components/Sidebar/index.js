import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assests/images/logo-v.png'
import LogoSub from '../../assests/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faSuitcase, faPhone, faCog } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/' onClick={ (event) => event.preventDefault() }>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSub} alt='Subtitle' />
        </Link>
        <nav>
            <NavLink exact='true' onClick="return false;" activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/profile'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='skills-link' to='/skills'>
                <FontAwesomeIcon icon={faCog} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='project-link' to='/projects'>
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faPhone} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/viran-ranaraja-6064a623a/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/ViranRanaraja'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar