import React, { useState } from 'react'

const Admin = ({employees, setEmployees}) => {
  const [id, setID] = useState(employees.length);
  const [name, setName] = useState();
  const [lastname,setLastname] = useState();
  const [position,setPosition] = useState();

  return (
    <div className='Admin'>
      <form className='createUserForm'>
        <label>Create User Here</label>
        <br />
        <input
          id="name"
          name="name"
          placeholder='Name'
          value={name}
          type="text"
          onChange={e=>setName(e.target.value)}
        />
        <input
          id="lastname"
          name="lastname"
          placeholder='Last Name'
          value={lastname}
          type="text"
          onChange={e=>setLastname(e.target.value)}
        />
        <input
          id="position"
          name="position"
          placeholder='Position'
          value={position}
          type="text"
          onChange={e=>setPosition(e.target.value)}
        />
        <button
          type="button"
          onClick={()=>{
            setEmployees([...employees,{
              id: id,
              name: name,
              lastname: lastname,
              position: position,
            }]);
            setID(prev=>prev+1);
          }}
        >Save</button>
      </form>
      <table className='userTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => {
              return (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.position}</td>
                  <td><span
                    onClick={()=>{
                      setEmployees(employees.filter(element=>{
                        return element.id != employee.id;
                      }));
                      setID(prev=>prev-1);
                    }}
                  >Delete</span></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button
        id="deleteAll"
        onClick={()=>{
          setEmployees([])
        }}
      >Delete All</button>
    </div>
  )
}

export default Admin