import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import LunasLogo from '../../imgs/lunasLogo.png';
import LunasWord from '../../imgs/lunasWordmark.png';

function Finish() {
    const { scrollYProgress } = useViewportScroll();
    const finalLayer = useTransform(scrollYProgress, [0.86, 0.9], [0, 2]);
    const scaleX = useTransform(scrollYProgress, [0.86, 0.95], ['120vw', '0vw']);
    const scaleY = useTransform(scrollYProgress, [0.86, 0.95], ['120vw', '0vw']);
    const opacity = useTransform(scrollYProgress, [0.81, 0.9], [0, 1]);

    return(
        <motion.div style={{ ...container, opacity: opacity, zIndex: finalLayer }}>
            <img src={LunasLogo} alt="Lunas" style={images} />
            <motion.div style={{ ...closingDiv, height: scaleY, width: scaleX }}>
            </motion.div>
            <div style={copyrightElement}>
                <span>Copyright © 2020</span>
                <img src={LunasWord} alt='Lunas' style={footerLogo} />
                <span>Design</span>
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
    backgroundColor: '#101010',
}

const closingDiv = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: '#FFF'
}

const images = {
    height: '300px',
    width: '300px',
    margin: '-40px',
}

const copyrightElement = {
    zIndex: '3',
    position: 'absolute',
    bottom: '8px',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '90%',
    fontWeight: '300',
    color: '#FFF'
}

const footerLogo = {
    marginTop: '3px',
    padding: '0px 2px',
    width: '56px'
}
export default Finish;