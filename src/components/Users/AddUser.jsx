import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isError, setIsError] = useState();

  const submitFormHandler = e => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: 'Invalid input',
        message: 'Input fields cannot be empty.',
      });
      return;
    }

    if (enteredAge < 1) {
      setIsError({
        title: 'Invalid age',
        message: 'Age cannot be less than 1.',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const enterNameHandler = e => {
    setEnteredUsername(e.target.value);
  };

  const enteredAgeHandler = e => {
    setEnteredAge(e.target.value);
  };

  const closeErrorHandler = () => {
    setIsError(null);
  };

  return (
    <>
      {isError && (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          onClose={closeErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={enterNameHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            onChange={enteredAgeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
