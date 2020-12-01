import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import ResumeImage from '../../pages/resume/woodBackground.png';
import Arrow from '../../imgs/LunasArrowWhite.png';

function ResumeSection() {
    const { scrollYProgress } = useViewportScroll();
    const clickability = useTransform(scrollYProgress, [0.51, 0.52, 0.67, 0.68], [0, 1, 1, 0]);
    const slideY = useTransform(scrollYProgress, [0.48, 0.52, 0.66, 0.7], ['35%', '40%', '40%', '45%']);
    const imgOpacity = useTransform(scrollYProgress, [0.48, 0.52, 0.66, 0.7], [0, 0.6, 0.6, 0]);
    const opacity = useTransform(scrollYProgress, [0.48, 0.52, 0.66, 0.7], [0, 1, 1, 0]);

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
    top: '-8%',
    left: '-16%',
    height: '150%',
    width: '150%',
    backgroundImage: `url('${ResumeImage}')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
}

const aboutLink = {
    position: 'fixed',
    right: '20%',
    width: '36%',
}

export default ResumeSection;