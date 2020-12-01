import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import WorkImage from '../../pages/mywork/portfolioBackground.png';
import Arrow from '../../imgs/LunasArrowWhite.png';

function WorkSection() {
    const { scrollYProgress } = useViewportScroll();
    const clickability = useTransform(scrollYProgress, [0.35, 0.36, 0.51, 0.52], [0, 1, 1, 0]);
    const slideY = useTransform(scrollYProgress, [0.34, 0.38, 0.50, 0.54], ['35%', '40%', '40%', '45%']);
    const imgOpacity = useTransform(scrollYProgress, [0.34, 0.38, 0.50, 0.54], [0, 0.8, 0.8, 0]);
    const opacity = useTransform(scrollYProgress, [0.34, 0.38, 0.50, 0.54], [0, 1, 1, 0]);

    return(
        <motion.div className='sectionContainer' style={{ zIndex: clickability }}>
            <motion.div style={{ ...workImg, opacity: imgOpacity }}></motion.div>
            <motion.div style={{ ...aboutLink, bottom: slideY, opacity: opacity }}>
                <h2 className='sectionHeader'>
                    See what I can do!
                </h2>
                <Link to='/mywork' className='sectionLink'>
                        My Work <img src={Arrow} alt="Arrow" className='sectionLinkArrow' />
                </Link>
            </motion.div>
        </motion.div>
    )
}

const workImg = {
    position: 'fixed',
    top: '-8%',
    left: '-4%',
    height: '110%',
    width: '110%',
    backgroundImage: `url('${WorkImage}')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
}

const aboutLink = {
    position: 'fixed',
    left: '8%',
    width: '36%',
}

export default WorkSection;