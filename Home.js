import React from "react";
import "./Home.css";
import {db} from "../firebase";
import {Link} from "react-router-dom";
import {useState , useEffect} from "react";
import "firebase/database"; 
import firebase from "firebase/app"
import axios from 'axios';
import ReactTable from 'react-table';
import { Table } from 'semantic-ui-react';

import {async} from '@firebase/util';
import {addDoc,collection,getDocs,updateDoc,deleteDoc,doc,getDoc} from 'firebase/firestore';


function Home (){
    const [users, setUsers] = useState();
    const userCollectionRef = collection(db,"userDataRecords")
    
   

//  const updateUser = async (id,contact) => {
//      const userDoc = doc(db,"userDataRecords",id);
//      const edit = {contact:contact+1}
//      await updateDoc (userDoc,edit);
//    }

//    const deleteUser = async (id) =>{
//      const userDoc = doc(db,"userDataRecords",id);
//      await deleteDoc(userDoc); 
//    };
//    const createUser = async () =>{
//     await addDoc(userCollectionRef,{name:name,email:email,contact:edit})
//    }


  useEffect (() => {
     const getUsers = async () => {
        try{
     const data = await getDocs(userCollectionRef);
     const filteredData = data.docs.map((doc) =>({
        ...doc.data(),
        id:doc.id,
     }));
     console.log(filteredData); 
        }catch(err){
            console.error(err);
        }
      
  };
      getUsers();
  },[]);

  return(
    <div className="tbl">
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
      </tr>
      {/* <tr>
        <td>Anom</td>
        <td>19</td>
        <td>Male</td>
      </tr>
      <tr>
        <td>Megha</td>
        <td>19</td>
        <td>Female</td>
      </tr>
      <tr>
        <td>Subham</td>
        <td>25</td>
        <td>Male</td>
      </tr> */}
    </table>
  </div>
  )


//   <Table.Body>
//   {users.map((userData) => {
//      return (
//        <Table.Row>
//           <Table.Cell>{userData.name}</Table.Cell>
//            <Table.Cell>{userData.email}</Table.Cell>
//            <Table.Cell>{userData.contact}</Table.Cell>
//         </Table.Row>
//    )})}
// </Table.Body>

 
    // {users && users.map ((user)=>{
    //     return (<div>    <h1>Name:{user.name}</h1>
    //                      <h1>Email:{user.email}</h1>
    //                      <h1>Contact:{user.contact}</h1>
    //                      <button  onClick={()=>{updateUser(user.id)}}>update</button>
    //                      <button onClick={()=>{deleteUser(user.id)}}>delete</button>
    //                   </div>      )            
    // })}
    // <div style={{marginTop:"100px"}}>
    //     <table classname="styled-table">
    //          <thead>
    //              <tr>
    //              <th style={{textAlign:"center"}}>No.</th>
    //                  <th style={{textAlign:"center"}}>Name</th>
    //                  <th style={{textAlign:"center"}}>Email</th>
    //                  <th style={{textAlign:"center"}}>Contact</th>
    //                <th style={{textAlign:"center"}}>Action</th>
    //              </tr>
    //          </thead>
          /* <tbody> */
              /* {Object.keys(users).map((id,index) =>{  
                 return(
                     <tr key={id}>
                         <th scope="row">{index +1}</th>
                         <td>{users[id].name}</td>
                        <td>{users[id].email}</td>
                         <td>{users[id].contact}</td> 
                         <td>
                             <Link to={'/update/${id}'}>
                                 <button className="btn btn-edit">Edit</button>
                             </Link>
                             <button className="btn btn-delete">Delete</button>
                             <Link to={'/view/${id}'}>
                                 <button className="btn btn-view">View</button>
                             </Link>
                         </td>
                     </tr>
                 );}
             )};

          </tbody> */
        //  </table>

        // </div>
    
                 };

   export default Home; 


 