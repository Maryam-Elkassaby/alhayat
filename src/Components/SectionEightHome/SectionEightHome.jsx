import style from './SectionEightHome.module.css'
import img from '../../assets/support.png';
export default function SectionEightHome() {
  return (
    <>
      <section className={`mt-5`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h4 className={`${style.heading_style} fw-bold text-center`}>
                الشركاء              
              </h4>
              <h2
                className={`${style.second_heading_style} fw-bold text-center mb-5`}
              >
                شركاء النجاح      
              </h2>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <img className={`img-fluid`} src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
