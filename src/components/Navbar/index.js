import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navBarBgClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'

      const navItemClassName = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-them'

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={`navbar ${navBarBgClassName}`}>
          <div className="navbar-content">
            <img
              className="website-logo"
              src={websiteLogo}
              alt="website logo"
            />
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              className="theme-button"
              type="button"
              onClick={onToggleTheme}
              testid="theme"
            >
              <img src={themeImageUrl} alt="theme" className="theme-image" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
