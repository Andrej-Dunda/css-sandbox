import { ReactNode } from 'react';
import './MainContent.scss'

interface iMainContent {
  className?: string;
  children: ReactNode
  backgroundColor?: string;
}

const MainContent = ({ className, children, backgroundColor }: iMainContent) => {
  return (
    <main className={`main-content ${className}`} style={{backgroundColor: backgroundColor ? backgroundColor : 'white'}} >
      {children}
    </main>
  )
}
export default MainContent;