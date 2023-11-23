import { ReactNode } from 'react';
import './MainContent.scss'
import validateColor from "validate-color";

interface iMainContent {
  className?: string;
  children: ReactNode
  backgroundColor?: string;
}

const MainContent = ({ className, children, backgroundColor }: iMainContent) => {
  return (
    <main
      className={`main-content ${className}`}
      style={{backgroundColor: backgroundColor && validateColor(backgroundColor) ? backgroundColor : 'transparent'}}
    >
      {children}
    </main>
  )
}
export default MainContent;