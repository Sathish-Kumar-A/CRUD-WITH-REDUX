import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./home.css";
import { useNavigate } from 'react-router-dom';
import { Intro } from './Intro';

export const Home = () => {
    const {crudReducer} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addPage, setAddPage] = useState(false);
    // console.log(crudReducer);
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    city: "",
    role: "",
    image:""
  })
  const editText = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  }
  const deleteUser = (id) => { 
    dispatch({type: "DELETE_USER", payload: id});
  }
  const addUser = () => {
    dispatch({ type: "CREATE_USER", payload: { ...newUser, id: crudReducer.length } });
    setAddPage(false);
  }
  const goToProfile = (id) => {
    navigate("/profile/" + id, {state: {id: id}});
  }
  return (
    <div className='d-flex flex-column justify-content-center'>
      <Intro className="h-25 d-inline-block"/>
      <div className='d-flex justify-content-between'>
        <h2>Users</h2>
        <button className='btn btn-primary ' onClick={() => { setAddPage(true); setNewUser({ name: "", age: "", city: "", role: "" }) }}>Add User</button>
      </div>
      <div>
      {!addPage && <div className='usersContainer'>
        {crudReducer.map((user, index) => {
          return (
            <div className='userCard rounded' key={index}>
              <div className='d-flex align-items-center'>
                <img src={user.img} alt="user" height={70} width={70} className='rounded-circle' />
                <h3 className='text-primary' onClick={() => goToProfile(user["id"])}>{user["name"]}</h3>
              </div>
              <button className='btn btn-danger' onClick={()=>deleteUser(user["id"])}>Delete</button>
            </div>
              )
        })}
      </div>}
      {addPage &&
        <div>
              <div>
                  <h3>Name:<input value={newUser["name"]} name="name" onChange={(e)=>editText(e)}/></h3>
                  <h3>Age:<input value={newUser["age"]} name="age" onChange={(e)=>editText(e)}/></h3>
                  <h3>City:<input value={newUser["city"]} name="city" onChange={(e)=>editText(e)}/></h3>
                  <h3>Role:<input value={newUser["role"]} name="role" onChange={(e) => editText(e)} /></h3>
                  <h3>Image:<input type="file" /></h3>
              </div>
              <button className='btn btn-success' onClick={() => addUser()}>Submit</button>
          </div>
        }
        </div>
        </div>
  )
}
