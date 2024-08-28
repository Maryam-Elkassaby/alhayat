import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className={`${style.Footer} mt-5 py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h2 className={``}>من نحن</h2>
              <p className={``}>
                مركز الحياة الراند في تقديم الخدمات الطبية المنزلية وتلبية جميع
                احتياجات المريض. فنحن متخصصون في تقديم مجموعة واسعة من خدمات
                الرعاية الصحية التي يمكن تقديمها في المنزل. والتي تناسب كافة
                أفراد المجتمع بمختلف ظروفهم ومراحلهم العمرية واحتياجاتهم. كل ذلك
                بتطبيق أعلى معايير الحودة والأمان حفاظا على سلامة مرضان.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3 className={`h5 text-center`}>
                روابط مهمة
              </h3>
              <ul className={`${style.footer_links} navbar-nav text-center`}>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    الرئيسية
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="bookAppointment">
                    حجز موعد
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="blog">
                    المدونة
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="services">
                    خدماتنا
                  </Link>
                </li>

              </ul>
            </div>  
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3 className={`h5 text-center`}>
                خدماتنا
              </h3>
              <ul className={`${style.footer_links} navbar-nav text-center`}>
                <li className="nav-item">
                  <Link className="nav-link" to="homeVisit">
                  الزيارة المنزلية
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="bookAppointment">
                  العلاج الطبيعى
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="blog">
                  خدمات تمريضية
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="services">
                  رعاية المسنين
                  </Link>
                </li>

              </ul>
            </div>  

            <div className="col-lg-2 col-md-6 col-sm-12">
              <h3 className={`h5 text-center`}>
                تواصل معنا
              </h3>
              <ul className={`${style.footer_links} navbar-nav text-center`}>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    966561655480+  
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="">
                    info@alhayah.com
                  </Link>
                </li>
              </ul>
            </div>
            </div>
          </div>
      </section>
    </>
  );
}
