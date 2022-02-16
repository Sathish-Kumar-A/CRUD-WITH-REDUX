import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

export const Profile = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = location.state.id;
    const {crudReducer} = useSelector(state => state);
    const [profileDetails, setProfileDetails] = useState({
        name: crudReducer[id].name,
        age: crudReducer[id].age,
        city: crudReducer[id].city,
        role: crudReducer[id].role,
        id: crudReducer[id].id
    });    const [showSubmit, setShowSubmit] = useState(false);
    // console.log(profileDetails);
    const edit = () => {
        setShowSubmit(true);
    }
    const editText = (e) => {
        const name = e.target.name;
        setProfileDetails({...profileDetails, [name]: e.target.value});
    }

    const onSubmit = () => {
        setShowSubmit(false);
        dispatch({type: "UPDATE_USER", payload: profileDetails});
        navigate("/")
    }
  return (
      <div>
          <button onClick={()=>edit()}>Edit</button>
          {!showSubmit &&
            <div>
                <h1>Name:{profileDetails["name"]}</h1>
                <h1>Age:{profileDetails["age"]}</h1>
                <h1>City:{profileDetails["city"]}</h1>
                <h1>Role:{profileDetails["role"]}</h1>
            </div>
          }
          {showSubmit &&
              <div>
                  <h3>Name:<input value={profileDetails["name"]} name="name" onChange={(e)=>editText(e)}/></h3>
                  <h3>Age:<input value={profileDetails["age"]} name="age" onChange={(e)=>editText(e)}/></h3>
                  <h3>City:<input value={profileDetails["city"]} name="city" onChange={(e)=>editText(e)}/></h3>
                  <h3>Role:<input value={profileDetails["role"]} name="role" onChange={(e)=>editText(e)}/></h3>
                  
              </div>
          }
          {showSubmit && <button onClick={() => onSubmit()}>Submit</button>}
          <button onClick={()=>navigate("/")}>back</button>
      </div>
  )
}
