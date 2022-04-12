import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {name, id, teamImageUrl} = teamCard
  return (
    <Link to={`/team-matches/${id}`} className="nav-link">
      <li className="team-card-logo-container">
        <img className="card-logo" src={teamImageUrl} alt="id" />
        <p className="card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
