import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Register from "./screens/Register";

// Import Components
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container p-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
