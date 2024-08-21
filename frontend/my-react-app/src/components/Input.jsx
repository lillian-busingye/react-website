// import "../App";
import { useState } from "react";

function Input() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    alert("Login successful!");
  };
  return (
    <form className="box flex justify-between mt-10" onSubmit={handleSubmit}>
      <div className="form font-serif block">
        <h2 className="heading font-serif text-white">LOG IN</h2>
        {error && <p className="text-red-500">{error}</p>}
        <h3 className="heading font-serif text-white">Enter Email:</h3>
        <input
          type="email"
          name=""
          id="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4 className="heading font-serif text-white">Enter Password:</h4>
        <input
          type="password"
          name=""
          id="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit" className="btn">
            LOGIN
          </button>
        </div>
      </div>
      <img src="./src/assets/bottle.png" alt="bottle" className="img" />
    </form>
  );
}
export default Input;
