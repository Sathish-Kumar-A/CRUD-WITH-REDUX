import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./home.css";
import { useNavigate } from 'react-router-dom';

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
    role:""
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
    <div>
      <button onClick={() => { setAddPage(true);setNewUser({name:"",age:"",city:"",role:""})}}>Add User</button>
      {!addPage&&<div className='usersContainer'>
        {crudReducer.map((user, index) => {
          return (
            <div className='userCard' key={index}>
              <h3 onClick={() => goToProfile(user["id"])}>{user["name"]}</h3>
              <button onClick={()=>deleteUser(user["id"])}>Delete</button>
              {/* <h3>Age:{user["age"]}</h3>
              <h3>City:{user["city"]}</h3>
              <h3>Role:{user["role"]}</h3> */}
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
                  <h3>Role:<input value={newUser["role"]} name="role" onChange={(e)=>editText(e)}/></h3>
          </div>
          <button onClick={() => addUser()}>Submit</button>
          </div>
          }
        </div>
  )
}
