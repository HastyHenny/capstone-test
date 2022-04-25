// Import function from Product Model
import { showNotis, showNotisById, createNoti, updateNoti, deleteNoti } from "../models/notificationModel.js";
  
// Get All Notifications
export const showNotis = (req, res) => {
    getNotis((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Notification
export const showNotisById = (req, res) => {
    getNotisById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Notification
export const createNoti = (req, res) => {
    const data = req.body;
    insertNoti(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Notification
export const updateNoti = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateNotiById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Notification
export const deleteNoti = (req, res) => {
    const id = req.params.id;
    deleteNotiById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}