import './ToggleButton.scss'
import { useState, useEffect, useRef } from 'react';
import validateColor from "validate-color";

interface iToggleButton {
  primaryColor: string;
  secondaryColor: string;
  className?: string;
  buttonType: string;
  showActiveBorder: boolean;
  showPassiveBorder: boolean;
}

const ToggleButton = ({primaryColor, secondaryColor, className, buttonType, showActiveBorder, showPassiveBorder}: iToggleButton) => {
  const [toggleActive, setToggleActive] = useState(false)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    primaryColor && validateColor(primaryColor) && toggleButtonRef.current && toggleButtonRef.current.style.setProperty('--toggle-primary', primaryColor)
    secondaryColor && validateColor(secondaryColor) && toggleButtonRef.current && toggleButtonRef.current.style.setProperty('--toggle-secondary', secondaryColor)
  }, [primaryColor, secondaryColor])

  const handleToggleButtonClick = () => {
    setToggleActive(!toggleActive)
  }

  return (
    <button
      className={`toggle-button ${toggleActive && 'toggle-active'} ${className} ${showActiveBorder ? 'show-active-border' : ''} ${showPassiveBorder ? 'show-passive-border' : ''}`}
      onClick={handleToggleButtonClick}
      ref={toggleButtonRef}
    >
      <div className={`background-color-div ${buttonType}`}></div>
      <span className="button-text">Toggle Button</span>
    </button>
  )
}
export default ToggleButton;