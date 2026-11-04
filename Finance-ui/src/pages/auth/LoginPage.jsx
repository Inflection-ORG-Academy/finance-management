import { useState } from "react";
import { Link } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log(res);

      const data = await res.json();

      console.log(data);

      if (data.success === false) {
        alert(data.message);
        return;
      }

      const token = data.token;
      document.cookie = `token=${token}; max-age=86400; path=/`;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-10 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Login</h1>
        <p className="text-sm text-slate-500 mb-6">
          Welcome back! Please sign in to continue.
        </p>
        <div className="pt-4 border-t border-slate-100">
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border outline-none py-1.5 rounded px-2"
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border outline-none py-1.5 rounded px-2"
            />

            <button
              type="submit"
              className="px-5 py-1.5 bg-blue-900 text-blue-100 mb-5 rounded"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
