import { useState,useEffect } from "react";
import axios from "axios";
import './App.css';
function Delete(props){
    const [delreg,setdelreg]=useState(0);
    const handleDelete=async (e)=>{
        e.preventDefault();
    
          try {
            await axios.delete('http://localhost:4000/delete', {
              data: { regno: delreg }
            });
            setdelreg(0);
            props.onfetch();
          } catch (error) {
            console.error('Error deleting item:', error.message);
          }
      }
return (
    <div>
    <form onSubmit={handleDelete}>
    <label>Enter regno to delete</label>
    <input type="number" name="delreg" value={delreg} onChange={(e)=>setdelreg(e.target.value)}/>
    <button>Delete</button>
  </form>
  <br/>
  <br/>
  </div>
);
}
export default Delete;