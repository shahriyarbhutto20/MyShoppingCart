import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import CartPage from "../Pages/CartPage";
import ReactDOM from "react-dom/client";
import NavBar from "../Components/NavBar";
import { useState } from "react";

function RoutingPage() {
  // state for categories.
  const [catergoryData, setCategoryData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <div className="mainDiv">
          <div className="navBarDiv mb-3">
            <NavBar
              catergoryData={catergoryData}
              setCategoryData={setCategoryData}
            />
          </div>
          <div className="conentDivs ">
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    catergoryData={catergoryData}
                    setCategoryData={setCategoryData}
                  />
                }
              />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default RoutingPage;
