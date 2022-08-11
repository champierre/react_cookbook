import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PeopleContainer from 'components/people_container'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/people/*" element={<PeopleContainer />} />
        <Route path="/*" element={
          <Link to="/people">People</Link>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
