import './index.css'

const MatchCard = props => {
  const {each} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = each
  return (
    <li className="matchCardItemsContainer">
      <img
        className="matchCardLogo"
        src={competingTeamLogo}
        alt="competing_team_logo"
      />
      <p className="matchCardHeading">{competingTeam}</p>
      <p className="matchCardResult">{result}</p>
      <p className={`matchCardStatus ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
