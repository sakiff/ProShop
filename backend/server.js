import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server running ${process.env.NODE_ENV} mode on Port:${PORT}`.yellow.bold))