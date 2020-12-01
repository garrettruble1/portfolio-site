import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import AboutImage from '../../pages/aboutme/aboutMeBackground.png';
import Arrow from '../../imgs/LunasArrowWhite.png';

function AboutSectionM() {
    const { scrollYProgress } = useViewportScroll();
    const clickability = useTransform(scrollYProgress, [0.16, 0.20, 0.35, 0.36], [0, 1, 1, 0]);
    const slideX = useTransform(scrollYProgress, [0.16, 0.24, 0.31, 0.39], ['-25%', '-75%', '-75%', '-75%']);
    const slideY = useTransform(scrollYProgress, [0.16, 0.24, 0.31, 0.39], ['35%', '50%', '50%', '55%']);
    const imgOpacity = useTransform(scrollYProgress, [0.16, 0.24, 0.31, 0.39], [0, 0.6, 0.6, 0]);
    const opacity = useTransform(scrollYProgress, [0.16, 0.24, 0.31, 0.39], [0, 1, 1, 0]);

    return(
        <motion.div className='sectionContainer' style={{ zIndex: clickability }}>
            <motion.div style={{ ...aboutImg, left: slideX, opacity: imgOpacity }}></motion.div>
            <motion.div style={{ ...aboutLink, bottom: slideY, opacity: opacity }}>
                <h2 className='sectionHeader'>
                    Let me introduce myself!
                </h2>
                <Link to='/aboutme' className='sectionLink'>
                        About Me <img src={Arrow} alt="Arrow" className='sectionLinkArrow' />
                </Link>
            </motion.div>
        </motion.div>
    )
}

const aboutImg = {
    position: 'fixed',
    top: '-50%',
    height: '200%',
    width: '200%',
    backgroundImage: `url('${AboutImage}')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
}

const aboutLink = {
    position: 'fixed',
    left: '8%',
    width: '80%',
}

export default AboutSectionM;