import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ApiResponse } from "../../types/ApiRes";
import { Category } from "../../types/Icategory";

function ListCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { datas },
        } = await axios.get<ApiResponse<Category[]>>(
          `http://localhost:3000/api/category`
        );
        console.log("data: ", datas);
        setCategories(datas);
      } catch (error) {
        console.log("error: ", error);
      }
    })();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      if (window.confirm("Ban co muon xoa khong?")) {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:3000/api/category/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories((prev) => prev.filter((item) => item._id !== id));
        toast.success("Xoa thanh cong");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Có lỗi xảy ra!");
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Quản lý danh mục</h1>
        <Link to={`/admin/add_category`}>
          <button className="btn btn-primary">Thêm danh mục</button>
        </Link>
      </div>
      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên danh mục</th>
            <th scope="col" style={{ width: "150px" }}>
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <th scope="row">{category._id}</th>
              <td>{category.name}</td>
              <td>
                <Link to={`/admin/edit_category/${category._id}`}>
                  <button className="btn btn-warning btn-sm me-2">Sửa</button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    handleDelete(category._id);
                  }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListCategory;
