import express from 'express'
import MentorController from '../controller/Mentros.js'
const router = express.Router()

router.get('/',MentorController.getMentors)
router.post('/create',MentorController.createMentor)
router.put('/:id',MentorController.assignStudent)
router.get('/showstulist/:id',MentorController.showStuList)

export default router