import React from "react";
// import ListProduct from "../components/Admin/ListProduct";
import { Outlet } from "react-router-dom";

function HomeAdmin() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        className="white text-black p-3"
        style={{ width: "280px", flexShrink: 0 }}
      >
        <h3 className="text-center mb-4">Trang Admin</h3>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="/admin/products" className="nav-link active text-black">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="/admin/categories" className="nav-link text-black">
                Danh mục
              </a>
            </li>
        </ul>
        <hr />
      </aside>
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <header className="navbar navbar-light bg-dark p-3 border-bottom shadow-sm">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Tìm kiếm..."
              aria-label="Search"
              value=""
            />
            <button className="btn btn-outline-secondary" type="submit">
              Seach
            </button>
          </form>
        </header>
        <main
          className="flex-grow-1 p-4"
          style={{ backgroundColor: "#e2e4e5ff" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default HomeAdmin;
