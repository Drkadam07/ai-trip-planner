import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/auth/Landing.page.jsx";
import CreateTrip from "./pages/app/CreateTrip.page.jsx";
import ViewTrip from "./pages/app/ViewTrip.page.jsx";
import MyTrips from "./pages/app/MyTrips.page.jsx";
import AppWrapper from "./components/wrappers/AppWrapper.jsx";
import SignUp from "./pages/auth/SignUp.page.jsx";
import Login from "./pages/auth/Login.page.jsx";
import NotFound from "./pages/auth/NotFound.page.jsx";

function App() {
  return (
    <div className="App h-screen w-screen">
      <Routes>
        <Route path="/" element={<Landing />} index />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppWrapper />}>
          <Route path="new-trip" element={<CreateTrip />} index />
          <Route path="trip/:id" element={<ViewTrip />} />
          <Route path="my-trips" element={<MyTrips />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
