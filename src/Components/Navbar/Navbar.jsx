import style from './Navbar.module.css'
import logo from '../../assets/logo.png'

import { Link , NavLink } from "react-router-dom";

export default function Navbar() {
  return <>
    <nav className={`navbar navbar-expand-lg bg-white fixed-top top-0 right-0 left-0 ${style.navbar_style} shadow-sm`}>
      <div className="container">

        <Link className="navbar-brand" to="">
          <img className='w-50' src={logo} alt="" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto text-center">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                الرئيسية
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="bookAppointment">
                حجز موعد
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="blog">
                المدونة
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="services">
                خدماتنا
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="myAccount">
                حسابي
              </NavLink>
            </li>


          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-auto text-center">

            <li className="nav-item">
              <NavLink className="nav-link" to="contactUs">
                تواصل معنا
              </NavLink>
            </li>

          </ul>
  
        </div>
      </div>
    </nav>

  </>
}
