import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import ResumeImage from '../../pages/resume/woodBackground.png';
import Arrow from '../../imgs/LunasArrowWhite.png';

function ResumeSection() {
    const { scrollYProgress } = useViewportScroll();
    const clickability = useTransform(scrollYProgress, [0.51, 0.52, 0.67, 0.68], [0, 1, 1, 0]);
    const slideY = useTransform(scrollYProgress, [0.54, 0.56, 0.66, 0.7], ['35%', '50%', '50%', '55%']);
    const imgOpacity = useTransform(scrollYProgress, [0.48, 0.52, 0.66, 0.7], [0, 0.6, 0.6, 0]);
    const opacity = useTransform(scrollYProgress, [0.54, 0.56, 0.66, 0.7], [0, 1, 1, 0]);

    return(
        <motion.div className='sectionContainer' style={{ zIndex: clickability }}>
            <motion.div style={{ ...workImg, opacity: imgOpacity }}></motion.div>
            <motion.div style={{ ...aboutLink, bottom: slideY, opacity: opacity }}>
                <h2 className='sectionHeader'>
                    Review my credentials!
                </h2>
                <Link to='/resume' className='sectionLink'>
                        Resume <img src={Arrow} alt="Arrow" className='sectionLinkArrow' />
                </Link>
            </motion.div>
        </motion.div>
    )
}

const workImg = {
    position: 'fixed',
    top: '-130%',
    left: '-16%',
    height: '360%',
    width: '360%',
    backgroundImage: `url('${ResumeImage}')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
}

const aboutLink = {
    position: 'fixed',
    left: '8%',
    width: '80%',
}

export default ResumeSection;