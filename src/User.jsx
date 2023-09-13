import React from 'react'

const User = ({employees}) => {

  return (
    <div className='User'>
      <table className='userTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            
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
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default User