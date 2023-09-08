import { useState, useEffect } from 'react'
import './App.css'
import List from './components/List'
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    fetch(url + 'users.json')
      .then(res => res.json())
      .then(json => setUsers(json));
  }, []);

  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

  const showDetails = (id) => setUserId(id);

  return (
    <div className="App">
      <List list={users} showDetails={showDetails} />
      {userId && <Details userId={userId} />}
    </div>
  );

}

export default App
