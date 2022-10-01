import express from 'express'

const app = express()

app.listen(4000, () => console.log('API running on port 4000'))

app.get('/', (req, res) => res.json('My API is 🏃🏽‍♀️'))

