// import connection
import db from "../config/database.js";
  
// Get All students
export const getStudents = (result) => {
    db.query("SELECT * FROM student", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single student
export const getStudentById = (id, result) => {
    db.query("SELECT * FROM student WHERE student_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert student to Database
export const insertStudent = (data, result) => {
    db.query("INSERT INTO student SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update student to Database
export const updateStudentById = (data, id, result) => {
    db.query("UPDATE student SET student_fname = ?, student_lname = ? WHERE student_id = ?", [data.student_fname, data.student_lname, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete student to Database
export const deleteStudentById = (id, result) => {
    db.query("DELETE FROM student WHERE student_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}