import express from 'express'
import { PORT } from './helpers/dotenv-secrets.js'
import { connectDB } from './config/connect-db.js'
import { authRouter } from './routes/auth-routes.js'
import { userRouter } from './routes/user-routes.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Express js api tracker'})
})

// database connection
connectDB()

// routes
app.use('/api/v1/auth', authRouter)
app.use("/api/v1/users", userRouter)

// error middleware
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Something went wrong';

    res.status(statusCode).json({
        success: false,
        message,
    });
})


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})