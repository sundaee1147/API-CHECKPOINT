import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import UserList from './UserList'

function App() {

  const [listOfUSer,setListOfUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      axios(`https://jsonplaceholder.typicode.com/users`)
      .then(result => { setListOfUser(result.data); setIsLoading(false);})
    }
    fetchItems();
  },[]);




  return (
    <div className="App container">

      <div className="row">
      <UserList listOfUSer={listOfUSer} isLoading={isLoading} />
      </div>

    </div>
  );
}

export default App;


