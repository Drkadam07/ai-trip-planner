import React from "react";

function SignupForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <input type="text" placeholder="USERNAME" />
        <input type="email" placeholder="EMAIL" />
        <input type="password" placeholder="PASSWORD" />
      </form>
    </div>
  );
}

export default SignupForm;
