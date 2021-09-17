// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeHeadingClassName = isDarkTheme
        ? 'home-heading-text-light'
        : 'home-heading-text-dark'

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'
      return (
        <div className={`home-app-container ${homeBgClassName}`}>
          <Navbar />
          <div className="home-responsive-container">
            <div className="home-container">
              <img src={homeImageUrl} alt="home" className="home-img" />
              <h1 className={`home-heading ${homeHeadingClassName} `}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
