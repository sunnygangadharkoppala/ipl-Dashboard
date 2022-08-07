import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    matchCardList: [],
    TeamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchCardList()
  }

  getMatchCardList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const updatedMatchCardList = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    const updatedTeamBannerUrl = data.team_banner_url
    console.log(updatedLatestMatchDetails)
    this.setState({
      latestMatchDetails: updatedLatestMatchDetails,
      matchCardList: updatedMatchCardList,
      TeamBannerUrl: updatedTeamBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {
      matchCardList,
      TeamBannerUrl,
      latestMatchDetails,
      isLoading,
    } = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="TeamMatchContainer">
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div className="teamMatchInnerContainer">
            <img
              className="teamBannerImage"
              src={TeamBannerUrl}
              alt="team banner"
            />
            <h1 className="teamMatchHeading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="matchCardContainer">
              {matchCardList.map(each => (
                <MatchCard key={each.id} each={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
