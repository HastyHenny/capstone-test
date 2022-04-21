// Import function from Product Model
import { showStudents, showStudentsById, createStudent, updateStudent, deleteStudent } from "../models/studentModel.js";
  
// Get All Students
export const showStudents = (req, res) => {
    getStudents((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Student
export const showStudentsById = (req, res) => {
    getStudentById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Student
export const createStudent = (req, res) => {
    const data = req.body;
    insertStudent(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Student
export const updateStudent = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateStudentById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Student
export const deleteStudent = (req, res) => {
    const id = req.params.id;
    deleteStudentById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}