import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Route, Routes} from 'react-router-dom';

import About from './components/About';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './components/Users';
import Search from './components/Search';
import UserDetail from './components/userDetail';
import { useParams } from "react-router-dom";



function App() {
  const [users, setUser] = useState([]);
  console.log(users);
  const [showClear, setshowClear] = useState(false);

  // useEffect(() => {
     
  //     async function fetchData() {
  //       // You can await here
  //       const res = await axios.get('https://api.github.com/users');
  //       setUser(res.data)
       
  //     }
  //     fetchData();
      
  // }, [])


const searchName = async(name) => {
    const response = await axios.get(`https://api.github.com/search/users?q= ${name}`)
   console.log(response, 'response');
    setUser(response.data.items);
    setshowClear(true);
}

const clearUser = () => {
  setUser([])  ;
  setshowClear(!showClear);
}
 



// const showClear = () => {
//   return users.length > 0? true:false;
// }

  return (

    <>
    <Router>
      
        
        <Navbar/>
        
        
        <div className='container'>
          <Routes>
          
          <Route exact path = "/" Component={ () =>  <Search searchName = {searchName}   showClear = {showClear} clearUser = {clearUser}/>}/>
        
          </Routes>
          <Routes>  
          <Route  exact path = "/" Component={ () => <Users users = {users}  />}/>
        </Routes>
       
       
        <Routes>
        
        
          
        
          <Route exact path = "/about" Component={About}/>
          <Route exact path = "/user/:anything" Component= {UserDetail}/>
          
          </Routes>
          
        </div>
          
        
        
      
    </Router>
   
    </>
  );
}

export default App;
