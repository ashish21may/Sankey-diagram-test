import React from 'react'
import '../styles/Header.css'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { i18n } = useTranslation()

  const handleOnClick = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('hin')
    } else {
      i18n.changeLanguage('en')
    }
  }

  return (
    <div className='header'>
      <div data-testid='centime-header' className='header-text'>
        Centime
      </div>
      <button
        className='header-language-button'
        data-testid='language-button'
        onClick={handleOnClick}
      > {i18n.language}
      </button>
    </div>
  )
}

export default Header
