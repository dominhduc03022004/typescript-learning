import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormData, productSchema } from "../types/product.schema";
import toast from "react-hot-toast";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/products/${id}`
        );

        reset({
          name: data.name,
          price: data.price,
          description: data.description,
          image: data.image,
        });
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
        toast.error("Không thể tải dữ liệu sản phẩm!");
      }
    })();
  }, [id, reset]);

  const onSubmit = async (data: ProductFormData) => {
    try {
      await axios.put(`http://localhost:3000/products/${id}`, data);
      toast.success("Sửa sản phẩm thành công!");
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi sửa sản phẩm!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <h2 className="mb-0">Sửa Sản Phẩm</h2>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Tên sản phẩm
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Ví dụ: iPhone 17"
                    {...register("name")}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label fw-bold">
                    Giá sản phẩm
                  </label>
                  <input
                    id="price"
                    type="number"
                    className={`form-control ${
                      errors.price ? "is-invalid" : ""
                    }`}
                    placeholder="Ví dụ: 35000000"
                    {...register("price", { valueAsNumber: true })}
                  />
                  {errors.price && (
                    <div className="invalid-feedback">
                      {errors.price.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label fw-bold">
                    Mô tả
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    placeholder="Nhập mô tả chi tiết cho sản phẩm..."
                    {...register("description")}
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">
                      {errors.description.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label fw-bold">
                    Tên file hình ảnh
                  </label>
                  <input
                    id="image"
                    type="text"
                    className={`form-control ${
                      errors.image ? "is-invalid" : ""
                    }`}
                    placeholder="Ví dụ: iphone17.png"
                    {...register("image")}
                  />
                  {errors.image && (
                    <div className="invalid-feedback">
                      {errors.image.message}
                    </div>
                  )}
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Đang lưu..." : "LƯU THAY ĐỔI"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
