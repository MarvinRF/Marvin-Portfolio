/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import { useLanguage } from '../context/LanguageContext';
import { manoel, victor, addson } from '../assets';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  const { t } = useLanguage();
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="w-full rounded-3xl bg-[#875B43] p-10 xs:w-[320px]"
    >
      <p className="text-[48px] font-black text-white">&quot;</p>

      <div className="mt-1">
        <p className="text-[18px] tracking-wider text-white">{testimonial}</p>

        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-[16px] font-medium text-white">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-[12px] text-secondary">
              {designation} {t('feedback_noun')} {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

FeedbackCard.propTypes = {
  index: PropTypes.number,
  testimonial: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  company: PropTypes.string,
  image: PropTypes.string,
};

const Feedbacks = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      testimonial: t('testimonials_manoel_testimonial'),
      name: t('testimonials_manoel_name'),
      designation: t('testimonials_manoel_designation'),
      company: t('testimonials_manoel_company'),
      image: manoel,
    },
    {
      testimonial: t('testimonials_addson_testimonial'),
      name: t('testimonials_addson_name'),
      designation: t('testimonials_addson_designation'),
      company: t('testimonials_addson_company'),
      image: addson,
    },
    {
      testimonial: t('testimonials_victor_testimonial'),
      name: t('testimonials_victor_name'),
      designation: t('testimonials_victor_designation'),
      company: t('testimonials_victor_company'),
      image: victor,
    },
  ];
  return (
    <div className={`mt-12 rounded-[20px] bg-[#D5B397]`}>
      <div className={`rounded-2xl bg-[#D0CAE3] ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t('feedback_text')}</p>
          <h2 className={styles.sectionHeadText}>{t('feedback_title')}</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
