import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleSubmit = () => {
    localStorage.setItem("token", "jkansc812ku37baksjd");
  };
  console.log(user);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;
