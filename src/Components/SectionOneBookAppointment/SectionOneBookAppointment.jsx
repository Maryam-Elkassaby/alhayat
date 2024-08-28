import style from "./SectionOneBookAppointment.module.css";

export default function SectionOneBookAppointment() {
  return (
    <>
      <section className={`mt-90`}>
        <div className={`container`}>
          <div className="row">
            <div className="header">
              <h2 className={`${style.main_color} text-center`}>
                حجز موعد الان
              </h2>
              <hr className={`${style.hr_style} mt-3`} />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
              <div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="firstNameInput"
                    placeholder="First Name"
                  />
                  <label
                    htmlFor="firstNameInput"
                    className={`${style.label_right}`}
                  >
                    الاسم الاول
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastNameInput"
                    placeholder="Last Name"
                  />
                  <label
                    htmlFor="lastNameInput"
                    className={`${style.label_right}`}
                  >
                    الاسم الاخير
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="رقم الجوال"
                  />
                  <label
                    htmlFor="emailInput"
                    className={`${style.label_right}`}
                  >
                    رقم الجوال
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="البريد الالكتروني"
                  />
                  <label
                    htmlFor="emailInput"
                    className={`${style.label_right}`}
                  >
                    البريد الالكتروني
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="passwordInput"
                    placeholder="اترك رسالتك"
                  />
                  <label
                    htmlFor="passwordInput"
                    className={`${style.label_right}`}
                  >
                    اترك رسالتك
                  </label>
                </div>
                <div className="form-floating mb-3 text-start">
                  <button className={`${style.btn} btn-secondary`}>
                    إرســال
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
