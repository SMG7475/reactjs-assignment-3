import './index.css'

const NavBar = props => {
  const {timer} = props
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <div className="score-timer-container">
        <p>Score: 0</p>
        <div className="timer-container">
          <img
            className="timer-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{timer}</p>
        </div>
      </div>
    </div>
  )
}
export default NavBar
