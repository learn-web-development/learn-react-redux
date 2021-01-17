import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onUserInput(term);
  }

  const onUserInput = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div className="ui segment">
      <form onSubmit={ onFormSubmit } className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={ term } onChange={ onUserInput } ></input>
        </div>
      </form>
    </div>
  )

}

export default SearchBar;
