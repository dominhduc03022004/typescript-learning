import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types/Iproduct";
import { Link } from "react-router-dom";

function MainHome() {
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
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 text-center">
              <Link to={`/detail/${product.id}`}>
                <img
                  src={`src/assets/${product.image}`}
                  className="card-img-top"
                />
              </Link>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-bold text-danger">
                  {product.price.toLocaleString("vi-VN")}đ
                </p>
                <div className="mt-auto">
                  <button className="btn btn-primary w-100 mb-2">
                    Mua ngay
                  </button>
                  <button className="btn btn-outline-primary w-100">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainHome;
