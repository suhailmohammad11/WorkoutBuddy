const Workout = require("../models/workoutModel");

//get all data

const getWorkouts = async (req, res) => {
  const user_id = req.user._id; 
  

  try {
    const workoutData = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

//get one data

const getWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const fetchData = await Workout.findById({ _id: id });
    res.status(200).send(fetchData);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

//create data

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  const user_id = req.user._id;
  try {
    const newData = new Workout({ title, reps, load, user_id });
    const workout = await newData.save();
    res.status(200).send(workout);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

//update data
const editWorkout = async (req, res) => {
  const id = req.params.id;
  const updateData = await Workout.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json(updateData);
};

//delete data
const removeWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await Workout.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  removeWorkout,
};
