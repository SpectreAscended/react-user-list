import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UsersList = props => {
  const deleteUsersHandler = e => {
    props.onDeleteUser(e.target.parentElement.dataset.id);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(user => {
          return (
            <li key={user.id} data-id={user.id}>
              {user.username} ({user.age} years old)
              <Button onClick={deleteUsersHandler}>Delete User</Button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
