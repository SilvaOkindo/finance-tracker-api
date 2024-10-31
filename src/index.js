import express from 'express'
import { PORT } from './helpers/dotenv-secrets.js'
import { connectDB } from './config/connect-db.js'

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({message: 'Express js api tracker'})
})

// database connection
connectDB()


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})