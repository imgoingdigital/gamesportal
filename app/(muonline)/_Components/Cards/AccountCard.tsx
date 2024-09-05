import React from 'react'
const chars = 
  [
    {
      name: "a"
    },
    {
      name: "b",
      level: 100
    }



  ]

const AccountCard = async () => {
  return (
    <div>
      <span>Username: </span>
      <ul>
        {chars.map((c, i) => (
          <li key={c.name}>
            
            {c.name} : {c.level}
          </li>
        ))}

      </ul>
    </div>
  )
}

export default AccountCard