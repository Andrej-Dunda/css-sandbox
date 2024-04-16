import { ChangeEvent, useState } from 'react';
import ToggleButton from '../components/toggle-button/ToggleButton';
import './ToggleButtons.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import AsideMenu from '../components/aside-menu/AsideMenu';
import Checkbox from '../components/checkbox/Checkbox';
import ShowChangesButton from '../components/show-changes-button/ShowChangesButton';
import AsideMenuInput from '../components/aside-menu-input/AsideMenuInput';
import MainContent from '../components/main-content/MainContent';
import validateColor from "validate-color";
import Snackbar from '../components/snack-bar/SnackBar';

const ToggleButtons = () => {
  const [primaryColorInputValue, setPrimaryColorInputValue] = useState('white')
  const [primaryColor, setPrimaryColor] = useState('white')
  const [secondaryColorInputValue, setSecondaryColorInputValue] = useState('black')
  const [secondaryColor, setSecondaryColor] = useState('black')
  const [backgroundColorInputValue, setBackgroundColorInputValueChange] = useState('white')
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState<boolean>(true)
  const [showActiveBorderCheckboxValue, setshowActiveBorderCheckboxValue] = useState<boolean>(false)
  const [showActiveBorder, setShowActiveBorder] = useState<boolean>(false)
  const [showPassiveBorderCheckboxValue, setShowPassiveBorderCheckboxValue] = useState<boolean>(true)
  const [showPassiveBorder, setShowPassiveBorder] = useState<boolean>(true)
  const [rotateCheckboxValue, setRotateCheckboxValue] = useState<boolean>(false)
  const [rotate, setRotate] = useState<boolean>(false)
  const [primaryColorErroMessage, setPrimaryColorErrorMessage] = useState<string>('')
  const [secondarColorErroMessage, setSecondarColorErrorMessage] = useState<string>('')
  const [backgroundColorErroMessage, setBackgroundColorErrorMessage] = useState<string>('')
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('')

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
    setPrimaryColorErrorMessage('')
    setSecondarColorErrorMessage('')
    setBackgroundColorErrorMessage('')

    validateColor(primaryColorInputValue) ? setPrimaryColor(primaryColorInputValue) : setPrimaryColorErrorMessage('Invalid primary color format!')
    validateColor(secondaryColorInputValue) ? setSecondaryColor(secondaryColorInputValue) : setSecondarColorErrorMessage('Invalid secondary color format!')
    validateColor(backgroundColorInputValue) ? setBackgroundColor(backgroundColorInputValue) : setBackgroundColorErrorMessage('Invalid background color format!')

    setShowActiveBorder(showActiveBorderCheckboxValue)
    setShowPassiveBorder(showPassiveBorderCheckboxValue)

    setRotate(rotateCheckboxValue)

    showSnackbarMessage('Applied Changes!')
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

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const showSnackbarMessage = (message: string) => {
    setShowSnackbar(true)
    setSnackbarMessage(message)
  }

  const toggleRotate = () => {
    setRotateCheckboxValue(!rotateCheckboxValue)
  }

  return (
    <div className={`toggle-buttons page-container ${isAsideMenuOpen ? 'aside-menu-open' : ''}`}>
      <AsideMenu isAsideMenuOpen={isAsideMenuOpen} setIsAsideMenuOpen={setIsAsideMenuOpen}>
        <div className="change-inputs">
          <AsideMenuInput label='Primary Color:' value={primaryColorInputValue} onChange={handlePrimaryColorInputValueChange} errorMessage={primaryColorErroMessage} />
          <AsideMenuInput label='Secondary Color:' value={secondaryColorInputValue} onChange={handleSecondaryColorInputValueChange} errorMessage={secondarColorErroMessage} />
          <div className="swap-colors-wrapper" onClick={swapColor}>
            <label htmlFor="swap-colors-icon" className='swap-colors-label'>Swap Colors</label>
            <FontAwesomeIcon id='swap-colors-icon' icon={faExchange} transform={{ rotate: 90 }} />
          </div>
          <AsideMenuInput value={backgroundColorInputValue} onChange={handleBackgroundColorInputValueChange} label='Background Color:' errorMessage={backgroundColorErroMessage} />
          <div className="show-borders-wrapper">
            <Checkbox checked={showActiveBorderCheckboxValue} onToggle={toggleShowActiveBorder} label='Show Active Border' />
            <Checkbox checked={showPassiveBorderCheckboxValue} onToggle={toggleShowPassiveBorder} label='Show Passive Border' />
            <Checkbox checked={rotateCheckboxValue} onToggle={toggleRotate} label='Rotate last button' />
          </div>
          <ShowChangesButton label='Apply Changes' onClick={showChanges} />
        </div>
      </AsideMenu>
      <MainContent backgroundColor={backgroundColor}>
        <div className="toggle-buttons-wrapper">
          <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='expand expand-xy' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
          <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='expand expand-y' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
          <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='expand expand-x' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
          <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='slide' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} />
          <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='slide rotate-45' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} className='overflow-hidden' />
          <ToggleButton primaryColor={primaryColor} secondaryColor={secondaryColor} buttonType='fade' showActiveBorder={showActiveBorder} showPassiveBorder={showPassiveBorder} rotate={rotate} />
        </div>
      </MainContent>
      <Snackbar
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
      />
    </div>
  )
}
export default ToggleButtons;