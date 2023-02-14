// Code Keypad Component Here

function Keypad (){
    const handleChange = () => {
        console.log('Entering password...');
      };
    
      return (
        <div>
          <label htmlFor="password-input">Password:</label>
          <input type="password" id="password-input" onChange={handleChange} />
        </div>
      );
    
}

export default Keypad;