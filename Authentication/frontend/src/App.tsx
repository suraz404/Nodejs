import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup";
import { Login } from "./pages/login";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
