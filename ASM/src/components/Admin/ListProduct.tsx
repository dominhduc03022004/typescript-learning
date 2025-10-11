import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Product } from "../../types/Iproduct";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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

  const handleDelete = async (id: number) => {
    try {
      if (window.confirm("Ban co muon xoa khong?")) {
        await axios.delete(" http://localhost:3000/products/" + id);
        setProducts((productsPrev) => {
          return productsPrev.filter((item) => item.id !== id);
        });
        toast.success("Xoa thanh cong");
      }
    } catch (error) {
      toast.error((error as AxiosError).message)
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
                <Link to={`/admin/edit_product/${product.id}`}>
                  <button className="btn btn-warning btn-sm me-2">Sửa</button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    handleDelete(product.id);
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
