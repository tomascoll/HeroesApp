import { Route, Routes, Navigate } from "react-router-dom";
import { MarvelPage, DcPage, Navbar, SearchHero, Hero } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
          <Route path="search" element={<SearchHero/>} />
          <Route path="hero/:id" element={<Hero/>}/>
        </Routes>
      </div>
    </>
  );
};
