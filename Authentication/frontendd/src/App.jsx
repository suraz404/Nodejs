import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import DataContext from "./context/DataContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(DataContext);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const { isLoggedIn } = useContext(DataContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
