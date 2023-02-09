'use strict'

const express = require('express') // npm install express
// const pokeData = require('./poke.json')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT

app.get('/', (request, response) => {
  response.status(200).send('home page!')
})

// localhost:3000/test
app.get('/test', (request, response) => {
  response.send('alive!')
})

// localhost:3000/petsList
let myPetssList = ['sherry', 'Sandy', 'Fluffy']
app.get('/petsList', (request, response) => {
  response.status(200).send(myPetssList)
})

// localhost:3000/getPoke
// app.get('/getPoke', (req, res) => {
//   try {
//     const pokeList = pokeData.results.map((pokemon) => {
//       return pokemon.name
//     })
//     res.status(200).send(pokeList)
//   } catch (error) {
//     res.status(500).send(error)
//   }
//   response.send('alive!')
// })

app.get('/*', (request, response) => {
  response.status(404).send('Not Found!')
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} `)
})
