import React from 'react'
import './Navbar.css'
import SearchBar from '../searchbox/Search'
import { useState } from 'react'



const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languageOptions = [
    { lang: 'Eng', flag: './assets/flag.png' },
    { lang: 'Arb', flag: './assets/flag.png' },
  ];

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className='navbar'>
      <img src='./assets/arabgt.png' alt="arabgt" className="logo" />
      <div className="links">
        <li><a href="/news">News</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <li><a href="">Autotech</a></li>
        <li><a href="/more">More</a></li>
      </div>
      <div className="left">
        <SearchBar/>
        <div className="language-dropdown">
          <select className="select-dropdown" value={selectedLanguage} onChange={handleLanguageChange}>
            {languageOptions.map((language) => (
              <option key={language.lang} value={language.lang}>
                <span className="flag-icon">
                  <img src={language.flag} alt={`${language.lang} flag`} />
                </span> 
                {language.lang} 
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;




