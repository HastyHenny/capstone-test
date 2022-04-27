// import connection
import db from "../config/database.js";
  
// Get All teams
export const getTeams = (result) => {
    db.query("SELECT * FROM team", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single team
export const getTeamById = (id, result) => {
    db.query("SELECT * FROM team WHERE team_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert team to Database
export const insertTeam = (data, result) => {
    db.query("INSERT INTO team SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update team to Database
export const updateTeamById = (data, id, result) => {
    db.query("UPDATE team SET team_name = ? WHERE team_id = ?", [data.team_name, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete team to Database
export const deleteTeamById = (id, result) => {
    db.query("DELETE FROM team WHERE team_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}