import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Admin Screens
import Admin from "../Screens/Admin/Admin";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>  
    );
}

export default Router;