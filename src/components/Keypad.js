function Keypad() {
  const handleChange = (event) => {
    console.log(`Entering password: ${event.target.value}`);
  };

  return (
    <div>
      <label htmlFor="password-input">Password:</label>
      <input type="password" id="password-input" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
