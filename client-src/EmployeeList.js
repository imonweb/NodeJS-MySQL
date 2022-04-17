import React, { useState } from "react"
import Axios from "axios"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

const EmployeeList = () => {
  const [employeeList, setemployeeList] = useState([])

  const getEmployees = () => {
    Axios.get("http://localhost:5000/employees").then((response) => {
      console.log(response)
      setemployeeList(response.data)
    })
  }

  return (
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
  )
}

export default EmployeeList
