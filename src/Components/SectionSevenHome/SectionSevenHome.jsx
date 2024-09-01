import style from './SectionSevenHome.module.css'

export default function SectionSevenHome() {
  return <>
    <section className={`mt-5`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h4 className={`${style.heading_style} fw-bold text-center`}>
            هل لديك سؤال
            </h4>
            <h2 className={`${style.second_heading_style} fw-bold text-center mb-5`}>
            الأسئلة الشائعة
            </h2>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className={`${style} accordion-item`}>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className={`${style.accordion_button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  هل من الضروري بالنسبة لي استشارة طبيبي قبل تحديد موعد العلاج الطبيعي المنزلي؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div className={`${style.accordion_body} accordion-body`}>
                  عل الأغلب ليس من الضروري أن ترى طبيبك قبل الحصول على تقييم العلاج الطبيعي إذا كان مقدم الرعاية الصحية الخاص بك لا يحتاج إلى مرجم طبي. من ناحية أخرى
                  يفضل بمض العملاء إؤية حطبيبهم أولا.
                  </div>
                </div>
              </div>
              <div className={`${style} accordion-item`}>
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className={`${style.accordion_button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  كم عدد الجلسات المطلوبة للتعافي ؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className={`${style.accordion_body} accordion-body`}>
                  عل الأغلب ليس من الضروري أن ترى طبيبك قبل الحصول على تقييم العلاج الطبيعي إذا كان مقدم الرعاية الصحية الخاص بك لا يحتاج إلى مرجم طبي. من ناحية أخرى يفضل بمض العملاء إؤية حطبيبهم أولا.
                  </div>
                </div>
              </div>
              <div className={`${style} accordion-item`}>
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className={`${style.accordion_button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  هل احتاج إلى تحضير أي شئ معي للعلاج ؟
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className={`${style.accordion_body} accordion-body`}>
                  عل الأغلب ليس من الضروري أن ترى طبيبك قبل الحصول على تقييم العلاج الطبيعي إذا كان مقدم الرعاية الصحية الخاص بك لا يحتاج إلى مرجم طبي. من ناحية أخرى يفضل بمض العملاء إؤية حطبيبهم أولا.                  
                  </div>
                </div>
              </div>
              <div className={`${style} accordion-item`}>
                <h2 className={`accordion-header`} id="panelsStayOpen-headingThree">

                  <button className={`${style.accordion_button} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  ما هي مدة جلسة العلاج ؟                  
                  </button>
                  
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className={`${style.accordion_body} accordion-body`}>
                  عل الأغلب ليس من الضروري أن ترى طبيبك قبل الحصول على تقييم العلاج الطبيعي إذا كان مقدم الرعاية الصحية الخاص بك لا يحتاج إلى مرجم طبي. من ناحية أخرى يفضل بمض العملاء إؤية حطبيبهم أولا.                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
