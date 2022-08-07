import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div className="homeContainer">
        <div className="homeHeadingContainer">
          <img
            className="homeLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="homeHeading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teamCardContainer">
            {teamList.map(each => (
              <TeamCard each={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
