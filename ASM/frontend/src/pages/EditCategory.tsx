import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { ApiResponse } from "../types/ApiRes";
import { CategoryFormData, categorySchema } from "../types/category.schema";
import { Category } from "../types/Icategory";

function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    mode: "onChange",
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<ApiResponse<Category>>(
          `http://localhost:3000/api/category/${id}`
        );
        // console.log("data", data.datas);

        reset(data.datas);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
        toast.error("Không thể tải dữ liệu sản phẩm!");
      }
    })();
    
  }, [id, reset]);

  const onSubmit = async (data: CategoryFormData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Bạn chưa đăng nhập hoặc không có quyền!");
        return;
      }
      await axios.put(`http://localhost:3000/api/category/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Sửa sản phẩm thành công!");
      navigate("/admin/categories");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Có lỗi xảy ra!");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <h2 className="mb-0">Sửa Danh Mục</h2>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Tên danh mục
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Ví dụ: Phụ kiên"
                    {...register("name")}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="slug" className="form-label fw-bold">
                    Slug
                  </label>
                  <input
                    id="slug"
                    type="text"
                    className={`form-control ${
                      errors.slug ? "is-invalid" : ""
                    }`}
                    placeholder="Ví dụ: phu-kien"
                    {...register("slug")}
                  />
                  {errors.slug && (
                    <div className="invalid-feedback">
                      {errors.slug.message}
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

export default EditCategory;
