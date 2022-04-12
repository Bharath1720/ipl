import './index.css'

import {Component} from 'react'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  // Maintaing the state
  state = {
    displayMatchData: {},
  }

  //  Calling the function to get the speciofied path
  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      // Here we got the data in the snake case
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    // Coverting the snake case to camelcase
    const {latestMatchDetails, recentMatches} = updatedData
    const newLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    // Coverting the snake case to camelcase
    const newRecentMatches = {
      competingTeam: recentMatches.competing_team,
      competingTeamLogo: recentMatches.competing_team_logo,
      date: recentMatches.date,
      firstInnings: recentMatches.first_innings,
      id: recentMatches.id,
      manOfTheMatch: recentMatches.man_of_the_match,
      matchStatus: recentMatches.match_status,
      result: recentMatches.result,
      secondInnings: recentMatches.second_innings,
      umpires: recentMatches.umpires,
      venue: recentMatches.venue,
    }

    const updatedDetails = {
      // Merging the data with the updated camelCase
      ...updatedData,
      latestMatchDetails: newLatestMatchDetails,
      recentMatches: newRecentMatches,
    }

    this.setState({
      displayMatchData: updatedDetails,
    })
  }

  render() {
    const {displayMatchData} = this.state
    const {teamBannerUrl, latestMatchDetails} = displayMatchData

    return (
      <>
        <div className="main-match-container">
          <img src={teamBannerUrl} alt="1234" />
          {/* <p>{JSON.stringify(latestMatchDetails)}</p> */}
        </div>
        <div>
          <LatestMatch latestData={latestMatchDetails} />
        </div>
      </>
    )
  }
}

export default TeamMatches
