import React from "react";
import Footer from "./components/common/Footer";
import MenuBar from "./components/common/MenuBar";
import TopBar from "./components/common/TopBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHeader from "./components/common/PageHeader";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <PageHeader />
        <MenuBar />
        <Routes>
          <Route path="/sercices" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
