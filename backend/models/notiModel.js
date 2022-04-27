// import connection
import db from "../config/database.js";
  
// Get All Products
export const getNotis = (result) => {
    db.query("SELECT * FROM notifications", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Product
export const getNotiById = (id, result) => {
    db.query("SELECT * FROM notifications WHERE not_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Product to Database
export const insertNoti = (data, result) => {
    db.query("INSERT INTO notifications SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Product to Database
export const updateNotiById = (data, id, result) => {
    db.query("UPDATE notifications SET user_email = ?, not_date = ?, not_time = ? WHERE product_id = ?", [data.user_email, data.not_date, data.not_time, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Product to Database
export const deleteNotiById = (id, result) => {
    db.query("DELETE FROM notifications WHERE not_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}