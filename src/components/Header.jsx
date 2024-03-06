import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="check-button">
        <img src="/LogoMenu.svg" alt="" />
      </label>
      <div className="login-singin">
        <div className="language-container">
          <img src="/ARLogo.svg" alt="" />
          <select name="" id="" className="language-selector">
            <option value="AR">(AR)</option>
          </select>
        </div>
        <button className="login-button">تسجيل الدخول</button>
        <button className="singin-button">إنشاء حساب</button>
      </div>

      <nav className="header-sections">
        <ul>
          <li className="Hola">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/accreditations-and-partners">
              Accreditations and partners
            </Link>
          </li>
          <li>
            <Link to="/call-us">Call us</Link>
          </li>
        </ul>
      </nav>

      <div className="logo-header">
        <img src="/LogoName.svg" alt="" />
        <img src="/LogoWhite.svg" alt="" />
      </div>

      <div>
        <br />
      </div>
    </header>
  );
};
