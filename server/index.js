const express = require("express")
const cors = require("cors")

const app = express()
const mysql = require("mysql")
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  user: "imon",
  host: "localhost",
  password: "p@ssw0rd",
  database: "NodeMysql",
})

app.post("/create", (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage

  db.query("INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)", [name, age, country, position, wage], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send("Values Inserted!")
    }
  })
})

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
