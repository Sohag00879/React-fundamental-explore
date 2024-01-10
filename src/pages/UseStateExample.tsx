import React, { useState } from "react";

const UseStateExample = () => {

    const [user, setUser] = useState({ name: " " , email: " "});

  const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(user)
  }

const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
 const inputName = e.target.name;
 const value = e.target.value;
 setUser({...user, [inputName]: value});
}

  return (
<form onSubmit={handleSubmit}>
      <input
      onChange={handleChange}
        type="text"
        name="name"
        id="name"
        className="border border-2"
      />
      <input
      onChange={handleChange}
       type="text" 
       name="email" 
       id="email" 
       className="border border-2" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseStateExample;
