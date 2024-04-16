import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='homepage'>
      homepage
      <button onClick={() => navigate('/toggle-buttons')}>Go to Toggle Buttons</button>
      <button onClick={() => navigate('/mirror-element')}>Go to Mirror Element</button>
    </div>
  )
}

export default HomePage
