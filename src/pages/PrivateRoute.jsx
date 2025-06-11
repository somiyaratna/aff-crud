import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? (
    <>
      <Navbar />
      {children}
    </>
  ) : (
    <Navigate to="/" />
  );
}
