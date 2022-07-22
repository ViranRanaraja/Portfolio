import { useEffect, useRef, useState } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs
            .sendForm(
                `${process.env.REACT_APP_SERVICE_TOKEN}`,
                `${process.env.REACT_APP_TEMPLATE_TOKEN}`,
                refForm.current,
                `${process.env.REACT_APP_PUBLIC_TOKEN}`
            )
            .then(
                () => {
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                () => {
                    alert('Falied to send message, Please try again!')
                }
            );
    };

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                    idx={15} />
                </h1>
                <p>For any queries, contact me using the below form.</p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required />
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        
        <div className="Phone">
            <svg
                className="BgAnimation__svg"
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g opacity='0.2'>
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 63.00,23.45
                    C 84.94,21.56 102.45,48.96 111.26,66.00
                      114.71,72.67 119.69,80.04 118.80,88.00
                      117.68,98.01 101.47,107.34 93.00,111.14
                      88.20,113.29 80.37,116.34 81.69,123.00
                      82.79,128.57 90.58,138.48 94.20,143.00
                      100.03,150.28 100.91,150.67 106.96,157.00
                      120.52,171.18 121.66,172.89 138.00,184.57
                      143.25,188.33 156.58,198.56 163.00,196.25
                      166.99,194.81 169.75,190.39 172.00,187.00
                      178.22,177.63 183.14,163.16 195.00,160.63
                      205.09,158.48 211.90,163.91 220.00,169.05
                      230.84,175.93 240.72,183.09 250.00,191.96
                      254.20,195.97 258.23,198.43 260.64,204.00
                      262.29,207.83 262.05,211.91 262.00,216.00
                      261.87,225.42 257.34,229.82 251.87,237.00
                      244.34,246.89 227.34,260.49 215.00,263.32
                      210.65,264.32 199.92,264.06 195.00,264.00
                      187.60,263.90 181.77,260.71 175.00,258.00
                      156.51,250.61 157.67,251.39 140.00,241.42
                      93.45,215.17 49.29,172.09 25.25,124.00
                      19.51,112.52 12.02,101.15 12.00,88.00
                      11.99,79.39 11.09,71.13 14.39,63.00
                      16.31,58.26 21.64,52.99 25.15,49.00
                      35.55,37.19 46.97,26.45 63.00,23.45 Z"
                    stroke="url(#paint0_radial)"
                    id="path_0"
                    />
                </g>
                <ellipse
                    cx="476.525"
                    cy="363.313"
                    rx="1.07433"
                    ry="1.07306"
                    transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
                    fill="#945DD6"
                >
                    <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                    <mpath xlinkHref="#path_0" />
                    </animateMotion>
                </ellipse>
                <path
                    d="M476.171 362.952L450.417 337.168"
                    transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
                    stroke="url(#paint4_linear)"
                >
                    <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                    <mpath xlinkHref="#path_0" />
                    </animateMotion>
                </path>
                <path
                    d="M381.81 154.669L356.057 128.885"
                    transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
                    stroke="url(#paint5_linear)"
                >
                    <animateMotion
                    dur="6s"
                    begin="2"
                    repeatCount="indefinite"
                    rotate="auto"
                    >
                    <mpath xlinkHref="#path_0" />
                    </animateMotion>
                </path>
                <path
                    d="M381.81 154.669L356.057 128.885"
                    transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
                    stroke="url(#paint5_linear)"
                >
                    <animateMotion
                    dur="7s"
                    begin="3"
                    repeatCount="indefinite"
                    rotate="auto"
                    >
                    <mpath xlinkHref="#path_0" />
                    </animateMotion>
                </path>
                <path
                    d="M476.171 362.952L450.417 337.168"
                    transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
                    stroke="url(#paint11_linear)"
                >
                    <animateMotion
                    dur="5s"
                    begin="9"
                    repeatCount="indefinite"
                    rotate="auto"
                    >
                    <mpath xlinkHref="#path_0" />
                    </animateMotion>
                </path>
                <path
                    d="M476.171 362.952L450.417 337.168"
                    transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
                    stroke="url(#paint11_linear)"
                >
                    <animateMotion
                    dur="5s"
                    begin="5"
                    repeatCount="indefinite"
                    rotate="auto"
                    >
                    <mpath xlinkHref="#path_0" />
                    </animateMotion>
                </path>
                <path
                    d="M476.171 362.952L450.417 337.168"
                    transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
                    stroke="url(#paint4_linear)"
                >
                    <animateMotion
                    dur="4s"
                    begin="5"
                    repeatCount="indefinite"
                    rotate="auto"
                    >
                    <mpath xlinkHref="#path_0" />
                    </animateMotion>
                </path>
                <path
                    d="M476.171 362.952L450.417 337.168"
                    transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
                    stroke="url(#paint11_linear)"
                >
                    <animateMotion
                    dur="6s"
                    begin="3"
                    repeatCount="indefinite"
                    rotate="auto"
                    >
                    <mpath xlinkHref="#path_0" />
                    </animateMotion>
                </path>
                <defs>
                    <radialGradient
                    id="paint0_radial"
                    cx="0"
                    cy="0"
                    r="100"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(301 301) rotate(90) scale(300)"
                    >
                    <stop offset="0.333333" stopColor="#FBFBFB" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                    id="paint2_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop offset="0.333333" stopColor="#FBFBFB" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient
                    id="paint4_linear"
                    x1="476.529"
                    y1="363.31"
                    x2="451.461"
                    y2="338.272"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#945DD6" />
                    <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                    id="paint5_linear"
                    x1="382.168"
                    y1="155.027"
                    x2="357.1"
                    y2="129.989"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#F46737" />
                    <stop offset="1" stopColor="#F46737" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                    id="paint11_linear"
                    x1="476.529"
                    y1="363.31"
                    x2="451.461"
                    y2="338.272"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#13ADC7" />
                    <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <Loader type='line-scale' />
        </>
    )
}

export default Contact