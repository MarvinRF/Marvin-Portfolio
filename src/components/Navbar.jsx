import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { logo, menu, close } from '../assets';
import LanguageSelector from './ui/languageSelector';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { id: 'about', title: t('nav_about') },
    { id: 'work', title: t('nav_work') },
    { id: 'contact', title: t('nav_contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">Marvin Rocha</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden list-none flex-row items-center gap-10 sm:flex">
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`
                cursor-pointer text-[18px]  font-medium hover:text-white
                ${active === link.title ? 'text-white' : 'text-secondary'}
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* LanguageSelector isolado, fora dos li, para não herdar estilos */}
          <li>
            <LanguageSelector />
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="relative flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`
              ${!toggle ? 'hidden' : 'flex'}
              black-gradient absolute right-0 top-5 z-50 mx-4 my-2 min-w-[140px]
              flex-col gap-4 rounded-xl p-6
            `}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className={`
                    font-poppins cursor-pointer text-[16px] font-medium
                    ${active === link.title ? 'text-white' : 'text-secondary'}
                  `}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <LanguageSelector />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
