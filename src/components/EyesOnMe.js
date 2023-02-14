// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    const handleBlur =() => {
   console.log('Hey! Eyes on me!');
    };
   const handleFocus =() => { 
   console.log('Good!');
};
  return(
    <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
    </button>
  );
}
export default EyesOnMe;