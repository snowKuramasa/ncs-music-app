import express, { Request, Response } from 'express'
import connectDB from './config/db'
import userRoutes from './routes/user'

const app = express()
const port = 3000

// MongoDB接続
connectDB()

// ミドルウェア設定
app.use(express.json())

// ルート設定
app.use('/api/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
