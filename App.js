import React,{ useState,useEffect } from "react";
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import './App.css';
import axios from "axios";
import Delete from "./Delete";
import Search from "./Search";
import Add from "./Add";
import Update from "./Update";
function App() {
  const [items,setitems]=useState([]);
  useEffect(()=>{
    fetchitems();
  },[]);
  const fetchitems=async ()=>{
    try{
    const response=await axios.get("http://localhost:4000/");
    console.log(response.data);
    setitems(response.data)
  }
  catch(err){
    console.log(err);
  }
}
const func=(e)=>{}
  return (
    <div className="App" >
      <div>
      <NavLink to="/add"><button>ADD</button></NavLink>&emsp;
      <NavLink to="/delete"><button>DELETE</button></NavLink>&emsp;
      <NavLink to="/"><button>HOME</button></NavLink>&emsp;
      <NavLink to="/search"><button>SEARCH</button></NavLink>&emsp;
      <NavLink to="/update"><button>UPDATE</button></NavLink>&emsp;
      </div>
      <h1>HOSTEL MANAGEMENT SYSTEM</h1>
      
     
      <Routes>
        <Route exact path="/add" element={<Add onfetch={fetchitems}/>}/>
        <Route exact path="/delete" element={<Delete onfetch={fetchitems}/>}/>
        <Route exact path="/search" element={<Search onfetch={fetchitems} items={items} onfound={func} name="search"/>}/>
        <Route exact path="/update" element={ <Update onfetch={fetchitems} items={items}/>}/>
      </Routes>
     
      <h3>Student records list</h3>
      <table>
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.regno}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
      }

export default App;
