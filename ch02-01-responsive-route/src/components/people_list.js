import { Link } from 'react-router-dom'
import people from 'people'

const PeopleList = () => {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          <Link to={`/people/${person.id}`}>{person.name}</Link>
        </li>
      ))}
    </ul>
  )
}
export default PeopleList
