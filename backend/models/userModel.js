// import connection
import db from "../config/database.js";
  
// Get All users
export const getUsers = (result) => {
    db.query("SELECT * FROM admin", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single user
export const getUserById = (id, result) => {
    db.query("SELECT * FROM user WHERE admin_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert user to Database
export const insertUser = (data, result) => {
    db.query("INSERT INTO admin SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update user to Database
export const updateUserById = (data, id, result) => {
    db.query("UPDATE admin SET admin_fname = ?, admin_lname = ?, admin_email = ? WHERE user_id = ?", [data.admin_fname, data.admin_lname, data.admin_email, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete user to Database
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM admin WHERE admin_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}