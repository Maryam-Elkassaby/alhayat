import style from './SectionSixHome.module.css';

export default function SectionSixHome() {
  return <>
    <section className={`mt-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">

            <div className={`${style.first_box_style} ${style.box_style} m-2 py-5 rounded-4 text-center `}>
              <h2 className={`${style.heading_style} ${style.first_heading_box_style} fw-bold`}>
                %100
              </h2>
              <h6 className={`${style.paragraph_style} fw-bold`}>
                مرضي راضون  
              </h6>
            </div>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">

            <div className={`${style.second_box_style} ${style.box_style} m-2 py-5 rounded-4 text-center `}>
              <h2 className={`${style.heading_style} ${style.second_heading_box_style} fw-bold`}>
                +5
              </h2>
              <h6 className={`${style.paragraph_style} fw-bold`}>
                سنوات من الخبرة 
              </h6>
            </div>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">

            <div className={`${style.third_box_style} ${style.box_style} m-2 py-5 rounded-4 text-center `}>
              <h2 className={`${style.heading_style} ${style.third_heading_box_style} fw-bold`}>
                +25.000
              </h2>
              <h6 className={`${style.paragraph_style} fw-bold`}>
                عملاء راضون
              </h6>
            </div>

          </div>
        </div>
      </div>
    </section>
  </>
}
