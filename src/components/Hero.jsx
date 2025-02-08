import { motion } from 'framer-motion';
import { initial } from '../constants';
import { styles } from '../styles';
import Bb8Canvas from './canvas/BB8';

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px]  mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#F0D1B8]" />
          <div className="beige-gradient h-40 w-1 sm:h-80" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {initial.title}
            <span className="text-[#F0D1B8]">{initial.span}</span>
          </h1>
          <p
            className={`${styles.heroSubText} text-swadow-lg mt-2 text-white-100`}
          >
            {initial.text} <br className="hidden sm:block" />
            <span className="hidden sm:block">{initial.text2}</span>
          </p>
        </div>
      </div>

      <Bb8Canvas />

      <div className="absolute bottom-20 flex w-full items-center justify-center sm:bottom-8">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-zinc-500 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="mb-1 h-3 w-3 rounded-full bg-zinc-500"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
