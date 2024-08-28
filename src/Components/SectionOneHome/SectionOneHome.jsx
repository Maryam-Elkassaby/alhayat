import style from './SectionOneHome.module.css'

import img_1 from '../../assets/img-1.png'

export default function SectionOneHome() {
  return <>
    <section className='mt-90'>
      <div className="container">
        <div className="row flex-column-reverse flex-sm-row">
        <div className="content col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center flex-column mt-3 ">

            <h2 className={`${style.heading} fw-bold text-center text-lg-end `}>
            اهلا بك مع مركز الحياة للرعاية المنزلية
            </h2>
            <p className={`${style.paragraph} text-center text-lg-end mt-2`}>
            مركز الحياه يقدم اعلى معايير الجودة في الزيارات المنزلية لتلبية كل احتياجات المرضي
            </p>

          </div>
          <div className="img col-lg-6 col-md-6 col-sm-6 text-start">
            <img className='img-fluid' src={img_1} alt="" />
          </div>
        </div>
      </div>
    </section>
  </>
}
