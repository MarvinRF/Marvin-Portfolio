/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { contact } from '../constants';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import R2D2Canvas from './canvas/R2D2';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_y1ky81a',
        'template_c67r7wu',

        {
          from_name: form.name,
          to_name: 'Marvin Rocha',
          from_email: form.email,
          to_email: 'marvinvca@outlook.com',
          message: form.message,
        },
        'b6HmjeVeq6Dt6A-yt'
      )
      .then(
        () => {
          setLoading(false);
          alert(`${contact.alert}`);

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        error => {
          setLoading(false);

          console.log(error);

          alert(`${contact.alert_error}`);
        }
      );
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-[#D5B397] p-8"
      >
        <p className={styles.sectionSubText}>{t('contact_text')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact_title')}</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">{t('contact_camp_name')}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact_camp_name_placeholder')}
              className="rounded-lg border-none bg-[#F0D1B8] px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">{t('contact_camp_email')}</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact_camp_email_placeholder')}
              className="rounded-lg border-none bg-[#F0D1B8] px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">{t('contact_camp_message')}</span>
            <textarea
              rows={7}
              name="message"
              autoComplete="off"
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact_camp_message_placeholder')}
              className="rounded-lg border-none bg-[#F0D1B8] px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-[#F0D1B8] px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
          >
            {loading ? t('contact_button_sending') : t('contact_button_send')}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <R2D2Canvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
