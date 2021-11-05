import {Link} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from 'semantic-ui-react'

function Home () {
    const [data, setData] = useState([])
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(async () => {
try{
    const res = await axios.get("https://student-to-mentor.herokuapp.com/")
console.log(res)
setData(res.data)
}catch(err){
    console.log(err)
}
},[])
    return(
<>
<h1>Welcome to create Student & Mentor</h1>
<Link to="/mentor">
<button> Create Mentor</button>
</Link>
<br/>
<br/>
<Link to="/student">
<button> Create Student</button>
</Link>
<Table singleLine>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>courses</Table.HeaderCell>
                        <Table.HeaderCell>Mentor</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {data.map((data) => {
                        return(
                            
                            <Table.Row key={data._id}>
                     
                        <Table.Cell key={1} >{data.student}</Table.Cell>
                        <Table.Cell key={2} >{data.courseJoined }</Table.Cell>
                        <Table.Cell key={3} >{ data.mentor ? data.courseJoined === data.courseHandling  : "yet to be assigned"} </Table.Cell>
       
                    </Table.Row>
                   
                        )
                    })}
                </Table.Body>
            </Table>
</>
    )
}

export default Home