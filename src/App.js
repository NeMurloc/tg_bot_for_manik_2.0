import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Services from "./pages/ServicesPage";
import Info from "./pages/info/Info";
import SelectTime from "./pages/SelectTime";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="*" element={<Services />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/selectTime" element={<SelectTime />} />

      </Routes>
    </BrowserRouter>

  );

}

export default App;
