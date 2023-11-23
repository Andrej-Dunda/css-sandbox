import { ChangeEventHandler } from 'react';
import './AsideMenuInput.scss'
import ErrorMessage from '../error-message/ErrorMessage';

interface AsideMenuInputProps {
  className?: string;
  label?: string;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errorMessage: string;
}

const AsideMenuInput = ({ className, label, value, onChange, errorMessage }: AsideMenuInputProps) => {
  return (
    <div className={`aside-menu-input ${className}`}>
      <label htmlFor="aside-menu-input-element" className='aside-menu-label'>{label}</label>
      <input id='aside-menu-input-element' className='aside-menu-input-element' type="text" value={value} onChange={onChange} />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  )
}
export default AsideMenuInput;