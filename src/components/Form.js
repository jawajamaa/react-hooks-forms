import React, { useState } from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {

  // below (ln11-25) is before refactoring to ParentComponent
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  // const [newsletter, setNewsletter] = useState(false);

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }

  // function handleNewsletterChange(event) {
  //   setNewsletter(event.target.checked);
  // }

  const [number, setNumber] = useState(0);
  const [isInvalidNumber, setIsInvalidNumber] = useState(null)

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setIsInvalidNumber(null);
    } else {
      setIsInvalidNumber(`${newNumber} is not a valid number!`);
    }
  }

  return (
    <form>
      <input type = "number" 
      value = { number } 
      onChange = { handleNumberChange }
      />
      {isInvalidNumber ? 
        <span style = {{ color: "red" }}>{isInvalidNumber}</span> : null}
      <br />
      <input 
      type = "text" 
      onChange = { handleFirstNameChange } 
      value = { firstName } 
      />
      <br />
      <input 
      type = "text"  
      onChange = { handleLastNameChange } 
      value = { lastName } 
      />
      {/* <br />
      <input 
        type ="checkbox" 
        id = "newsletter" 
        onChange = { handleNewsletterChange }
        checked = { newsletter }
      />
      <br /> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
