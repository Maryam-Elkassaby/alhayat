import style from './SectionFiveHome.module.css';
import img_4 from '../../assets/img-4.png';

export default function SectionFiveHome() {
  return <>
    <section className={`mt-5`}>
      <div className="container">
        <div className={`${style.bg} row rounded p-3`}>
          <div className="img col-lg-6 col-md-6 col-sm-12">
            <img className={`img-fluid text-center`} src={img_4} alt="" />
          </div>
          <div className="content col-lg-6 col-md-6 col-sm-12 mt-3 d-flex justify-content-center flex-column">
            <h2 className={`${style.heading_style} fw-bold text-center text-sm-end`}>
            لماذا يجب أن تذهب الي مركز الحياة الطبي؟
            </h2>
            <hr className={`${style.hr_style}`} />
            <p className={`${style.paragraph_style} mt-2 text-center text-sm-end`}>
            نحن نبذل قصارى جهدنا في تقديم أفضل خدمات الرعاية الطبية الأولية المنزلية بمواصفات عالمية وفقا لأسس طبية حديثة. كما أننا نسعى دائفا لتوسيم مجالات خدماتنا لدعم مرضانا. ونعمل على توفير سبل الراحة لهم وسهولة العلاج بتوفير كافة التخصصات الطبية. وتقديم حلول أفضل بموظفين متخصصين وبأعلى جودة بحيث تلبي أعلى معايير هيئة الصحة والمعايير الدولية
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
}
