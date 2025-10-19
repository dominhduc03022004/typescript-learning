import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Product } from "../../types/Iproduct";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ApiResponse } from "../../types/ApiRes";

function ListProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get<ApiResponse<Product[]>>(
          `http://localhost:3000/api/product`
        );
        console.log("data: ", data);
        setProducts(data);
      } catch (error) {
        console.log("error: ", error);
      }
    })();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      if (window.confirm("Ban co muon xoa khong?")) {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Bạn chưa đăng nhập hoặc không có quyền!");
          return;
        }
        await axios.delete(`http://localhost:3000/api/product/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts((prev) => prev.filter((item) => item._id !== id));
        toast.success("Xoa thanh cong");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 403) {
          toast.error("Bạn không có quyền thực hiện hành động này!");
        } else {
          toast.error(error.response.data.message);
        }
      } else {
        toast.error("Có lỗi xảy ra!");
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Quản lý Sản phẩm</h1>
        <Link to={`/admin/add_product`}>
          <button className="btn btn-primary">Thêm sản phẩm</button>
        </Link>
      </div>
      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Ảnh</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Mô tả</th>
            <th scope="col" style={{ width: "150px" }}>
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <th scope="row">{product._id}</th>
              <td>
                <img
                  src={`../src/assets/${product.image}`}
                  alt={product.name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString("vi-VN")}đ</td>
              <td>{product.description}</td>
              <td>
                <Link to={`/admin/edit_product/${product._id}`}>
                  <button className="btn btn-warning btn-sm me-2">Sửa</button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    handleDelete(product._id);
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

export default ListProduct;
