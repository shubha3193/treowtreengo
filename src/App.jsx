import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; 
function App() {
  return (
    <Router>
      {/* <Header />  */}
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        {/* <Route path="/add-part" element={<AddSparePart />} /> 
        <Route path="/spare-part/:id" element={<SparePartDetails />} /> 
        
        <Route path="/getAll" element={<SparePart />} /> 
        <Route path="/book-service" element={<BookAppointment />} /> 

        <Route path="/edit-spare-part/:id" element={<EditSparePart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;