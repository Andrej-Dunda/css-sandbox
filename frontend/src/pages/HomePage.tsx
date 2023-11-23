import { ChangeEvent, useState } from 'react';
import ToggleButton from '../components/toggle-button/ToggleButton';
import './HomePage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import AsideMenu from '../components/aside-menu/AsideMenu';
import Checkbox from '../components/checkbox/Checkbox';
import ShowChangesButton from '../components/show-changes-button/ShowChangesButton';
import AsideMenuInput from '../components/aside-menu-input/AsideMenuInput';
import MainContent from '../components/main-content/MainContent';

const HomePage = () => {
  const [primaryColorInputValue, setPrimaryColorInputValue] = useState('black')
  const [secondaryColorInputValue, setSecondaryColorInputValue] = useState('white')
  const [primaryColor, setPrimaryColor] = useState('')
  const [secondaryColor, setSecondaryColor] = useState('')
  const [backgroundColorInputValue, setBackgroundColorInputValueChange] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')
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

  const handleBackgroundColorInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBackgroundColorInputValueChange(e.target.value)
  }

  const showChanges = () => {
    setPrimaryColor(primaryColorInputValue)
    setSecondaryColor(secondaryColorInputValue)
    setShowActiveBorder(showActiveBorderCheckboxValue)
    setShowPassiveBorder(showPassiveBorderCheckboxValue)
    setBackgroundColor(backgroundColorInputValue)
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
          <AsideMenuInput label='Primary Color:' value={primaryColorInputValue} onChange={handlePrimaryColorInputValueChange} />
          <AsideMenuInput label='Secondary Color:' value={secondaryColorInputValue} onChange={handleSecondaryColorInputValueChange} />
          <div className="swap-colors-wrapper" onClick={swapColor}>
            <label htmlFor="swap-colors-icon" className='swap-colors-label'>Swap Colors</label>
            <FontAwesomeIcon id='swap-colors-icon' icon={faExchange} transform={{ rotate: 90 }} />
          </div>
          <AsideMenuInput value={backgroundColorInputValue} onChange={handleBackgroundColorInputValueChange} label='Background Color:' />
          <div className="show-borders-wrapper">
            <Checkbox checked={showActiveBorderCheckboxValue} onToggle={toggleShowActiveBorder} label='Show Active Checkbox' />
            <Checkbox checked={showPassiveBorderCheckboxValue} onToggle={toggleShowPassiveBorder} label='Show Passive Border' />
          </div>
          <ShowChangesButton label='Show Changes' onClick={showChanges} />
        </div>
      </AsideMenu>
      <MainContent backgroundColor={backgroundColor}>
        <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='expand expand-xy' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
        <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='expand expand-y' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
        <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='expand expand-x' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
        <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='fade' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
      </MainContent>
    </div>
  )
}
export default HomePage;