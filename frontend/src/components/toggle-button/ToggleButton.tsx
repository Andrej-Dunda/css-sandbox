import './ToggleButton.scss'
import { useState, useEffect, useRef } from 'react';
import validateColor from "validate-color";

interface ToggleButtonProps {
  primaryColor: string;
  secondaryColor: string;
  className?: string;
  buttonType: string;
  showActiveBorder: boolean;
  showPassiveBorder: boolean;
  rotate?: boolean;
}

const ToggleButton = ({ primaryColor, secondaryColor, className, buttonType, showActiveBorder, showPassiveBorder, rotate = false }: ToggleButtonProps) => {
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
      className={`toggle-button ${toggleActive ? 'toggle-active' : ''} ${rotate ? 'rotate' : ''} ${className ? className : ''} ${showActiveBorder ? 'show-active-border' : ''} ${showPassiveBorder ? 'show-passive-border' : ''} ${buttonType === 'slide rotate-45' ? 'shadow-box' : ''}`}
      onClick={handleToggleButtonClick}
      ref={toggleButtonRef}
    >
      <div className={`background-color-div ${buttonType}`}></div>
      <span className="button-text">Toggle Button</span>
    </button>
  )
}
export default ToggleButton;