import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// Layouts
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import Tickets from "./pages/admin/Tickets";
import Doctor from "./pages/admin/Doctor";
import Patient from "./pages/admin/Patient";
import Cita from "./pages/admin/Cita";
import Home2 from "./pages/Home2"
import { useEffect } from "react";
import { supabase } from './supabase/supabase'

function App() {

  return (
   
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<Home2 />} />
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="Doctor" element={<Doctor />} />
          <Route path="Patient" element={<Patient />} />
          <Route path="Cita" element={<Cita />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
 
  );
}

export default App;
