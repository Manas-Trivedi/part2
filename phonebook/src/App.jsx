import { useState, useEffect } from 'react'
import './index.css'
import Filter from './components/Filter'
import NewEntry from './components/NewEntry'
import Phonebook from './components/Phonebook'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
      personService.getAll().then(data => {
      setPersons(data)
      setFiltered(data)
      })
    }, [])

  const Notification = () => {
    if (errorMsg === null) {
      return null
    }
    return (
      <div className='notif'>
        {errorMsg}
      </div>
    )
  }

  const handleClick = (e) => {
    e.preventDefault();
    const newObj = {
      name: newName,
      number: newNumber,
    };
    if (!persons.some(person => person.name === newName)) {
      personService.create(newObj).then(newGuy => {
        const updatedPersons = persons.concat(newGuy);
        setErrorMsg(`${newGuy.name} was added to Phonebook!`)
        setTimeout(() => setErrorMsg(null), 5000)
        setPersons(updatedPersons);
        setFiltered(updatedPersons); // Ensure filtered list is updated
        setFilter('');
        setNewName('');
        setNewNumber('');
      })
    } else {
      const person = persons.find(person => person.name === newName);
      personService.update(person.id, newObj).then(updatedGuy => {
        const updatedPersons = persons.map(p => p.id !== person.id ? p : updatedGuy);
        setErrorMsg(`${updatedGuy.name}'s details were updated in Phonebook!`)
        setTimeout(() => setErrorMsg(null), 5000)
        setPersons(updatedPersons);
        setFiltered(updatedPersons); // Ensure filtered list is updated
        setFilter('');
        setNewName('');
        setNewNumber('');
      })
    }
  };

  const handleFiltering = (e) => {
    let filterValue = e.target.value;
    if(filterValue === ''){
      setFiltered(persons);
    } else {
      setFiltered(persons.filter(person => person.name.includes(filterValue)))
    }
    setFilter(filterValue);
  }

  const deletePerson = async (id) => {
    const name = await personService.fetchOne(id).then(data => data.name)
    if(window.confirm(`Delete ${name}?`)){
      const entry = await personService.deletePerson(id).then(data => data);
      console.log(entry, ` was deleted`);
      setPersons(persons.filter(person => id !== person.id))
      setFiltered(persons.filter(person => id !== person.id))
    } else {
      console.log('deletion cancelled');
    }
  }

  return (
    <div>
      <Notification />
      <h2>Filter</h2>
        <Filter
        value={filter}
        onChange={handleFiltering}
        placeholder="Enter text to filter with"
        />
      <h2>Add New Person</h2>
      <NewEntry
      valueName={newName}
      valueNumber={newNumber}
      onNameChange={(e) => setNewName(e.target.value)}
      onNumberChange={(e) => setNewNumber(e.target.value)}
      namePlaceholder={"Enter a new name"}
      numberPlaceholder={"Enter Phone Number"}
      onClick={handleClick}
      />
      <h2>Numbers</h2>
      <Phonebook people={filtered} remove={deletePerson}/>
    </div>
  )
}

export default App