import express from 'express'

import StudentRoutes from '../routes/students.js'
import MentorRoutes from "../routes/Mentro.js"

const router = express.Router()



router.use('/students',StudentRoutes)
router.use('/mentors',MentorRoutes)


// router.get('/',(req,res)=>{
//     res.status(200).send(`
//     <h2>StudentMentero Section`)
// })

export default router