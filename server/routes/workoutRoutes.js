const express = require("express");
const authUser = require("../middleware/userMiddleware")

const router = express.Router(); //router acts as the Mini app


// Require Controller
const {getWorkouts, getWorkout, createWorkout, editWorkout, removeWorkout} = require("../controllers/workoutController")

router.use(authUser)

//get entire records

router.get("/",  getWorkouts);

//get one record
router.get("/:id", getWorkout)

// create new record
router.post("/", createWorkout)

//update record
router.patch("/:id", editWorkout)

//delete record
router.delete("/:id", removeWorkout)

module.exports = router;
