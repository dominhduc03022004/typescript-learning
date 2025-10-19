import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CategoryFormData, categorySchema } from "../types/category.schema";

function AddCategory() {
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

  const onSubmit = async (data: CategoryFormData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Bạn chưa đăng nhập hoặc không có quyền!");
        return;
      }
      await axios.post("http://localhost:3000/api/category", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Thêm danh mục thành công!");
      reset();
      navigate("/admin/categories");
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <h2 className="mb-0">Thêm Danh Mục Mới</h2>
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
                    placeholder="Ví dụ: Phụ kiện"
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
                    {isSubmitting ? "Đang thêm..." : "THÊM DANH MỤC"}
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

export default AddCategory;
