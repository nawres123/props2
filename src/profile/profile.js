import React from 'react';
import propTypes  from 'prop-types';


const Profil = ({fullName, bio, profession,handleAlert,children }) => { 
  
  
    return(

  <div>

 
    <div className="img">
  
      <img style={{width:320,height:240,padding:'30px'}} src="nawres.jpg" alt="" /> {propTypes.children}
    </div>
  
 <div className="my profile">

 
       <h1 >Name:</h1>
   <h2 style={{ fontFamily:'sans-serif', padding: "10px",textAlign:"center"}}> {fullName}</h2>
  <h3 >Bio:</h3>
  <h3>{bio}</h3>
  
  <span >Profession:</span> 
<span style={{fontSize: 22, color: 'red'}}>{profession}</span>

</div>
<div className="bouton">
<button className="bouton " onClick={ e => { handleAlert(fullName)}}>{handleAlert}click on </button>
</div>
</div>

    );
    }

    
      Profil.defaultProps = {
        fullName: "My Name",
        bio: "My Bio",
        profession: "My Profession",
        children: 'nawres.jpg'
       
    }
    
    
    
    export default Profil;