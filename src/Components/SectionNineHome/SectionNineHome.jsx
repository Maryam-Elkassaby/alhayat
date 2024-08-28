import style from './SectionNineHome.module.css';

export default function SectionNineHome() {
  return <>
    <section className={`mt-5`}>
      <div className="container">
        <div className="row bg-info rounded-3 d-flex justify-content-center align-items-center">
          <div className="col-lg-4 col-md 4 col-sm-6">
            <div className={`d-flex justify-content-center align-items-center py-4`}>
              <div>
                <i className={`${style.icon} fa-solid fa-location-dot `}></i>
              </div>
              <div className={`me-3`}>
                <h2 className={`${style.heading}`}>
                  نحن معكم أينما كنتم
                  موقعنا علي الخريطة                
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md 4 col-sm-6">
            <div className={`d-flex justify-content-center align-items-center py-4`}>
              <div>
                <i className={`${style.icon} fa-solid fa-phone-volume`}></i>
              </div>
              <div className={`me-3`}>
                <h2 className={`${style.heading}`}>
                  احجز موعد الآن 966561655480+
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md 4 col-sm-6">
            <div className={`d-flex justify-content-center align-items-center py-4`}>
              <div>
                <i className={`${style.icon} fa-regular fa-envelope`}></i> 
              </div>
              <div className={`me-3`}>
                <h2 className={`${style.heading}`}>
                كن علي تواصل دائم معنا
                راسلنا علي الإيميل  
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
