import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./profile.css";

export const Profile = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = location.state.id;
    const {crudReducer} = useSelector(state => state);
    const name = crudReducer[id].name;
    const [profileDetails, setProfileDetails] = useState({
        name: crudReducer[id].name,
        age: crudReducer[id].age,
        city: crudReducer[id].city,
        role: crudReducer[id].role,
        id: crudReducer[id].id
    });
    const [showSubmit, setShowSubmit] = useState(false);
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
      <div className='profileOuter'>
          <div className='profileHeader'>
              <span className='profileHeading'>{name}'s profile</span>
            <button onClick={()=>edit()} className="editButton" style={{alignSelf:"end"}}>Edit</button>
          </div>
              <div className='userCard editor'>
                  <div className='mt-2'><span className='heading'>Name:</span><input className='form-control' readOnly={showSubmit?false:true} value={profileDetails["name"]} name="name" onChange={(e)=>editText(e)}/></div>
                  <div className='mt-2'><span className='heading'>Age:</span><input className='form-control' readOnly={showSubmit?false:true} value={profileDetails["age"]} name="age" onChange={(e)=>editText(e)}/></div>
                  <div className='mt-2'><span className='heading'>City:</span><input className='form-control' readOnly={showSubmit?false:true} value={profileDetails["city"]} name="city" onChange={(e)=>editText(e)}/></div>
                  <div className='mt-2'><span className='heading'>Role:</span><input className='form-control' readOnly={showSubmit?false:true} value={profileDetails["role"]} name="role" onChange={(e)=>editText(e)}/></div>
                  
              </div>
          {showSubmit && <button onClick={() => onSubmit()} className="btn btn-success mt-2">Submit</button>}
          <button onClick={()=>navigate("/")} className="editButton mt-2 ">back</button>
      </div>
  )
}
