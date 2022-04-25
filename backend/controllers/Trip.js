// Import function from Product Model
import { showTrips, showTripsById, createTrip, updateTrip, deleteTrip } from "../models/tripModel.js";
  
// Get All Trips
export const showTrips = (req, res) => {
    getTrips((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Trip
export const showTripsById = (req, res) => {
    getTripById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Trip
export const createTrip = (req, res) => {
    const data = req.body;
    insertTrip(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Trip
export const updateTrip = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateTripById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Trip
export const deleteTrip = (req, res) => {
    const id = req.params.id;
    deleteTripById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}