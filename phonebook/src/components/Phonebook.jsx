const Phonebook = ({people, remove}) => {
  return (
    <table border="1">
        <thead><tr><th>Name</th><th>Phone Number</th></tr></thead>
        <tbody>
        {people.map(person => <tr key={person.id}>
          <td>{person.name}</td>
          <td>{person.number}</td>
          <td><button onClick={() => {remove(person.id)}}>Delete</button></td>
        </tr>)}
        </tbody>
    </table>
  )
}

export default Phonebook