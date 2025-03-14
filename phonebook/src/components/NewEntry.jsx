import React from 'react'

const NewEntry = (props) => {
  return (
    <form>
        <div>
          name: <input
          value={props.valueName}
          onChange={props.onNameChange}
          placeholder={props.namePlaceholder}
          required
          />
          <br />
          <br />
          number: <input
          value={props.valueNumber}
          onChange={props.onNumberChange}
          placeholder={props.numberPlaceholder}
          required
          />
        </div>
        <div>
          <button type="submit" onClick={props.onClick}>add</button>
        </div>
      </form>
  )
}

export default NewEntry