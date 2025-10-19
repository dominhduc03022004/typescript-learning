import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { signUpValid, SignUpFormData } from "../types/auth.schema";
import { Link } from "react-router-dom";

function Register() {
//   const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpValid),
    mode: "onChange",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await axios.post("http://localhost:3000/api/auth/signup", data);
      console.log('data: ', data);
      toast.success("Đăng ký thành công!");
      reset();
    //   navigate("/admin/products");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Có lỗi xảy ra!");
      }
    }
  };
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="col-md-6 col-lg-4">
        <div className="card shadow-sm">
          <div className="card-header text-center bg-dark text-white">
            <h2 className="mb-0">Đăng Ký</h2>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label fw-bold">Username</label>
                <input
                  id="userName"
                  type="text"
                  className={`form-control ${errors.userName ? "is-invalid" : ""}`}
                  placeholder="Ví dụ: ducdz"
                  {...register("userName")}
                />
                {errors.userName && (
                  <div className="invalid-feedback">
                    {errors.userName.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Ví dụ: abc@gmail.com"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Mật khẩu
                </label>
                <input
                  id="password"
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Ví dụ: 123456"
                  {...register("password")}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Xác nhận mật khẩu
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                  placeholder="Ví dụ: 123456"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-dark btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer text-center">
            <small>
              Đã có tài khoản? <Link to={`/login`}>Đăng nhập ngay</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
