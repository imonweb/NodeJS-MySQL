import { useState } from "react"
import "./App.css"
import Axios from "axios"
// import EmployeeList from "./EmployeeList"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState("")
  const [position, setPosition] = useState("")
  const [wage, setWage] = useState(0)

  // const displayInfo = () => {
  //   console.log(name + age + country + position + wage)
  // }

  const [employeeList, setemployeeList] = useState([])

  const addEmployee = () => {
    Axios.post("http://localhost:5000/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => console.log("succcess"))
  }

  const getEmployees = () => {
    Axios.get("http://localhost:5000/employees").then((response) => {
      // console.log(response)
      setemployeeList(response.data)
    })
  }

  return (
    <div className="App">
      <div className="information">
        <label htmlFor="Name">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="Age">Age</label>
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <label htmlFor="Country">Country</label>
        <input type="text" onChange={(e) => setCountry(e.target.value)} />
        <label htmlFor="Position">Position</label>
        <input type="text" onChange={(e) => setPosition(e.target.value)} />
        <label htmlFor="Wage">Wage (year)</label>
        <input type="number" onChange={(e) => setWage(e.target.value)} />
        {/* <button onClick={displayInfo}>Add Employee</button> */}
        <button onClick={addEmployee}>Add Employee</button>
      </div>

      <div className="divider"></div>
      <div className="showEmployee">
        <button className="btnEmployee" onClick={getEmployees}>
          Show Employees
        </button>

        {/* {employeeList.map((val, key) => {
          return (
            <div className="employeeList">
               
              <ul className="employees">
                <li>{val.name}</li>
                <li>{val.age}</li>
                <li>{val.country}</li>
                <li>{val.position}</li>
                <li>{val.wage}</li>
              </ul>  
            </div>
          )
        })} */}

        {/* <EmployeeList> hello</EmployeeList> */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Position</TableCell>
                <TableCell align="right">Wage&nbsp;(year)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeList.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.country}</TableCell>
                  <TableCell align="right">{row.position}</TableCell>
                  <TableCell align="right">{row.wage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default App
