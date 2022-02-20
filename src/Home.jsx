import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./home.css";
import { useNavigate } from 'react-router-dom';
import { Intro } from './Intro';

export const Home = () => {
    const {crudReducer} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const deleteUser = (id) => { 
    dispatch({type: "DELETE_USER", payload: id});
  }
  
  const goToProfile = (id) => {
    navigate("/profile/" + id, {state: {id: id}});
  }
  return (
    <div className='d-flex flex-column justify-content-center mx-5'>
      <Intro className="h-25 d-inline-block"/>
      <div className='d-flex justify-content-between'>
        <button className='btn btn-primary ' onClick={() => navigate("/createuser")}>Add User</button>
      </div>
      <div className='usersContainer'>
        {crudReducer.map((user, index) => {
          return (
            <div className='userCard rounded' key={index}>
              <div className='d-flex align-items-center'>
                <h3 style={{cursor:"pointer"}} onClick={() => goToProfile(user["id"])}>{user["name"]}</h3>
              </div>
              <button className='btn btn-danger' onClick={()=>deleteUser(user["id"])}>Delete</button>
            </div>
              )
        })}
      </div>
      {/* {addPage &&
        <div className='addUserDiv'>
              <div className='userCard rounded'>
                  <div className='my-2'><span className='heading'>Name</span><input className='form-control' placeholder='Enter user name' value={newUser["name"]} name="name" onChange={(e)=>editText(e)}/></div>
                  <div className='my-2'><span className='heading'>Age</span><input className='form-control' placeholder='Enter user age' value={newUser["age"]} name="age" onChange={(e)=>editText(e)}/></div>
                  <div className='my-2'><span className='heading'>City</span><input className='form-control' placeholder='Enter user city' value={newUser["city"]} name="city" onChange={(e)=>editText(e)}/></div>
                  <div className='my-2'><span className='heading'>Role</span><input className='form-control' placeholder='Enter user role' value={newUser["role"]} name="role" onChange={(e) => editText(e)} /></div>
          </div>
          <button className='btn btn-success mt-2' onClick={() => addUser()}>Submit</button>
          <button className="btn btn-warning text-white mt-2" onClick={()=>setAddPage(false)}>back</button>
          </div>
        } */}
        </div>
  )
}
