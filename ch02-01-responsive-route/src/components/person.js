import { useParams } from 'react-router-dom'
import people from 'people'

const Person = () => {
  const { id } = useParams()
  const person = people.filter((p) => p.id === id)[0]
  return (
    <div>
      <h1>{person.name}</h1>
      <label>ID:</label>
      <div>{id}</div>
      <label>Address:</label>
      <div>{person.address}</div>
      <label>Department:</label>
      <div>{person.department}</div>
    </div>
  )
}
export default Person
