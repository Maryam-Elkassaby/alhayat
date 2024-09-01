import style from './S1HomeVisit.module.css';

import img_1 from '../../assets/img-5.jpg';
import { Link } from 'react-router-dom';

export default function S1HomeVisit() {
  return <>
    <section className={`mt-90`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="img">
              <img className={`img-fluid rounded-3`} src={img_1} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="content">
              <h2 className={`${style.heading} h2 fw-bold text-center`}>
              الزيارة المنزلية
              </h2>
              <div className={`mt-3 d-flex flex-column align-items-center justify-content-center`}>
                <p className={``}>
                خدمة الزيارة المنزلية تشمل الاستشارات الطبية المنزلية والفحص المخبري والتطعيم المنزلي بواسطة متخصصين، بحيت تصلك إلى باب المنزل بالترتيب المسبق سواء بالإتصال أو التواصل الإلكتروني: ليصلك أطباء متخصصين مؤهلين بدرجة عالية لزيارة المريض وتقديم الرعاية الكاملة له بمستوى عالي الجودة. 
                </p>
                <p className={``}>
                كما يوفر لكم أطباء في جميع التخصصات الذين يقدمون الرعاية الصحية المنزلية بأفضل شكل وتفهم الظروف الصحية، بالإضافة إلى مختصين بالفحص المخبرى لإجراء الفحوصات المخبرية بالمنزل والحصول على العناية اللازمة ووصولها بشكل سليم للمختبر، والحصول على النتائج الكترونيا في أسرع وقت .
                </p>
                <p className={``}>
                ذلك فضلا عن التطعيم المنزلي والمتمثلة في توصيل اللقاحات والتطعيمات حتى باب المنزل، دون الاضطرار إلى مغادرة المنزل للحصول عليها في المراكز الطبية والمستشفيات، بحيت تشمل التطعيمات الأساسية الخاصة بالأطفال - اللقاحات الخاصة بالبالغين - اللقاحات الموسمية - لقاحات.
                </p>
                <Link to='/الزيارة-المنزلية' className={`btn ${style.bg} text-center`}>
                  قراءة المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
