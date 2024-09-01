import style from './S2HomeVisit.module.css';

import img from '../../assets/img-4.png';
import { Link } from 'react-router-dom';

export default function S2HomeVisit() {
  return <>
    <section className={`mt-90`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
              <div className="content d-flex flex-column align-items-center justify-content-center">
                <h2 className={`${style.heading} h2 fw-bold text-center`}>
                فوائد خدمة الزيارات المنزلية
                </h2>
                <div className={`mt-3`}>
                  <p className={``}>
                  إن وجود الرعاية الطبية بشكل بمنزلك يعمل في سلامتك وراحتك، ويخفف من التوتر والقلق، لذا تتمتل فوائد خدمة الزيارات المنزلية في :
                  </p>
                  <ol>
                    <li>
                    سهولة الحصول على الرعاية الطبية بتقليل الزيارات غير الضرورية
                    </li>
                    <li>
                    تلبية الاحتياجات الطبية المختلفة في اجواء أمنة ومريحة،
                    </li>
                    <li>
                    استمتاع بالاسترخاء والراحة والخصوصية
                    </li>
                    <li>
                    عدم التعرض للعدوى بالمراكز الطبية خاصة في ظل انتشار وباء كوفيد 19
                    </li>
                  </ol>
                </div>
                <Link to='/الزيارة-المنزلية' className={`btn ${style.bg}`}>
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
}
