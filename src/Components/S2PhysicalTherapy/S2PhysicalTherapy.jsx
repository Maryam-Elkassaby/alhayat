import style from './S2PhysicalTherapy.module.css';

import img from '../../assets/img-1.png'

import { Link } from 'react-router-dom';

export default function S2PhysicalTherapy() {
  return (
    <>
      <section className={``}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
              <div className="content d-flex flex-column align-items-center justify-content-center">
                <h2 className={`${style.heading} h2 fw-bold text-center`}>
                فوائد العلاج الطبيعى المنزلى
                </h2>
                <div className={`mt-3`}>
                  <ol>
                    <li>
                      ستاهيل وعلاح عضلات الظهر التحسين من وضع الممود الفقري ويزيد من مرونته
                    </li>
                    <li>
                      تلبية الاحتياجات الطبية المختلفة في اجواء أمنة ومريحة،
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
