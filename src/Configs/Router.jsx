import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Admin Screens
import Admin from "../Screens/Admin/Admin";
import AdminInstitute from "../Screens/Admin/Institute/Institute";
import AdminInstituteAdd from "../Screens/Admin/Institute/Add";
import AdminUsers from "../Screens/Admin/Users";
import AdminTheme from "../Screens/Admin/Theme";
import AdminStatus from "../Screens/Admin/Status";
// Error Screen
import Error404 from "../Screens/Error";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} >
          <Route index element={<AdminInstitute />} />
          <Route path="institute">
            <Route index element={<AdminInstitute />} />
            <Route path="add" element={<AdminInstituteAdd />} />
          </Route>
          <Route path="users" element={<AdminUsers />} />
          <Route path="theme" element={<AdminTheme />} />
          <Route path="status" element={<AdminStatus />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;