import { useEffect, useState } from "react";
import { loginUser } from "../api/apiUsers";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const result = await loginUser({ username, password });
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("user", JSON.stringify(result));
      if (result.accessToken) navigate("/dashboard");
    } catch (error) {
      setError(`Login failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/dashboard");
  }, [navigate]);

  return (
    <>
      <div className="min-h-screen rounded-2xl flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-blue-600 font-bold mb-4 font-sans">
          Aff Products
        </h1>
        <form
          onSubmit={handleLogin}
          className="bg-blue-50 p-6 md:p-10 shadow-md rounded-lg w-96"
        >
          <h2 className="text-2xl mb-4 font-bold">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-3 border rounded-lg border-gray-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded-lg border-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out">
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
        <div className="mt-4 text-sm">
          Note: Usernames and passwords can be found{" "}
          <a
            className="text-blue-500 underline"
            href="https://dummyjson.com/users"
            target="_blank"
          >
            here
          </a>
        </div>
      </div>
    </>
  );
}
