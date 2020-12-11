import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import ContactImage from '../../pages/contactme/contactBackground.png';
import Arrow from '../../imgs/LunasArrowWhite.png';

function ContactSection() {
    const { scrollYProgress } = useViewportScroll();
    const clickability = useTransform(scrollYProgress, [0.67, 0.68, 0.83, 0.84], [0, 1, 1, 0]);
    const slideY = useTransform(scrollYProgress, [0.72, 0.76, 0.82, 0.86], ['35%', '40%', '40%', '40%']);
    const imgOpacity = useTransform(scrollYProgress, [0.66, 0.7, 0.82, 0.9], [0, 0.6, 0.6, 0]);
    const opacity = useTransform(scrollYProgress, [0.72, 0.76, 0.82, 0.9], [0, 1, 1, 0]);

    return(
        <motion.div className='sectionContainer' style={{ zIndex: clickability }}>
            <motion.div style={{ ...workImg, opacity: imgOpacity }}></motion.div>
            <motion.div style={{ ...aboutLink, bottom: slideY, opacity: opacity }}>
                <h2 className='sectionHeader'>
                    Let's talk!
                </h2>
                <Link to='/contact' className='sectionLink'>
                        Contact Me <img src={Arrow} alt="Arrow" className='sectionLinkArrow' />
                </Link>
            </motion.div>
        </motion.div>
    )
}

const workImg = {
    position: 'fixed',
    top: '-8%',
    left: '-16%',
    height: '150%',
    width: '150%',
    backgroundImage: `url('${ContactImage}')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
}

const aboutLink = {
    position: 'fixed',
    left: '8%',
    width: '36%',
}

export default ContactSection;