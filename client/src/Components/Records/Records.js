import React, { useEffect, useContext } from "react";
import "./RecordStyles.css";
import { Data } from "../../Context/WorkoutContext";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Records = () => {
  const {user} = useAuthContext();
  const { workouts, getWorkouts, deleteWorkout, toggleUpdate } =
    useContext(Data);

  useEffect(() => {
    if(user){
getWorkouts();
    }
    
  }, [user, getWorkouts]);
  return (
    <div className="records">
      {workouts &&
        workouts.map((item) => {
          return (
            <div className="record" key={item._id}>
              <h1>Exercise: {item.title}</h1>
              <p>Reps: {item.reps}</p>
              <p>Loads(in KG): {item.load}</p>
              <div className="btns">
                <button onClick={() => toggleUpdate(item)}><img src="edit.jpg" /></button>{" "}
                <button onClick={() => deleteWorkout(item._id)}><img src="delete.png " /></button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Records;
