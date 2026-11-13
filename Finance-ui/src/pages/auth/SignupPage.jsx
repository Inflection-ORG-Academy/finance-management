import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignupPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password,
        }),
      });

      console.log(res);

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        alert(data.message);
        return;
      }

      setFullName("");
      setEmail("");
      setPassword("");

      alert(data.message);

      navigate("/auth/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md p-6 rounded-lg w-96 mx-auto"
        onSubmit={handleSignup}
      >
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <input
          className="w-full border outline-none px-2 py-1.5"
          placeholder="Enter full Name"
          required
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="w-full border outline-none px-2 py-1.5 mt-4"
          placeholder="Enter email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border outline-none px-2 py-1.5 mt-4"
          placeholder="Enter password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-right mt-4">
          <button
            type="submit"
            className="bg-purple-600 text-white px-2 py-1.5 rounded cursor-pointer"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
