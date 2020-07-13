import React from 'react';


function ProfileContainer(props) {
  return (     
      <div style={{height: "60px", right: 0, padding: "0px 10px",  display: "flex", position : "absolute",   backgroundColor: "#8a6b8f",       alignItems: "center"}}>
        {props.children}
      </div>
  );
}

export default ProfileContainer;
