import Media from 'react-media'
import { Navigate, Route, Routes } from 'react-router-dom'
import Person from 'components/person'
import PeopleList from 'components/people_list'
import people from 'people'

const PeopleContainer = () => {
  return (
    <Media queries={{
      small: '(max-width: 700px)',
    }}>
    {
      size => size.small ? (
        <Routes>
          <Route path=":id" element={<Person />} />
          <Route path="/*" element={<PeopleList />} />
        </Routes>    
      ) : (
        <div style={{display: 'flex'}}>
          <PeopleList />
          <Routes>
            <Route path=":id" element={<Person />} />
            <Route path="/*" element={<Navigate to={`/people/${people[0].id}`} />} />
          </Routes>
        </div>
      )
    }
    </Media>
  )
}
export default PeopleContainer
