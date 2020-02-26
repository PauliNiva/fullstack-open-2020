import React, { useState } from 'react'

const Number = ({person}) => (
  <li>{person.name}</li>
)

const nameAlreadyExists = (persons, name) => {
  return persons.map(p=>p.name).includes(name)
}


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handleAddName = (event) => {
    event.preventDefault()

    if (nameAlreadyExists(persons, newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Number key={person.name} person={person}/>)}
      </ul>
    </div>
  )

}

export default App
