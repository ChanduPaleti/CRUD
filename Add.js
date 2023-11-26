import { useState } from "react";
import axios from "axios";
import './App.css';
export default function Add(props){
    const [name,setname]=useState("");
  const [regno,setregno]=useState(0);
  const [age,setage]=useState("");
  const [gender,setgender]=useState("");
  const [email,setemail]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    const response= axios.post("http://localhost:4000/add",{
      data:{
        name:name,
        age:age,
        regno:regno,
        email:email,
        gender:gender
      }
    }).then(()=>{props.onfetch() ;setage(0) ;setemail(""); setgender(""); setname("");setregno(0)}).catch((err)=>{console.log(err)})
    console.log(response);
  }
  return(
    < div>
    <form onSubmit={handleSubmit}>
    <label>Enter your name  </label>
    <input type="text" id="name" value={name} required onChange={(e)=>setname(e.target.value)}/>
    <br/>
    <br/>
    <label>Enter your Regno   </label>
    <input type="number" id="regno" value={regno} required onChange={(e)=>setregno(e.target.value)}/>
    <br/>
    <br/>
    <label>Enter your Age  </label>
    <input type="number" id="age" value={age} required onChange={(e)=>setage(e.target.value)}/>
    <br/>
    <br/>
    <label>Enter your Gender  </label>
    <input type="text" id="gender" value={gender}  required onChange={(e)=>setgender(e.target.value)}/>
    <br/>
    <br/>
    <label>Enter your Email  </label>
    <input type="email" id="email" value={email}  required onChange={(e)=>setemail(e.target.value)}/>
    <br/>
    <br/>
    <button>SUBMIT</button>
  </form>
  <br/>
  <br/>
  </div>
  )
}