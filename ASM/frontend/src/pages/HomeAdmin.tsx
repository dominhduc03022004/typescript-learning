import React from "react";
// import ListProduct from "../components/Admin/ListProduct";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomeAdmin() {
  const { isLoggedIn, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    alert("Bạn đã đăng xuất!");
  };
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
            <Link to={`/admin/products`} className="nav-link text-black">
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link to={`/admin/categories`} className="nav-link text-black">
              Danh mục
            </Link>
          </li>
        </ul>
        <hr />
        <div className="navbar-nav ms-auto">
          {isLoggedIn && user ? (
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Xin chào, {user.userName}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/">
                    Trang sản phẩm
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="nav-item">
              <Link to="/login" className="btn btn-outline-primary">
                Đăng nhập
              </Link>
            </div>
          )}
        </div>
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
