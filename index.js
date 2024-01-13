const express = require('express')
const bodyparser = require('body-parser')
const colors = require('colors')
require('dotenv').config()
const app = express()
app.use(bodyparser.json())


let students = [
    {
        id: 1,
        username: 'Rafig'
    },
    {
        id: 2,
        username: 'Messi'
    },
    {
        id: 3,
        username: 'Ronaldo'
    },
    {
        id: 5,
        username: 'Maga'
    },
    {
        id: 4,
        username: 'Natig'
    },

    {
        id: 6,
        username: 'Xatira'
    },

    {
        id: 6,
        username: 'Ali'
    },

    {
        id:2,
        username: 'Mehemmed'
    }
]


app.get('/' , (req,res) => {
    res.json(students)
})

app.delete('/:id' , (req,res) => {
    const { id } = req.params
  students = students.filter((item) => item.id != id)
    res.json('Deleted')
})

app.post('/', (req, res) => {
    const userBody = req.body
    students.push(userBody)
    res.send('user added')
})


app.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
  
    students = students.map((student) => (student.id == id ? { ...student, ...updatedUser } : student));
  
    res.json('User updated successfully!');
  });
  


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running: http:localhost:${PORT}`.red.bold))