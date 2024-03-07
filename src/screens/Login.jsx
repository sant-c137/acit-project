import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export const Login = () => {
  useEffect(() => {
    const pass = document.getElementById("password");
    const icon = document.querySelector(".icon");

    icon.addEventListener("click", () => {
      if (pass.type === "password") {
        pass.type = "text";
      } else {
        pass.type = "password";
      }
    });

    return () => {
      icon.removeEventListener("click", () => {
      });
    };
  }, []);


  

  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <section className="section-login">
        <img src="/DecorationLines.svg" alt="" className="decoration-lines" />
        <img
          src="/DecorationLinesR.svg"
          alt=""
          className="decoration-lines-r"
        />
        <div className="login-container">
          <h1>تسجيل الدخول</h1>
          <br />
          <br />

          <input type="text" placeholder="البريد الالكتروني" />
          <br />
          <div className="show-password">
            <img src="/Eye.svg" alt="" className="icon" />
            <input
              type="password"
              placeholder="كلمة المرور "
              maxLength="30"
              id="password"
            />
            {/* <img src="/EyeClosed.svg" alt="" /> */}
          </div>

          <div className="forgot-show-password">
            <a href="">هل نسيت كلمة السر ؟</a>

            <div className="stay-logged-in">
              <h2>أبق تسجيل دخولي</h2>
              <input type="checkbox" className="checkbox" />
            </div>
          </div>
          <br />
          <br />

          <button className="sing-in-btn">تسجيل الدخول</button>

          <div className="separation-line">
            <hr />
            <h6>او</h6>
            <hr />
          </div>
          <button className="create-account-btn">انشاء حساب</button>
        </div>
      </section>

      <Footer />
    </>
  );
};
