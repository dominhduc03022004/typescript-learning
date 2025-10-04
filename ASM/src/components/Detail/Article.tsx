import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../../types/Iproduct";

function Article() {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Product>(
          `http://localhost:3000/products/${id}`
        );
        setProduct(data);
      } catch (err) {
        console.log("error: ", err);
      }
    })();
  }, [id]);

  if (!product) {
    return <div className="container text-center my-5"><h1>Sản phẩm không tồn tại</h1></div>;
  }

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={`/src/assets/${product.image}`} 
            className="img-fluid rounded shadow-sm w-100"
            alt={product.name} 
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5 fw-bold">{product.name}</h1>
          <h3 className="my-3 text-danger">
            {product.price ? `${product.price.toLocaleString("vi-VN")}đ` : 'Liên hệ'}
          </h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-primary btn-lg mt-3">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;