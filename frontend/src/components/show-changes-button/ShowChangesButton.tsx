import { MouseEventHandler } from 'react';
import './ShowChangesButton.scss'

interface iShowChangesButton {
  onClick: MouseEventHandler<any>;
  label?: string;
  className?: string;
}

const ShowChangesButton = ({ label, className, onClick }: iShowChangesButton) => {
  return (
    <button className={`show-changes-button ${className}`} type='button' onClick={onClick}>
      {label}
    </button>
  )
}
export default ShowChangesButton;