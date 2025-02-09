/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { styles } from '../styles';
import { services, about } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { minhafoto } from '../assets';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="beige-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#875B43] px-12 py-5"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1155);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{about.text}</p>
        <h2 className={styles.sectionHeadText}>{about.title}</h2>
        <img
          src={minhafoto}
          alt="minha_foto"
          className={`${isMobile ? 'block' : 'absolute end-12 top-12'}`}
        />
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        {about.description}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
