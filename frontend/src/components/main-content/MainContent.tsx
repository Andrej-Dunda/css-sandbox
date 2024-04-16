import { ReactNode } from 'react';
import './MainContent.scss'
import validateColor from "validate-color";

interface MainContentProps {
  className?: string;
  children: ReactNode
  backgroundColor?: string;
}

const MainContent = ({ className, children, backgroundColor }: MainContentProps) => {
  return (
    <main
      className={`main-content ${className ? className : ''}`}
      style={{backgroundColor: backgroundColor && validateColor(backgroundColor) ? backgroundColor : 'transparent'}}
    >
      {children}
    </main>
  )
}
export default MainContent;