import './index.scss';
import LogoS from '../../../assests/images/logo-v.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';
import React from 'react';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
      gsap.registerPlugin(DrawSVGPlugin)

      gsap.timeline()

      .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })

      .from(outlineLogoRef.current, {
          drawSVG: 0,
          duration: 20,
        });

      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      )
    }, [])

    return(
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt='V' />

            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg">
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                <path
                    ref={outlineLogoRef}
                    d="m1375 4554 c-22 -2 -75 -9 -118 -14 l-78 -10 -169 -126 c-94 -69
                    -170 -131 -170 -138 0 -10 65 -215 290 -916 49 -151 114 -356 145 -455 32 -99
                    113 -351 180 -560 l123 -380 43 -9 c79 -17 475 -12 555 6 147 34 291 136 349
                    248 12 23 166 493 205 625 10 33 65 206 123 385 58 179 135 420 172 535 37
                    116 108 338 159 495 l92 285 -24 7 c-69 20 -297 30 -422 19 -72 -7 -138 -15
                    -148 -19 -10 -4 -95 -63 -189 -132 l-171 -125 -22 -80 c-12 -44 -46 -163 -75
                    -265 -29 -102 -68 -238 -86 -303 -18 -65 -36 -114 -40 -110 -4 4 -48 157 -99
                    338 -134 479 -187 666 -193 671 -18 18 -330 38 -432 28z m368 -30 c15 -3 27
                    -9 27 -13 0 -6 -224 -177 -282 -215 -24 -16 -37 -17 -134 -7 -120 12 -270 13
                    -386 3 -42 -4 -74 -4 -72 0 3 4 72 57 154 117 148 108 151 109 217 116 38 3
                    77 8 88 10 30 6 356 -4 388 -11z m1445 0 c23 -4 42 -9 42 -13 -1 -3 -69 -57
                    -153 -119 l-152 -112 -85 7 c-47 5 -169 7 -273 6 l-187 -1 155 113 c154 112
                    156 113 223 120 37 3 74 8 82 10 21 6 297 -3 348 -11z m-1282 -405 c58 -206
                    123 -439 145 -518 l39 -144 -26 -96 c-15 -53 -53 -186 -84 -296 -31 -110 -63
                    -224 -70 -252 -6 -29 -16 -53 -20 -53 -4 0 -26 69 -49 153 -23 83 -64 231 -91
                    327 -26 96 -81 292 -120 435 -40 143 -92 331 -116 419 -25 87 -43 160 -41 162
                    15 15 322 242 325 240 1 -2 50 -171 108 -377z m1324 334 c-103 -319 -140 -434
                    -148 -463 -6 -19 -54 -170 -107 -335 -54 -165 -106 -327 -115 -360 -10 -33
                    -63 -199 -118 -370 -55 -170 -129 -402 -165 -515 -70 -219 -93 -261 -176 -328
                    -44 -35 -143 -88 -183 -98 l-27 -6 44 134 c24 73 77 239 118 368 42 129 161
                    501 266 825 104 325 215 671 246 770 l57 180 152 112 c83 62 154 113 158 113
                    4 0 3 -12 -2 -27z m-1812 -189 c24 -5 34 -13 38 -33 4 -14 30 -111 59 -216
                    102 -364 184 -661 245 -885 124 -452 126 -459 139 -427 6 16 11 32 11 37 0 6
                    29 110 64 232 64 225 127 449 280 988 81 288 83 294 112 303 79 22 507 17 532
                    -7 2 -3 -32 -117 -76 -253 -44 -136 -108 -336 -142 -443 -34 -107 -86 -269
                    -115 -360 -30 -91 -131 -403 -225 -695 -95 -291 -173 -531 -175 -533 -11 -11
                    -162 -24 -285 -24 -125 0 -274 13 -286 24 -2 2 -48 143 -103 313 -116 364
                    -321 1001 -361 1130 -16 50 -83 258 -149 464 -67 206 -119 376 -117 378 19 20
                    460 25 554 7z"
                />
                </g>
            </svg>            
        </div>
    )
}

export default Logo