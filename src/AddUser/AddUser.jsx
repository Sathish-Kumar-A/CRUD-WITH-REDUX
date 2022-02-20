import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {crudReducer} = useSelector(state => state);
    const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    city: "",
    role: ""
  })
  const editText = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
    }
    const addUser = () => {
    if (newUser["name"].length && newUser["age"].length && newUser["city"].length && newUser["role"].length) {
      dispatch({ type: "CREATE_USER", payload: { ...newUser, id: crudReducer.length } });
      navigate("/")
    }
    else {
      toast.error("Please fill out all fields");
    }
  }
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
      }}>
          <ToastContainer />
          <div className='addUserDiv'>
              <div className='userCard editor rounded'>
                  <div className='my-2'><span className='heading'>Name</span><input className='form-control' placeholder='Enter user name' value={newUser["name"]} name="name" onChange={(e)=>editText(e)}/></div>
                  <div className='my-2'><span className='heading'>Age</span><input className='form-control' placeholder='Enter user age' value={newUser["age"]} name="age" onChange={(e)=>editText(e)}/></div>
                  <div className='my-2'><span className='heading'>City</span><input className='form-control' placeholder='Enter user city' value={newUser["city"]} name="city" onChange={(e)=>editText(e)}/></div>
                  <div className='my-2'><span className='heading'>Role</span><input className='form-control' placeholder='Enter user role' value={newUser["role"]} name="role" onChange={(e) => editText(e)} /></div>
          </div>
          <button className='btn btn-success mt-2' onClick={() => addUser()}>Submit</button>
          <button className="btn btn-warning text-white mt-2" onClick={()=>navigate("/")}>back</button>
          </div>
    </div>
  )
}
