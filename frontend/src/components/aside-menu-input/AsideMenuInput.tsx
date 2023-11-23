import { ChangeEventHandler } from 'react';
import './AsideMenuInput.scss'

interface iAsideMenuInput {
  className?: string;
  label?: string;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const AsideMenuInput = ({ className, label, value, onChange }: iAsideMenuInput) => {
  return (
    <div className={`aside-menu-input ${className}`}>
      <label htmlFor="aside-menu-input-element" className='aside-menu-label'>{label}</label>
      <input id='aside-menu-input-element' className='aside-menu-input-element' type="text" value={value} onChange={onChange} />
    </div>
  )
}
export default AsideMenuInput;