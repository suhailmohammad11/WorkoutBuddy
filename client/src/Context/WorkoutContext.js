import axios from "axios";
import { createContext, useState } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
export const Data = createContext();
  
export const WorkoutContextProvider = ({ children }) => {
  const {user} = useAuthContext();
  const [workouts, setWorkouts] = useState(null);

    //get request function
  
    const getWorkouts = async () => {
      const response = await axios.get("http://localhost:4000/api/workouts", {
        headers:{
          "Authorization" : `Bearer ${user.token}`
        }
      });
      const data = response.data;
      setWorkouts(data);
    };

  const [form, setForm] = useState({
    title: "",
    reps: "",
    load: "",
  });

 //remove workout
  const deleteWorkout = async (_id) => {
    await axios.delete(`http://localhost:4000/api/workouts/${_id}`,{
       headers:{
          "Authorization" : `Bearer ${user.token}`
        }
    });
    getWorkouts();
  };

  //update request state
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    reps: "",
    load: "",
  });



  const toggleUpdate = (item) => {
    setUpdateForm({
      _id:item._id,
      title: item.title,
      reps: item.reps,
      load: item.load,
    });
  };


  return (
    <Data.Provider value={{ workouts, setWorkouts, getWorkouts, form , setForm , deleteWorkout, updateForm, setUpdateForm,
        toggleUpdate
     }}>{children}</Data.Provider>
  );
};


