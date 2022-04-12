import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamCardData: [],
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    let data = await response.json()
    data = data.teams

    const updatedData = data.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))

    this.setState({
      teamCardData: updatedData,
    })
  }

  render() {
    const {teamCardData} = this.state
    return (
      <div className="home-container">
        <div className="dashboard-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl-logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul>
          {teamCardData.map(each => (
            <TeamCard key={each.id} teamCard={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
