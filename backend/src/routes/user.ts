import express, { Request, Response } from 'express'
import User from '../models/User'

const router = express.Router()

// 新規ユーザー作成
router.post('/', async (req: Request, res: Response) => {
  const { name, email } = req.body
  try {
    const newUser = new User({ name, email })
    console.log(newUser)
    await newUser.save()
    res.status(201).json(newUser)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

export default router
