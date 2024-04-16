import './MirrorElement.scss'
import React, { ReactNode } from 'react'

type MirrorElementProps = {
  children: ReactNode;
}

const MirrorElement = ({children}: MirrorElementProps) => {
  return (
    <div className='mirror-element'>
      <div className="original-element">
        {children}
      </div>
      <div className="mirrored-element">
        <div className="mirrored-element-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MirrorElement
