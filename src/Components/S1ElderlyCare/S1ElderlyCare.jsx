import style from "./S1ElderlyCare.module.css";
import img from "../../assets/img-6.png";
import { Link } from "react-router-dom";

export default function S1ElderlyCare() {
  return (
    <>
      <section className={`mt-90`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="img">
                <img className={`img-fluid rounded-3`} src={img} alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center mt-3 mt-sm-0">
              <div className="content">
                <h2 className={`${style.heading} h2 fw-bold text-center`}>
                تفاصيل رعاية المسنين
                </h2>
                <div
                  className={`mt-3 d-flex flex-column align-items-center justify-content-center`}
                >
                  <p className={`text-center`}>
                    خدمات تمريضيه نوفر خدمات تمريضية للعمل على راحة المرضى ومتابعة حالتهم الصحية أول بأول، قمنا مي مركز الحياة بتوفير خدمة الرعاية التمريضية المنزلية على مدار الساعة بواسطة ممرصين متميرين ومتخصصين في مباشرة المريض سواء في حالات الأمراض الخطيرة، أو التعامي من الحراحات التي تتطلب العناية بالجروح وعيرها، وتقديم أهصل الرعابة الصحية لهم إما بالدوام الكامل أو الزيارات السريعة. وبهدم لكم تلك الرعاية بطاهم مدرب ومؤهل مي مستويات التمريض المختلمة يدابة م أحصائي تمريض وفني تمريض ومساعد تمريض لتقديم الرعاية الكاملة للأمراض المحتلفة . كما نشمل تلك الرعاية تقديم حدمات العناية بمرضى والقدم السكري تركيب القسطرة البولية - رعاية العسيل الكلوي - إعطاء الحقن عضلي أو وريدي - تركيب محاليل أو كانيولا - التغذية عن طريق الانبوب- العناية بالجروح والتغيير عليها - الرعاية بالأم والطفل. قراءة المزيد
                  </p>

                  <Link
                    to='/رعاية-المسنين'
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
