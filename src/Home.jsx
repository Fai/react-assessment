import { useState } from 'react';
import User from './User';
import Admin from './Admin'

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
];

const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const [sector, setSector] = useState();


  return (
    <>
      <div className='Hero'>
        <h1>Generation Thailand<br />
        { sector === 'admin' && 'Home - Admin Sector'}
        { sector === 'user' && 'Home - User Sector' }
        { sector != 'admin' && sector != 'user' && 'React - Assessment' }
        </h1>
        <div className='toggle'>
          <button
            type="button"
            value="user"
            onClick={e => setSector(e.target.value)}
          >User Home Sector</button>
          <button
            type="button"
            value="admin"
            onClick={e => setSector(e.target.value)}
          >Admin Home Sector</button>
        </div>
      </div>
      <main>
      {   
      sector === 'admin' ? 
        <Admin employees={employees} setEmployees={setEmployees} /> :
      sector === 'user' ? 
        <User employees={employees} /> :
        <div id="greet">Hello, would you like some coffee?</div>
      }
      </main>
    </>
  )
}



export default Home
