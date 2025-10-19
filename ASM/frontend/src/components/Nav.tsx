import React, { useEffect, useState } from "react";
import { Category } from "../types/Icategory";
import axios from "axios";
import { ApiResponse } from "../types/ApiRes";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Nav() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { isLoggedIn, user, logout } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { datas },
        } = await axios.get<ApiResponse<Category[]>>(
          `http://localhost:3000/api/category`
        );
        setCategories(datas);
      } catch (error) {
        console.log("error: ", error);
      }
    })();
  }, []);

  const handleLogout = () => {
    logout(); 
    alert("Bạn đã đăng xuất!");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
             <li className="nav-item">
              <Link to={`/`} className="nav-link">Trang chủ</Link>
            </li>
            {categories?.map((category) => (
              <li className="nav-item" key={category._id}>
                <Link to={`/category/${category._id}`} className="nav-link">{category.name}</Link>
              </li>
            ))}
          </ul>
          <form className="d-flex mx-auto" role="search" style={{ minWidth: "300px" }}>
            <input className="form-control me-2" type="search" placeholder="MUỐN GÌ!?" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Tìm</button>
          </form>

          <div className="navbar-nav ms-auto">
            {isLoggedIn && user ? (
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Xin chào, {user.userName}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/admin">Trang quản trị</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="nav-item">
                <Link to="/login" className="btn btn-outline-primary">Đăng nhập</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;