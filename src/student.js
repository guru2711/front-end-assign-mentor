import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

function Student() {

  const [name, setName] = useState("")
  const [courseJoined, setcourseJoined] = useState("")

  const add = async (event) => {
   await axios.post("https://student-to-mentor.herokuapp.com/student",{
     name:name,
     courseJoined:courseJoined
   })
    console.log(name + " "+ courseJoined)
  }
    return (
      <div className="App">
        <h1>Create Student</h1>
        <label>Name</label><br/>
        <input type="text" onChange={(event) => {
          setName(event.target.value)
        }}></input><br/>
        <br/>
        <label>courseJoined</label><br/>
        <input type="text" onChange={(event) => {
          setcourseJoined(event.target.value)
        }}></input>
        <br/>
        <br/>
        <button onClick={add}>Add</button>
        <Link to="/">
        <button >Back</button>
          </Link>
      </div>
    );
  }
  
  export default Student;