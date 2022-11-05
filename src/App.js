import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Movies from "./components/pages/Movies";
import Tickets from "./components/pages/Tickets";
import CinemaHall from "./components/pages/CinemaHall";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/tickets" element={<Tickets />}></Route>
        
          <Route path="/cinemaHall" element={<CinemaHall />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
