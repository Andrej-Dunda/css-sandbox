import { ChangeEvent, useState } from 'react';
import ToggleButton from '../components/toggle-button/ToggleButton';
import './HomePage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import AsideMenu from '../components/aside-menu/AsideMenu';

const HomePage = () => {
  const [primaryColorInputValue, setPrimaryColorInputValue] = useState('black')
  const [secondaryColorInputValue, setSecondaryColorInputValue] = useState('white')
  const [primaryColor, setPrimaryColor] = useState('')
  const [secondaryColor, setSecondaryColor] = useState('')
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState<boolean>(true)

  const handlePrimaryColorInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrimaryColorInputValue(e.target.value)
  }

  const handleSecondaryColorInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondaryColorInputValue(e.target.value)
  }

  const submitNewToggleButtonColors = () => {
    setPrimaryColor(primaryColorInputValue)
    setSecondaryColor(secondaryColorInputValue)
  }

  const swapColor = () => {
    setPrimaryColorInputValue(secondaryColorInputValue)
    setSecondaryColorInputValue(primaryColorInputValue)
  }

  return (
    <div className={`homepage page-container ${isAsideMenuOpen && 'aside-menu-open'}`}>
      <AsideMenu isAsideMenuOpen={isAsideMenuOpen} setIsAsideMenuOpen={setIsAsideMenuOpen}>
        <div className="color-inputs">
          <div className="color-input-wrapper">
            <label htmlFor="primaryColorInput">Primary Color:</label>
            <input id='primaryColorInput' className='color-input' type="text" value={primaryColorInputValue} onChange={handlePrimaryColorInputValueChange} />
          </div>
          <div className="color-input-wrapper">
            <label htmlFor="secondaryColorInput">Secondary Color:</label>
            <input id='secondaryColorInput' className='color-input' type="text" value={secondaryColorInputValue} onChange={handleSecondaryColorInputValueChange} />
          </div>
          <div className="swap-colors-wrapper" onClick={swapColor}>
            <label htmlFor="swap-colors-icon" className='swap-colors-label'>Swap Colors</label>
            <FontAwesomeIcon id='swap-colors-icon' icon={faExchange} transform={{ rotate: 90 }} />
          </div>
          <button className='submit-new-colors-button' type='button' onClick={submitNewToggleButtonColors}>Change Colors</button>
        </div>
      </AsideMenu>
      <main className="main-content">
        <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </main>
    </div>
  )
}
export default HomePage;