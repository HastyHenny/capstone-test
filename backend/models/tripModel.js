// import connection
import db from "../config/database.js";
  
// Get All trips
export const getTrips = (result) => {
    db.query("SELECT * FROM trip", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single trip
export const getTripById = (id, result) => {
    db.query("SELECT * FROM trip WHERE trip_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert trip to Database
export const insertTrip = (data, result) => {
    db.query("INSERT INTO trip SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update trip to Database
export const updateTripById = (data, id, result) => {
    db.query("UPDATE trip SET team_id = ?, trip_desc = ?, trip_departure = ?, trip_return = ? WHERE trip_id = ?", [data.team_id, data.trip_desc, data.trip_departure, data.trip_return, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete trip to Database
export const deleteTripById = (id, result) => {
    db.query("DELETE FROM trip WHERE trip_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}