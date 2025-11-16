import React, { useContext } from "react";
import "./FormStyles.css";
import axios from "axios";
import { Data } from "../../Context/WorkoutContext";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Form = () => {
  const { user } = useAuthContext();

  //Create state for updating fields

  const {
    form,
    setForm,
    setWorkouts,
    workouts,
    getWorkouts,
    updateForm,
    setUpdateForm,
  } = useContext(Data);

  const updateField = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //create workout
  const createWorkout = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:4000/api/workouts",
      form,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setWorkouts([...workouts, response.data]);
    setForm({ title: "", reps: "", load: "" });
  };

  //handle update field
  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };
  //Edit Workout
  const patchWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateForm;

    await axios.patch(
      `http://localhost:4000/api/workouts/${_id}`,
      {
        title,
        reps,
        load,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    getWorkouts();

    setUpdateForm({ _id: null, title: "", reps: "", load: "" });
  };

  return (
    <>
      {/* Create Form */}
      {!updateForm._id && (
        <form onSubmit={createWorkout}>
          <h1>Add Workout</h1>
          <div className="elements">
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={updateField}
            />
            <br />
            <label>Reps</label>
            <br />
            <input
              type="text"
              name="reps"
              value={form.reps}
              onChange={updateField}
            />
            <br />
            <label>Load</label>
            <br />
            <input
              type="text"
              name="load"
              value={form.load}
              onChange={updateField}
            />
            <br />
            <br />
            <button>Submit</button>
          </div>
        </form>
      )}

      {/* Update Form */}
      {updateForm._id && (
        <form>
          <h1>Edit Workout</h1>
          <div className="elements">
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={updateForm.title}
              onChange={handleUpdateFieldChange}
            />
            <br />
            <label>Reps</label>
            <br />
            <input
              type="text"
              name="reps"
              value={updateForm.reps}
              onChange={handleUpdateFieldChange}
            />
            <br />
            <label>Load</label>
            <br />
            <input
              type="text"
              name="load"
              value={updateForm.load}
              onChange={handleUpdateFieldChange}
            />
            <br />
            <br />

            <button onClick={patchWorkout}>update</button>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
