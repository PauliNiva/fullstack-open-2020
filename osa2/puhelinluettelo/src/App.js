import React, { useState } from 'react'

const Number = ({person}) => (
  <li>{person.name} {person.number}</li>
)

const nameAlreadyExists = (persons, name) => {
  return persons.map(p=>p.name).includes(name)
}

const App = () => {

  const [ persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '+358 23 456 7890'
    },
    {
      name: 'Antti Eskelinen',
      number: '123445'
    }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const caseinsensitiveFilter = (person) => (
    person.name.toUpperCase().includes(
      filter.toUpperCase()
    )
  )

  const handleAddName = (event) => {
    event.preventDefault()
    if (nameAlreadyExists(persons, newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>

      filter shown with <input value={filter} onChange={handleFilterChange}/>

      <h2>add a new</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons
          .filter(caseinsensitiveFilter)
          .map(person => <Number key={person.name} person={person}/>)}
      </ul>
    </div>
  )

}

export default App
