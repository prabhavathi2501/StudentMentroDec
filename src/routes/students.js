import express from 'express'
import StudentController from "../controller/students.js"
const router = express.Router()

router.get('/',StudentController.getStudents)
router.post('/create',StudentController.create)
router.put('/changeStudentMentor/:id',StudentController.changeStudentMentor)
router.get('/showprevmentor/:id',StudentController.showPreviousMentor)

export default  router