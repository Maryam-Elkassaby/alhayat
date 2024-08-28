import style from './SectionThreeHome.module.css';

export default function SectionThreeHome() {
  return <>
    <section className={`mt-5`}>
      <div className="container">
        <div className={`${style.bg} row rounded py-5`}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="header_content">
              <h2 className={`h1 text-center fw-bold`}>
              خدماتنــا المشهــورة
              </h2>
              <p className={`${style.paragraph} my-3 text-center `}>
              نقدم مجموعة متنوعة من خدمات الرعاية الطبية المنزلية لمجموعة من الاحتياجات والفئات العمرية ، باستخدام فريق طبي متكامل ذو معرفة ومهارة عالية يهتم بالمرضى في خصوصية تامة ، ويضمن سلامتهم وراحتهم ، ويخلق بيئة مناسبة لهم.
              </p>
            </div>
          </div>

          <div className={`col-lg-3 col-md-6 col-sm-12`}>
            <div className={`${style.service} m-4 py-3 rounded`}>
              <h4 className='text-center mt-2'>
              علاج طبيعي
              <i className={`${style.icon_style} fa-solid fa-circle-arrow-down d-block mt-3`}></i>
              </h4>
            </div>
          </div>

          <div className={`col-lg-3 col-md-6 col-sm-12`}>
            <div className={`${style.service} m-4 py-3 rounded`}>
              <h4 className='text-center mt-2'>
              تمريض منزلي
              <i className={`${style.icon_style} fa-solid fa-circle-arrow-down d-block mt-3`}></i>
              </h4>
            </div>
          </div>

          <div className={`col-lg-3 col-md-6 col-sm-12`}>
            <div className={`${style.service} m-4 py-3 rounded`}>
              <h4 className='text-center mt-2'>
              رعاية مسنين
              <i className={`${style.icon_style} fa-solid fa-circle-arrow-down d-block mt-3`}></i>
              </h4>
            </div>
          </div>

          <div className={`col-lg-3 col-md-6 col-sm-12`}>
            <div className={`${style.service} m-4 py-3 rounded`}>
              <h4 className='text-center mt-2'>
              زيارة منزلية
              <i className={`${style.icon_style} fa-solid fa-circle-arrow-down d-block mt-3`}></i>
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
}