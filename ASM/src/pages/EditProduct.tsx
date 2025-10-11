import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const { id } = useParams();

  const navi = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        // console.log('data: ', data);
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setImage(data.imgae);
      } catch (error) {
        console.log("error: ", error);
      }
    })();
  }, []);

  const EditProduct = async (e: any) => {
    e.preventDefault();
    const productData = { name, price, description, image };
    try {
      await axios.put(`http://localhost:3000/products/${id}`, productData);
      alert("Sua sản phẩm thanh cong~");
      navi("/admin/products");
    } catch (error) {
      console.log("error: ", error);
      alert("Sua sản phẩm that bai");
    }
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                <h2 className="mb-0">Thêm Sản Phẩm Mới</h2>
              </div>
              <div className="card-body">
                <form onSubmit={EditProduct}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">
                      Tên sản phẩm
                    </label>
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Ví dụ: iPhone 17"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label fw-bold">
                      Giá sản phẩm
                    </label>
                    <input
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      type="number"
                      className="form-control"
                      placeholder="Ví dụ: 35000000"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label fw-bold">
                      Mô tả
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="form-control"
                      rows={4}
                      placeholder="Nhập mô tả chi tiết cho sản phẩm..."
                      required
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="image" className="form-label fw-bold">
                      Tên file hình ảnh
                    </label>
                    <input
                      id="image"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Ví dụ: iphone17.png"
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-dark btn-lg">
                      SỬA SẢN PHẨM
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
