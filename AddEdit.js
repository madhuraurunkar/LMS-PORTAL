import React, { useState } from "react";
import "./AddEdit.css";


  const AddEdit = () => {
  const [userData, setUserData] = useState({
    name:"",
    email:"",
    contact:"",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };


  const submitData = async (event) => {
    event.preventDefault();
    const { name,email,contact} = userData;

    if (name &&  email && contact ) {
      const res = fetch(
        "https://react-contact-fa05b-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            contact,
          }),
        }
      );

      if (res) {
        setUserData({
          name,
          email,
          contact,
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  
  return(
    <div style={{ marginTop : "100px"}}>
        <form 
        style={{
            margin :"auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center",
        }}
        
        >
        <label> Name </label>
        <input 
        type="text" 
        id="name"
        name="name"
        placeholder="Your Name...."
        value={userData.name}
        onChange={postUserData} />

        <label>Email </label>
        <input 
        type="email" 
        id="email"
        name="email"
        placeholder="Your Email...."
        value={userData.email}
        onChange={postUserData} />

        <label>Contact </label>
        <input 
        type="number" 
        id="contact"
        name="contact"
        placeholder="Your Contact...."
        value={userData.contact}
        onChange={postUserData} />

                     <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      Submit
                    </button>



        </form>
    </div>
  );
};


export default AddEdit;
