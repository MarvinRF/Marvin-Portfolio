/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { minhafoto } from '../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="beige-gradient w-full rounded-[20px] p-[1px] shadow-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#DF6554] px-12 py-5"
      >
        <img src={icon} alt={title} className="h-16 w-16 object-contain" />
        <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  const { t } = useLanguage();

  const aboutKeys = {
    text: 'about_text',
    title: 'about_title',
    description: 'about_description',
  };

  const aboutContent = {
    text: t(aboutKeys.text),
    title: t(aboutKeys.title),
    description: t(aboutKeys.description),
  };

  useEffect(() => {
    const handleResize = () => window.innerWidth < 1155;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.div
        variants={textVariant()}
        className="relative flex flex-col items-center gap-6 lg:flex-row lg:items-start"
      >
        <div className="flex-1 text-center lg:text-left">
          <p className={styles.sectionSubText}>{aboutContent.text}</p>
          <h2 className={styles.sectionHeadText}>{aboutContent.title}</h2>
        </div>
        <div className="mx-auto h-40 w-40 flex-shrink-0 sm:h-48 sm:w-48 md:h-52 md:w-52 lg:mx-0">
          <img
            src={minhafoto}
            alt="minha_foto"
            className="h-full w-full rounded-full object-cover shadow-lg"
          />
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mx-auto mt-4 max-w-full text-center text-[17px] leading-[30px] text-secondary sm:max-w-xl md:max-w-3xl lg:mx-0 lg:text-left"
      >
        {aboutContent.description}
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10 lg:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
