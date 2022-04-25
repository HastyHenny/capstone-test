// Import function from Product Model
import { showTeams, showTeamsById, createTeam, updateTeam, deleteTeam } from "../models/teamModel.js";
  
// Get All teams
export const showTeams = (req, res) => {
    getTeams((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single team
export const showTeamsById = (req, res) => {
    getTeamsById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New team
export const createTeam = (req, res) => {
    const data = req.body;
    insertTeam(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update team
export const updateTeam = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateTeamById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete team
export const deleteTeam = (req, res) => {
    const id = req.params.id;
    deleteTeamById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}