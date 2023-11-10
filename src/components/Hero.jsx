import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { inicio } from '../constants';
import { styles } from '../styles';
import { ReactCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px]  mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#03fefd]" />
          <div className="cyan-gradient h-40 w-1 sm:h-80" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {inicio.title}
            <span className="text-[#03fefd]">{inicio.span}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {inicio.text} <br className="hidden sm:block" />
            {inicio.text2}
          </p>
        </div>
      </div>

      <ReactCanvas />

      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

Hero.propTypes = {
  inicio: PropTypes.shape({
    title: PropTypes.string,
    span: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Hero;
