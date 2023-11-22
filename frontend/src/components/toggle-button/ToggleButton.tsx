import './ToggleButton.scss'
import { useState, useEffect, useRef } from 'react';

interface iToggleButton {
  primaryColor: string;
  secondaryColor: string;
}

const ToggleButton = ({primaryColor, secondaryColor}: iToggleButton) => {
  const [toggleActive, setToggleActive] = useState(false)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    isValidColor(primaryColor) && toggleButtonRef.current && toggleButtonRef.current.style.setProperty('--toggle-primary', primaryColor)
    isValidColor(secondaryColor) && toggleButtonRef.current && toggleButtonRef.current.style.setProperty('--toggle-secondary', secondaryColor)
    console.log(isValidColor(primaryColor))
    console.log(isValidColor(secondaryColor))
  }, [primaryColor, secondaryColor])

  const isValidColor = (color: string): boolean => {
    // Regular expression to check for hex, RGB, or RGBA color formats
    const regex = /^(#(?:[0-9a-fA-F]{3}){1,2})|(rgb(a)?\((\d{1,3}%?,\s*){2}\d{1,3}%?\))|(hsl(a)?\((\d{1,3},\s*){2}\d{1,3}%?\))|([a-zA-Z]+)$/;
    return regex.test(color.trim());
  };

  const handleToggleButtonClick = () => {
    setToggleActive(!toggleActive)
  }

  return (
    <button
      className={`toggle-button ${toggleActive && 'toggle-active'}`}
      onClick={handleToggleButtonClick}
      ref={toggleButtonRef}
    >
      <div className={`background-color-div ${toggleActive && 'toggle-active'}`}></div>
      <span className="button-text">Toggle Button</span>
    </button>
  )
}
export default ToggleButton;