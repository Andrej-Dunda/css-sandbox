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
  const [showActiveBorderCheckboxValue, setshowActiveBorderCheckboxValue] = useState<boolean>(false)
  const [showActiveBorder, setShowActiveBorder] = useState<boolean>(false)
  const [showPassiveBorderCheckboxValue, setShowPassiveBorderCheckboxValue] = useState<boolean>(false)
  const [showPassiveBorder, setShowPassiveBorder] = useState<boolean>(false)

  const handlePrimaryColorInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrimaryColorInputValue(e.target.value)
  }

  const handleSecondaryColorInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondaryColorInputValue(e.target.value)
  }

  const showChanges = () => {
    setPrimaryColor(primaryColorInputValue)
    setSecondaryColor(secondaryColorInputValue)
    setShowActiveBorder(showActiveBorderCheckboxValue)
    setShowPassiveBorder(showPassiveBorderCheckboxValue)
  }

  const swapColor = () => {
    setPrimaryColorInputValue(secondaryColorInputValue)
    setSecondaryColorInputValue(primaryColorInputValue)
  }

  const toggleshowActiveBorder = (e: ChangeEvent<HTMLInputElement>) => {
    setshowActiveBorderCheckboxValue(!showActiveBorderCheckboxValue)
  }

  const toggleshowPassiveBorder = (e: ChangeEvent<HTMLInputElement>) => {
    setShowPassiveBorderCheckboxValue(!showPassiveBorderCheckboxValue)
  }

  return (
    <div className={`homepage page-container ${isAsideMenuOpen && 'aside-menu-open'}`}>
      <AsideMenu isAsideMenuOpen={isAsideMenuOpen} setIsAsideMenuOpen={setIsAsideMenuOpen}>
        <div className="change-inputs">
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
          <div className="toggle-border-wrapper">
            <input type="checkbox" id='show-active-border-checkbox' checked={showActiveBorderCheckboxValue} onChange={toggleshowActiveBorder} />
            <label htmlFor="show-active-border-checkbox">Show Active Border</label>
          </div>
          <div className="toggle-border-wrapper">
            <input type="checkbox" id='show-passive-border-checkbox' checked={showPassiveBorderCheckboxValue} onChange={toggleshowPassiveBorder} />
            <label htmlFor="show-passive-border-checkbox">Show Passive Border</label>
          </div>
          <button className='submit-new-colors-button' type='button' onClick={showChanges}>Show Changes</button>
        </div>
      </AsideMenu>
      <main className="main-content">
        <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='expand expand-xy' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
        <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='expand expand-y' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
        <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='expand expand-x' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
        <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='fade' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
      </main>
    </div>
  )
}
export default HomePage;