import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/form';
import UserList from './components/UserList';
import NavBar from './components/navBar';
import { useState, useEffect } from 'react';
import { FormEdit } from './components/FormEdit';

function App() {
  const [users, setUsers] = useState(null);
  const [infoToEdit, setInfoToEdit] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  // Get all users
  const getUsers = async () => {
    await fetch('http://localhost:5000/api/users')
    .then((res) => {
        return res.json();
    })
    .then((users) => {
        setUsers(users);
    });
  }

 // Add/register user
 const addUser = async (userInput) => {
  const res = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(userInput)
  });
  
  const data = await res.json();
  setUsers([...users, data]);
};

// Delete user
const deleteUser = async (id) => {
  await fetch(`http://localhost:5000/api/users/${id}`, { method: 'DELETE' });
  setUsers(users.filter((user) => user._id !== id));
}

// Update user
const editUser = async (userInfo) => {
  await fetch(`http://localhost:5000/api/users/${userInfo.id}`, {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
  })
      .then(() => {
          setUsers(users.map((rec) => (rec._id === userInfo.id ? { _id: userInfo.id, firstName: userInfo.fName, middleName: userInfo.mName, lastName: userInfo.lName, age: userInfo.age, city: userInfo.city, stAddress: userInfo.stAddress, phoneNumber: userInfo.phoneNumber } : rec)));
      })
      .catch((error) => console.log(error));
  
      console.log(userInfo);

};

   // Get user information to edit
   const getUserInfo = (userInfo) => {
    setInfoToEdit(userInfo);
    console.log(userInfo)
  };


  return (
    <Router>
         <div className="App">
          <NavBar/>
        </div>

        <Route path="/" exact
               render={() => (
                <>
                  <Form insertToDB={addUser}/>
                </>
              )}
        />
          
        <Route path="/list" exact
               render={() => (
                <>
                  {users && <UserList userInformation={users} deleteUser={deleteUser} getUserInfo={getUserInfo} />}
                </>
              )}
          />

        <Route path="/edit" exact
               render={() => (
                <>
                  {infoToEdit && <FormEdit editUser={editUser} infoToEdit={infoToEdit}/>}
                </>
              )}
          />


    </Router>
   
  );
}

export default App;