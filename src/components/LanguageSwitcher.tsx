// components/LanguageSwitcher.tsx
import { useState } from 'react';
import { translateText } from '../Services/translateService';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en');
  const [translatedText, setTranslatedText] = useState('Hello, World!');

  const handleLanguageChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    const translated = await translateText('Hello, World!', selectedLanguage);
    setTranslatedText(translated);
  };

  return (
    <div className=''>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="pt">Brazil</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
