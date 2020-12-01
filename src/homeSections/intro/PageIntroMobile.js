import React from 'react';
import '../../App.css';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import LunasWord from '../../imgs/lunasWordmark.png';
import LunasWordBlack from '../../imgs/LunasWordmarkLogo.png';

function PageIntroMobile() {
    const { scrollYProgress } = useViewportScroll();
    const scaleX = useTransform(scrollYProgress, [0, 0.1], ['0', '120vh']);
    const scaleY = useTransform(scrollYProgress, [0, 0.1], ['0', '120vh']);
    const opacity = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);
    const slideLeft = useTransform(scrollYProgress, [0.16, 0.22], ['5%', '-90%']);
    const opacity1 = useTransform(scrollYProgress, [0.05, 0.09], [0, 1]);
    const opacity2 = useTransform(scrollYProgress, [0.08, 0.13], [0, 1]);

    return(
        <motion.div style={{ ...container, opacity: opacity }}>
            <span style={introText}>Welcome to</span>
            <img src={LunasWord} alt="Lunas" style={introImg} />
            <motion.div style={{ ...welcomeDiv, height: scaleY, width: scaleX }}>
            </motion.div>

            <motion.div style={{ ...meetingText, left: slideLeft }}>
                Nice to meet you! I'm <span style={boldName}>Garrett!</span>
            </motion.div>

            <motion.div style={{ ...meetingText2, opacity: opacity1, right: slideLeft }}>
                <motion.div style={{ opacity: opacity2 }}>
                    Enjoy my
                </motion.div>
                <img src={LunasWordBlack} alt="Lunas" style={meetingLogo} />
                <motion.div style={{ opacity: opacity2 }}>
                    UI project!
                </motion.div>
            </motion.div>

            <div className='scrollPrompt'>
                <div className='scrollText'>Scroll</div>
                <div className='scrollArrow'>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </motion.div>
)
}

const container = {
position: 'fixed',
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
height: '100vh',
width: '100vw',
padding: 'auto',
backgroundColor: '#101010'
}

const welcomeDiv = {
position: 'absolute',
borderRadius: '50%',
backgroundColor: '#DDDFE2'
}

const introText = {
fontFamily: 'Cardo, serif',
fontSize: '300%',
color: '#FFF'
}

const introImg = {
margin: '-52px',
width: '300px'
}

const meetingText = {
    position: 'absolute',
    top: '15%',
    width: '100%',
    fontFamily: 'Cardo, serif',
    fontSize: '300%',
    color: '#101010'
}

const meetingText2 = {
    position: 'absolute',
    bottom: '30%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Cardo, serif',
    fontSize: '200%',
    color: '#101010'
}

const boldName = {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
}

const meetingLogo = {
    width: '70px',
    margin: '12px'
}

export default PageIntroMobile;