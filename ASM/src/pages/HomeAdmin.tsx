import React from "react";
import ListProduct from "../components/Admin/ListProduct";

function HomeAdmin() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        className="white text-black p-3"
        style={{ width: "280px", flexShrink: 0 }}
      >
        <h3 className="text-center mb-4">
          <i className="bi bi-shield-lock-fill me-2"></i>Trang Admin
        </h3>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <a href="#" className="nav-link active text-black">
              <i className="bi bi-box-seam me-2"></i>
              Sản phẩm
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-black">
              <i className="bi bi-receipt me-2"></i>
              Đơn hàng
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-black">
              <i className="bi bi-people me-2"></i>
              Khách hàng
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
            <ListProduct/>
        </main>
      </div>
    </div>
  );
}

export default HomeAdmin;
