import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input
        type={props.registered ? "password" : "hidden"}
        placeholder="Confirm Password"
      />
      <button type="submit">{props.registered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
