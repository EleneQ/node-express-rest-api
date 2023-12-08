import express from "express";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

/* 
  all routes in here are starting with /users beuse of this in the index.js file: app.use("/users", usersRoutes);
*/

/*
  most devs separate routing and logic into different files for readability.
*/

router.get("/", getUsers);

//adding a new user to the mock users database
router.post("/", createUser);

//get a user based on id
router.get("/:id", getUser);

//remove the user with the specified id from the array
router.delete("/:id", deleteUser);

//using query parameters to get the id
//update user aka partially modify a user object using the patch method
router.patch("/:id", updateUser);

export default router;
