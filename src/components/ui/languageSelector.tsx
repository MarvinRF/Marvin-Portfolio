'use client';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './dropdown-menu';
import { useLanguage } from '../../context/LanguageContext';
import { CheckIcon } from 'lucide-react';
import { cn } from '../../utils/classnames';

const languages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'me-2 flex w-[200] items-center justify-between rounded-md py-2 font-semibold text-white hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        )}
        aria-label="Select language"
      >
        {languages.find(l => l.code === language)?.label || 'Idioma'}
        <svg
          className="h-5 w-5"
          style={{ marginLeft: '15px' }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-36 p-1 text-white"
        style={{
          width: '150px',
          backgroundColor: '#F0D1B8',
          borderRadius: '6px',
          padding: '6px',
          position: 'relative',
        }}
      >
        {languages.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => setLanguage(code as 'pt' | 'en')}
            className={cn(
              'relative cursor-pointer select-none rounded-sm px-2 py-1 text-sm',
              language === code ? 'font-bold' : 'font-normal'
            )}
          >
            <span className={language === code ? 'pl-5' : ''} style={{ marginRight: '30px' }}>
              {label}
            </span>
            {language === code && (
              <CheckIcon className="h-4 w-4" style={{ position: 'absolute', right: '0' }} />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
