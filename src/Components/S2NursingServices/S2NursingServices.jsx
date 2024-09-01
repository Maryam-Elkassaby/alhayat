import style from './S2NursingServices.module.css';
import img from '../../assets/img-2.png'
import { Link } from 'react-router-dom';
export default function S2NursingServices() {
  return (
    <>
      <section className={``}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
              <div className="content d-flex flex-column align-items-center justify-content-center">
                <h2 className={`${style.heading} h2 fw-bold text-center`}>
                فوائد خدمة الرعاية التمريضية
                </h2>
                <div className={`mt-3`}>
                <p className={`fw-bold text-center`}>
                هى تلك الخدمة التي يتم بها متابعة المريض بشكل جيد حتى يتم شفائه بشكل تام ينقسم التمر يض المنزلي إلى نوعين دائم ومؤقت أهم فوائد الرعاية التمريضية
                </p>
                  <ol>
                    <li>
                    متابعة حالة المريض متابعة مستمرة، ومراقبة حالته الصحية بشكل أفضل.
                    </li>
                    <li>
                    قدرة التمريض على أخذ العينات والفحوصات اللازمة، والعمل على راحة المريض
                    </li>
                    <li>
                    يتمثل الدور الرئيسي للتمريض المنزلي في دعم الجانب الصحي
                    </li>
                    <li>
                    توفر الرعاية التمريضية بالمنزل الوقت والجهد والمال
                    </li>
                  </ol>
                </div>
                <Link to="/الزيارة-المنزلية" className={`btn ${style.bg}`}>
                  قراءة المزيد
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="img d-flex justify-content-end">
                <img className={`img-fluid rounded-3`} src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
