import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavBar({ catergoryData, setCategoryData }) {
  const cartData = useSelector((state) => state.cart);
  const { data, status } = useSelector((state) => state.product);
  const navigate = useNavigate();

  // function for category data.

  const CategorizingFunction = (categoryValue) => {
    const category = data.filter((item) => {
      return item.category == categoryValue;
    });
    setCategoryData(category);
  };

  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          onClick={() => {
            navigate("/"), setCategoryData([]);
          }}
          href="#"
          className="navbar-brand"
        >
          SHOP CORNER
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    onClick={(e) => CategorizingFunction(e.target.innerText)}
                    className="dropdown-item"
                    href="#"
                  >
                    women's clothing
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => CategorizingFunction(e.target.innerText)}
                    className="dropdown-item"
                    href="#"
                  >
                    jewelery
                  </a>
                </li>

                <li>
                  <a
                    onClick={(e) => CategorizingFunction(e.target.innerText)}
                    className="dropdown-item"
                    href="#"
                  >
                    electronics
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => CategorizingFunction(e.target.innerText)}
                    className="dropdown-item"
                    href="#"
                  >
                    men's clothing
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                onClick={() => navigate("/cart")}
                className="nav-link active "
                aria-current="page"
                href="#"
              >
                CART : <span className="cartTag">{cartData.length}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
