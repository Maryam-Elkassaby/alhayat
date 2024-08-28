import style from './SectionTwoHome.module.css';

import img_2 from '../../assets/img-2.png'

export default function SectionTwoHome() {
  return <>
    <section className="mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="img col-lg-6 col-md-6 col-sm-12">
            <img className='img-fluid' src={img_2} alt="" />
          </div>
          <div className="content col-lg-6 col-md-6 col-sm-12 mt-4 mt-sm-0">
            <h3 className={`${style.heading} text-center text-sm-end`}>
            مركز الحياة الرائد في تقديم الخدمات الطبية المنزلية وتلبية جميع احتياجات المريض. فنحن متخصصون في تقديم مجموعة واسعة من خدمات الرعاية الصحية التي يمكن تقديمها في المنزل، والتي تناسب كافة أفراد المجتمم بمختلف ظروفهم ومراحلهم العمرية واحتياجاتهم. كل ذلك بتطبيق أعلى معايير الجودة والأمان حفاظ على سلامة مرضانا.
            </h3>
            <h3 className={`${style.heading} mt-2 mt-md-3 mt-sm-5 text-center text-sm-end`}>
            كما نقدم كافة الخدمات الطبية المنزلية بجودة مراكز الرعاية الكبرى توفيرا للوقت والجهد الذي يبذله المريض بالانتظار، ويتم كل ذلك تحت إشراف كوادر طبية متخصصة ترافق المريض خلال مراحل الخطة العلاجية وتعمل على تهيئة البيئة المحيطة له للعلاج وتسهيل حياته اليومية.
            </h3>
          </div>
        </div>
      </div>
    </section>
  </>
}
