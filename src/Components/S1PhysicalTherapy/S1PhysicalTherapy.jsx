import { Link } from "react-router-dom";
import style from "./S1PhysicalTherapy.module.css";
import img_1 from '../../assets/img-2.png'

export default function S1PhysicalTherapy() {
  return (
    <>
      <section className={`mt-90`}>
        <div className="container">
          <div className="row">
            
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="img">
                <img className={`img-fluid rounded-3`} src={img_1} alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center mt-3 mt-sm-0">
              <div className="content">
                <h2 className={`${style.heading} h2 fw-bold text-center`}>
                  علاج طبيعي منزلي
                </h2>
                <div
                  className={`mt-3 d-flex flex-column align-items-center justify-content-center`}
                >
                  <p className={``}>
                  نقدم أحدث الأساليب العلمية لعلاج آلام الجسم والأمراض المختلفة خلال جلسات العلاج الطبيعي المنزلي بجميع أنواعها والتي يقوم بها أخصائي العلاح الطبيعي الذين يساعدون المريض في أنسب الخطط العلاجية للمريض. جلسات العلاج الطبيعي هي جلسات يتم فيها وضع خطة علاجية للمريض من أجل زيادة نطاق حركة المفاصل والعضلات والأنسجة وكذلك تقليل التورم في حالة الإصابة
                  </p>

                  <Link
                    to="/العلاج-الطبيعي"
                    className={`btn ${style.bg} text-center`}
                  >
                    قراءة المزيد
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
