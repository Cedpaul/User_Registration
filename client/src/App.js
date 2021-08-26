import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/form';
import UserList from './components/UserList';

import NavBar from './components/navBar';

function App() {
  return (
    <Router>
         <div className="App">
          <NavBar/>
        </div>

        <Route path="/" exact
               render={() => (
                <>
                  <Form />
                </>
              )}
          />
          
        <Route path="/list" exact
               render={() => (
                <>
                  <UserList />
                </>
              )}
          />
    </Router>
   
  );
}

export default App;
