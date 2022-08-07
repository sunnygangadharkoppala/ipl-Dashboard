import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {each} = props
  const {id, name, teamImageUrl} = each
  return (
    <Link to={`/team-matches/${id}`} className="LinkContainer">
      <li className="cardContainer">
        <img className="cardImage" src={teamImageUrl} alt={name} />
        <p className="cardHeading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
