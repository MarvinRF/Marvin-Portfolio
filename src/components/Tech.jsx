/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn } from '../utils/motion'; // Certifique-se de que esta função está correta

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} // Garante que a animação ocorre apenas uma vez quando 20% do item estiver visível
          className="flex h-28 w-28 items-center justify-center"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
