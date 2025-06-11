import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import PrivateRoute from "./pages/PrivateRoute";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
