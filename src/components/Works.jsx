/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { styles } from '../styles';
import { github } from '../assets';
import { vercel } from '../assets';
import { SectionWrapper } from '../hoc';
//import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { useLanguage } from '../context/LanguageContext';

import { codeforge, efod, eplay, todo } from '../assets';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  vercel_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full rounded-2xl bg-[#875B43] p-5 sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open(vercel_code_link, '_blank')}
              className="black-gradient me-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img src={vercel} alt={vercel} className="h-1/2 w-1/2 object-contain" />
            </div>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img src={github} alt={github} className="h-1/2 w-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  vercel_code_link: PropTypes.string,
};

const Works = () => {
  const { t } = useLanguage();

  const projects = [
    {
      name: t('projects_codeforge_name'),
      description: t('projects_codeforge_description'),
      tags: [
        { name: 'Next.js', color: 'blue-text-gradient' },
        { name: 'Tailwind', color: 'green-text-gradient' },
        { name: 'GSAP', color: 'blue-text-gradient' },
        { name: 'Fullstack', color: 'pink-text-gradient' },
      ],
      image: codeforge,
      source_code_link: 'https://github.com/MarvinRF/',
      vercel_code_link: 'https://www.codeforgeacademy.com.br/',
    },
    {
      name: t('projects_efood_name'),
      description: t('projects_efood_description'),
      tags: [
        { name: 'React', color: 'blue-text-gradient' },
        { name: 'vite', color: 'green-text-gradient' },
      ],
      image: efod,
      source_code_link: 'https://github.com/MarvinRF/e-food-app',
      vercel_code_link: 'https://e-food-app-rho.vercel.app/',
    },
    {
      name: t('projects_eplay_name'),
      description: t('projects_eplay_description'),
      tags: [
        { name: 'React', color: 'blue-text-gradient' },
        { name: 'vite', color: 'green-text-gradient' },
      ],
      image: eplay,
      source_code_link: 'https://github.com/MarvinRF/E-play-Store',
      vercel_code_link: 'https://e-play-store-plum.vercel.app/',
    },
    {
      name: t('projects_iphone15_name'),
      description: t('projects_iphone15_description'),
      tags: [
        { name: 'React', color: 'blue-text-gradient' },
        { name: 'Tailwind', color: 'green-text-gradient' },
        { name: 'Three.js', color: 'pink-text-gradient' },
        { name: 'GSAP', color: 'blue-text-gradient' },
      ],
      image: todo,
      source_code_link: 'https://github.com/MarvinRF/apple-website',
      vercel_code_link: 'https://apple-website-sooty.vercel.app/',
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('works_section_subtext')}</p>
        <h2 className={styles.sectionHeadText}>{t('works_section_title')}</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          {t('works_section_description')}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
