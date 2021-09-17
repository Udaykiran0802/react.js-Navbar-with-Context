// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutHeadingTextClassName = isDarkTheme
        ? 'about-heading-text-light'
        : 'about-heading-text-dark'

      return (
        <div className={`about-app-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="about-responsive-container">
            <div className="about-container">
              <img src={aboutImageUrl} alt="about" className="about-img" />
              <h1 className={`about-heading ${aboutHeadingTextClassName}`}>
                About
              </h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
