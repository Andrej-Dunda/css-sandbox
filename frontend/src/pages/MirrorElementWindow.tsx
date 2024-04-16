import MirrorElement from '../components/mirrored-element/MirrorElement';
import './MirrorElementWindow.scss';

import React from 'react'

const MirrorElementWindow = () => {
  return (
    <div className='mirror-element-window'>
      <MirrorElement>
        <button className="mirrored-button">
          Click me!
        </button>
      </MirrorElement>
    </div>
  )
}

export default MirrorElementWindow
