/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { useLanguage } from '../context/LanguageContext';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { valenca, bahia, innovats, telus, senai, wrm } from '../assets';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#875B43', color: '#875B43' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p className="text-[16px] font-semibold text-secondary" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience.point-${index}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('work_wrmt_title'),
      company_name: 'WRM Tecnologia',
      icon: wrm,
      iconBg: '#E6DEDD',
      date: t('work_wrmt_date'),
      points: t('work_wrmt_points'),
    },
    {
      title: t('work_senai_title'),
      company_name: 'Senai',
      icon: senai,
      iconBg: '#383E56',
      date: t('work_senai_date'),
      points: t('work_senai_points'),
    },
    {
      title: t('work_telus_moderator_title'),
      company_name: 'TELUS International',
      icon: telus,
      iconBg: '#E6DEDD',
      date: t('work_telus_mod_date'),
      points: t('work_telus_moderator_points'),
    },
    {
      title: t('work_innovats_title'),
      company_name: 'Innovats',
      icon: innovats,
      iconBg: '#383E56',
      date: t('work_innovats_date'),
      points: t('work_innovats_points'),
    },
    {
      title: t('work_telus_analyst_title'),
      company_name: 'TELUS International',
      icon: telus,
      iconBg: '#E6DEDD',
      date: t('work_telus_date'),
      points: t('work_telus_analyst_points'),
    },
    {
      title: t('work_bahia_title'),
      company_name: 'Colégio Estadual Gentil Paraíso Martins',
      icon: bahia,
      iconBg: '#383E56',
      date: t('work_bahia_date'),
      points: t('work_bahia_points'),
    },
    {
      title: t('work_valenca_title'),
      company_name: 'Prefeitura de Valença-Ba ',
      icon: valenca,
      iconBg: '#E6DEDD',
      date: t('work_valenca_date'),
      points: t('work_valenca_points'),
    },
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('work_section_subtext')}</p>
        <h2 className={styles.sectionHeadText}>{t('work_section_title')}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
