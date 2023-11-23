import { ChangeEvent, useState } from 'react';
import ToggleButton from '../components/toggle-button/ToggleButton';
import './HomePage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import AsideMenu from '../components/aside-menu/AsideMenu';
import Checkbox from '../components/checkbox/Checkbox';
import ShowChangesButton from '../components/show-changes-button/ShowChangesButton';

const HomePage = () => {
  const [primaryColorInputValue, setPrimaryColorInputValue] = useState('black')
  const [secondaryColorInputValue, setSecondaryColorInputValue] = useState('white')
  const [primaryColor, setPrimaryColor] = useState('')
  const [secondaryColor, setSecondaryColor] = useState('')
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState<boolean>(true)
  const [showActiveBorderCheckboxValue, setshowActiveBorderCheckboxValue] = useState<boolean>(false)
  const [showActiveBorder, setShowActiveBorder] = useState<boolean>(false)
  const [showPassiveBorderCheckboxValue, setShowPassiveBorderCheckboxValue] = useState<boolean>(true)
  const [showPassiveBorder, setShowPassiveBorder] = useState<boolean>(true)

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

  const toggleShowActiveBorder = () => {
    setshowActiveBorderCheckboxValue(!showActiveBorderCheckboxValue)
  }

  const toggleShowPassiveBorder = () => {
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
          <div className="show-borders-wrapper">
            <Checkbox checked={showActiveBorderCheckboxValue} onToggle={toggleShowActiveBorder} label='Show Active Checkbox' />
            <Checkbox checked={showPassiveBorderCheckboxValue} onToggle={toggleShowPassiveBorder} label='Show Passive Border' />
          </div>
          <ShowChangesButton label='Show Changes' onClick={showChanges} />
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