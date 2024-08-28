import style from './SectionFourHome.module.css';
import img_3 from '../../assets/img-3.png';

export default function SectionFourHome() {
  return <>`
    <section className={`mt-5`}>
      <div className="container">
        <div className="row">
          <div className={`heading col-lg-12 col-md-12 col-sm-12`}>
            <h2 className={`h1 fw-bold text-center`}>
            كيـــف نعمــل
            </h2>
          </div>
        </div>
        <div className="row align-items-center flex-column-reverse flex-row flex-lg-row ">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row d-flex justify-content-center">

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={`${style.option} p-3 m-1 rounded-2`}>
                  <div className="box pe-4 d-flex">
                    <div className={`d-flex align-items-center`}>
                      <h3 className={`${style.number_option} text-end fw-bold`}>
                        01
                      </h3>
                    </div>
                    <div className={`d-flex align-items-center`}>
                      <h3 className={`${style.heading_option} pe-2`}>
                      حجز موعد
                      </h3>
                    </div>

                  </div>
                  <p  className={`pe-4`}>
                  يمكنك حجز موعدك من الموقع
                  </p>
                </div>
              </div>
              
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={`${style.option} p-3 m-1 rounded-2`}>
                  <div className="box pe-4 d-flex">
                    <div className={`d-flex align-items-center`}>
                      <h3 className={`${style.number_option} text-end fw-bold`}>
                        02
                      </h3>
                    </div>
                    <div className={`d-flex align-items-center`}>
                      <h3 className={`${style.heading_option} pe-2`}>
                      رد سريع
                      </h3>
                    </div>

                  </div>
                  <p  className={`pe-4`}>
                  نتواصل معك في أقرب موعد
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 mt-0 mt-md-0 mt-sm-2">
                <div className={`${style.option} p-3 m-1 rounded-2`}>
                  <div className="box pe-4 d-flex">
                    <div className={`d-flex align-items-center`}>
                      <h3 className={`${style.number_option} text-end fw-bold`}>
                        03
                      </h3>
                    </div>
                    <div className={`d-flex align-items-center`}>
                      <h3 className={`${style.heading_option} pe-2`}>
                      الزيارة المنزلية
                      </h3>
                    </div>

                  </div>
                  <p  className={`pe-4`}>
                  زيارة منزلية لمتابعة المريض
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-4 mb-sm-0 text-center mb-0 mb-md-3">
            <div className="img">
              <img className='img-fluid' src={img_3} alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
}
