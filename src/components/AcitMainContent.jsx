import { Header } from "../components/Header";

export const AcitMainContent = () => {
  return (
    <>
      <div className="image-container">
        <Header />
        <section>
          <div></div>

          <div className="title-info">
            <h1>
              <strong>جديد </strong>من المعرفة <strong>اكتشف</strong> عالم
            </h1>
            <p>
              نفتح ابواب المعرفة والتطور لك ، انضم الينا اليوم وابدأ رحلة تعلم
              لاتنسى
            </p>
            <div className="square-decoration-main"></div>

            <button>ابدأ الآن</button>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="rectangle">
        <div className="logos-containers">
          <div>
            <img src="/LogoBuilding.svg" alt="" />
            <h1>100+</h1>
            <p>منشأة مستفيدة</p>
          </div>

          <div>
            <img src="/LogoPerson.svg" alt="" />
            <h1>5000+</h1>
            <p>متدرب محترف</p>
          </div>

          <div>
            <img src="/LogoMedal.svg" alt="" />
            <h1>10500+</h1>
            <p>دورة معتمدة</p>
          </div>

          <div>
            <img src="/LogoPapers.svg" alt="" />
            <h1>500+</h1>
            <p>جلسة تدريبية</p>
          </div>
        </div>
      </div>
    </>
  );
};
