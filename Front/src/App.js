import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Works from "./Components/pages/Works";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import MainPage from "./Components/pages/MainPage";
import NavBar from "./Components/helpers/NavBar";
import PolicySupport from "./Components/pages/PolicySupport";
import Feedback from "./Components/pages/Feedback";
import AdminNotification from "./Components/pages/AdminNotification";
import Auth from "./Components/pages/Auth";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("adminToken");
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/works" element={<Works />} />
        <Route path="/PolicySupport" element={<PolicySupport />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminNotification />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
