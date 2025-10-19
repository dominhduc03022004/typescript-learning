import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { SignInFormData, signInValid } from "../types/auth.schema";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInValid),
    mode: "onChange",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signin",
        data
      );
      const { token, data: user } = res.data;
      login(user, token);

      toast.success("Đăng nhập thành công!");
      navigate("/"); 
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
            <h2 className="mb-0">Đăng Nhập</h2>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input id="email" type="text" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="Ví dụ: abc@gmail.com" {...register("email")} />
                {errors.email && (<div className="invalid-feedback">{errors.email.message}</div>)}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">Mật khẩu</label>
                <input id="password" type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} placeholder="Ví dụ: 123456" {...register("password")} />
                {errors.password && (<div className="invalid-feedback">{errors.password.message}</div>)}
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Ghi nhớ</label>
                </div>
                <a href="#" className="text-decoration-none">Quên mật khẩu?</a>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark btn-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer text-center">
            <small>Chưa có tài khoản? <Link to={`/register`}>Đăng ký ngay</Link></small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;