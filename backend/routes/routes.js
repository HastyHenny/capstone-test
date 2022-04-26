// import express
import express from "express";
  
// import function from controller
import { showStudents, showStudentsById, createStudent, updateStudent, deleteStudent } from "../controllers/student.js";
import { showNotis, showNotisById, createNoti, updateNoti, deleteNoti } from "../controllers/Notifications.js";
import { showTeams, showTeamsById, createTeam, updateTeam, deleteTeam } from "../controllers/Team.js";
import { showTrips, showTripsById, createTrip, updateTrip, deleteTrip } from "../controllers/Trip.js";
import { showUsers, showUsersById, createUser, updateUser, deleteUser } from "../controllers/User.js";
  
// init express router
const router = express.Router();
  
// Get All Product
router.get('/student', showStudents);
router.get('/notification', showNotis);
router.get('/team', showTeams);
router.get('/trip', showTrips);
router.get('/user', showUsers);
  
// Get Single Product
router.get('/:is', showStudentsById);
router.get('/:is', showNotisById);
router.get('/:is', showTeamsById);
router.get('/:is', showTripsById);
router.get('/:is', showUsersById);
  
// Create New Product
router.post('/create', createStudent);
router.post('/create', createNoti);
router.post('/create', createTeam);
router.post('/create', createTrip);
router.post('/create', createUser);
  
// Update Product
router.post('/:id/edit', updateStudent);
router.post('/:id/edit', updateNoti);
router.post('/:id/edit', updateTeam);
router.post('/:id/edit', updateTrip);
router.post('/:id/edit', updateUser);

// Delete Product
router.post('/:id/delete', deleteStudent);
router.post('/:id/delete', deleteNoti);
router.post('/:id/delete', deleteTeam);
router.post('/:id/delete', deleteTrip);
router.post('/:id/delete', deleteUser);
  
// export default router
export default router;