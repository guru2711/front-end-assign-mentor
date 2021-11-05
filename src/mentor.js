import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function Mentor() {

  const [name, setName] = useState("")
  const [courseHandling, setCourseHandling] = useState("")

  const add = async (event) => {
await axios.post("https://student-to-mentor.herokuapp.com/mentor",{
  name:name,
  courseHandling:courseHandling
})
    console.log(name + " "+ courseHandling)
  }
    return (
      <div className="App">
        <h1>Create Mentor</h1>
        <label>Name</label><br/>
        <input type="text" onChange={(event) => {
          setName(event.target.value)
        }}></input><br/>
        <br/>
        <label>courseHandling</label><br/>
        <input type="text" onChange={(event) => {
          setCourseHandling(event.target.value)
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
  
  export default Mentor;