import React from "react";

const Profile = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
      <h1>{props.lname.name}</h1>
    </>
  );
};

export default Profile;
