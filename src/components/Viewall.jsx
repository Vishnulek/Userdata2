import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [userData,changeUserData]=useState(
        {
            "users": [],
            "total": 208,
            "skip": 0,
            "limit": 30
          }
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/users").then(
            (response)=>{
                changeUserData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl:No</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Maiden name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Phone number</th>
      <th scope="col">Username</th>
      <th scope="col">Birthdate</th>
    </tr>
  </thead>
  <tbody>
   {userData.users.map(
    (value,index)=>{
        return  <tr>
        <th scope="row">{value.id}</th>
        <td>{value.firstName}</td>
        <td>{value.lastName}</td>
        <td>{value.maidenName}</td>
        <td>{value.age}</td>
        <td>{value.gender}</td>
        <td>{value.email}</td>
        <td>{value.phone}</td>
        <td>{value.username}</td>
        <td>{value.birthDate}</td>
      </tr>
    }
   )}
   
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
