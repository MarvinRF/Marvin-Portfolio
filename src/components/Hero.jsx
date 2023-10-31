import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <div
      className={`absolute inset-0 top-[120px] mx-auto max-w-7xl 
      ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className="mt-5 flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default Hero;
