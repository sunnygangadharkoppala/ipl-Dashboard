import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latestMatchContainer">
      <div className="latestMatchLeftText">
        <p className="latestMatchHeading">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="latestMatchLogo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="latestMatchRightText">
        <p className="secondHeading">First Innings</p>
        <p>{firstInnings}</p>
        <p className="secondHeading">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="secondHeading">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="secondHeading">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
