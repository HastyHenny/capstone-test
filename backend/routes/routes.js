// import express
import express from "express";
  
// import function from controller
import { showStudents, showStudentsById, createStudent, updateStudent, deleteStudent } from "../controllers/student.js";
  
// init express router
const router = express.Router();
  
// Get All Product
router.get('/', showStudents);
  
// Get Single Product
router.get('/:is', showStudentsById);
  
// Create New Product
router.post('/create', createStudent);
  
// Update Product
router.post('/:id/edit', updateStudent);

// Delete Product
router.post('/:id/delete', deleteStudent);
  
// export default router
export default router;