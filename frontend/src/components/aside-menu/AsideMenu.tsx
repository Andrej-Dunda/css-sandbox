import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AsideMenu.scss'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AsideMenu = (props: any) => {
  const toggleAsideMenu = () => {
    props.setIsAsideMenuOpen(!props.isAsideMenuOpen)
  }

  return (
    <aside className={`aside-menu ${props.className ? props.className : ''} ${props.isAsideMenuOpen ? 'open' : ''}`}>
      <div className="aside-main">
        <div className="aside-main-container">
          {props.children}
        </div>
      </div>
      <div className="aside-aside">
        <button className="toggle-side-menu-button" onClick={toggleAsideMenu}>
          <FontAwesomeIcon icon={props.isAsideMenuOpen ? faChevronRight : faChevronLeft} className='toggle-side-menu-icon' />
        </button>
      </div>
    </aside>
  )
}
export default AsideMenu;