import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../types/Iproduct";

function ListProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Product[]>(
          `http://localhost:3000/products`
        );
        console.log("data: ", data);
        setProducts(data);
      } catch (error) {
        console.log("error: ", error);
      }
    })();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Quản lý Sản phẩm</h1>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>Thêm sản phẩm
        </button>
      </div>
      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Ảnh</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col" style={{ width: "150px" }}>
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>
                <img
                  src={`../src/assets/${product.image}`}
                  alt={product.name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString("vi-VN")}đ</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Sửa</button>
                <button className="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListProduct;
