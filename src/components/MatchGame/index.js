/* eslint-disable react/sort-comp */
import {Component} from 'react'
import Navbar from '../NavBar/index'
import Tabs from '../Tabs/index'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {tabsList} = this.props
    this.state = {timer: 60, activeTabId: tabsList[0].tabId}
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState(prevState => ({
      timer: prevState.timer - 1,
    }))
  }

  render() {
    const {timer, activeTabId} = this.state
    const {tabsList, imagesList} = this.props
    return (
      <div className="main-container">
        <Navbar timer={timer} />
        <div className="top-container">
          <p>image</p>
          <ul className="tabs-container">
            {tabsList.map(tabDetails => (
              <Tabs
                key={tabDetails.tabId}
                tabDetails={tabDetails}
                clickTabItem={this.clickTabItem}
                isActive={activeTabId === tabDetails.tabId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MatchGame
