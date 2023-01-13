import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
// import ErrorModal from './components/UI/ErrorModal';

const DUMMY_DATA = [
  {
    username: 'Cory',
    age: 35,
    id: 'user-01',
  },
  {
    username: 'Jane',
    age: 32,
    id: 'user-02',
  },
];

const App = () => {
  const [users, setUsers] = useState(DUMMY_DATA);

  const addUserHandler = (newUserName, newUserAge) => {
    setUsers(prevUsers => {
      return [
        {
          username: newUserName,
          age: newUserAge,
          id: crypto.randomUUID(),
        },
        ...prevUsers,
      ];
    });
  };

  const deleteUsersHandler = id => {
    setUsers(prevUsers => {
      return [...prevUsers.filter(user => user.id !== id)];
    });
  };

  return (
    <div>
      {/* <ErrorModal title="Invalid Input" message="You dun fucked up A-Aron" /> */}
      <AddUser onAddUser={addUserHandler} />
      {users.length > 0 && (
        <UsersList users={users} onDeleteUser={deleteUsersHandler} />
      )}
    </div>
  );
};

export default App;
