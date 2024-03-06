export const Footer = () => {
  return (
    <>
      <footer>
        <br />
        <br />
        <br />

        <div className="footer-info">
          <div className="logo-header-footer">
            <img src="/LogoName.svg" alt="" />
            <img src="/LogoWhite.svg" alt="" />
          </div>

          <div className="footer-subscribe">
            <h2>ابق على اطلاع</h2>
            <p>اشترك في نشرتنا الإخبارية</p>
            <div className="info-email">
              <input type="text" placeholder="بريدك الالكتروني" />
              <button>اشترك</button>
            </div>
            <br />

            <div className="footer-tel">
              <p>00966549999999 - 99999999</p>
              <img src="/LogoTel.svg" alt="" />
            </div>
            <div className="footer-email">
              <p>info@aACIT.com.sa</p>
              <img src="/LogoEmail.svg" alt="" />
            </div>
          </div>

          <div className="certificate-courses">
            <h2>الشهادات و الدورات</h2>

            <ul>
              <li>سيسكو ) Cisco (</li>
              <li>ميكروسوفت ) Microsoft (</li>
              <li>اوراكل ) Oracle (</li>
              <li>جونيبر ) juniper (</li>
              <li>اي سي كونسل ) EC-Council (</li>
              <li>عرض الكل {">>"}</li>
            </ul>
          </div>

          <div className="quick-links">
            <h2>روابط سريعة</h2>

            <ul>
              <li>الرئيسية</li>
              <li>عن المعهد</li>
              <li>فديوهات تعريفية</li>
              <li>اتصل بنا</li>
              <li>المدونة</li>
              <li>خريطة الموقع</li>
            </ul>
          </div>

          <div className="social-networks">
            <div className="logo-header-footer-1">
              <img src="/LogoName.svg" alt="" />
              <img src="/LogoWhite.svg" alt="" />
            </div>
            <br />
            <br />
            <br />
            <img src="/SocialNetworks.svg" alt="" />
          </div>
          <div className="payments">
            <img src="/LogoApplePay.svg" alt="" />
            <img src="/LogoMada.svg" alt="" />
            <img src="/LogoPay.svg" alt="" />
            <img src="/LogoTabby.svg" alt="" />
            <img src="/LogoMasterCard.svg" alt="" />
            <img src="/LogoVisa.svg" alt="" />
          </div>
        </div>

        <hr />

        <div className="final-info-footer">
          <p>العربية (AR)</p>
          <p>حقوق النشر © 2023, ACIT</p>
        </div>
      </footer>
    </>
  );
};
