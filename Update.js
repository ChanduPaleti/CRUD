import { useState } from "react";
import Search from "./Search";
import axios from "axios";
import './App.css';
export default function Update(props){
    const [sn,setsn]=useState("");
    const [sa,setsa]=useState(0);
    const [sg,setsg]=useState("");
    const [se,setse]=useState("");
    const [found,setfound]=useState(0);
    const [searchreg,setsearchreg]=useState(0);
    const setf=(val)=>{
        setfound(1);
        console.log(val);
        setsearchreg(val[0]);
        setsn(val[1])
        setsa(val[2])
        setsg(val[3])
        setse(val[4])
    }
    const handleUpdate=async (e)=>{
        e.preventDefault();
        setfound(0);
        const response=await axios.put(`http://localhost:4000/put/${searchreg}`,{
          data:{
            name:sn,
            age:sa,
            gender:sg,
            email:se
          }
        }).then()
        props.onfetch();
        setsn("")
        setsa("")
        setsg("")
        setse("")
        setsearchreg("");
        setfound(0);
      }
      return (
        <div>
          <Search onfetch={props.onfetch} items={props.items} onfound={setf} name="update" />
        {
            found==1&&
            <form onSubmit={handleUpdate}>
            <label>Enter your name  </label>
            <input type="text" id="name" value={sn} onChange={(e)=>setsn(e.target.value)}/>
            <br/>
            <br/>
            <label>Enter your Regno   </label>
            <input type="number" id="regno" value={searchreg} disabled onChange={(e)=>setsearchreg(e.target.value)}/>
            <br/>
            <br/>
            <label>Enter your Age  </label>
            <input type="number" id="age" value={sa}  onChange={(e)=>setsa(e.target.value)}/>
            <br/>
            <br/>
            <label>Enter your Gender  </label>
            <input type="text" id="gender" value={sg}  onChange={(e)=>setsg(e.target.value)}/>
            <br/>
            <br/>
            <label>Enter your Email  </label>
            <input type="email" id="email" value={se}  onChange={(e)=>setse(e.target.value)}/>
            <br/>
            <br/>
              <button>Update</button>
            </form>
          }
          </div>
      )
}