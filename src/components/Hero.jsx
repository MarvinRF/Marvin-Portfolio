import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relatie h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl 
      ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">Marvin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a junior web developer <br className="hidden sm:block" />
            specializing in creating modern and responsive websites.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
