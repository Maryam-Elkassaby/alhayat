import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import BookAppointment from './Pages/BookAppointment/BookAppointment';
import Blog from './Pages/Blog/Blog';
import Services from './Pages/Services/Services';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './Pages/NotFound/NotFound';
import HomeVisit from './Pages/HomeVisit/HomeVisit';
import PhysicalTherapy from './Pages/PhysicalTherapy/PhysicalTherapy';
import NursingServices from './Pages/NursingServices/NursingServices';
import ElderlyCare from './Pages/ElderlyCare/ElderlyCare';

function App() {
  const route = createBrowserRouter([
    {path : '' , element : <Layout /> , children : [
      { index:true , element : <Home /> },
      { path : 'bookAppointment' , element : <BookAppointment /> },
      { path : 'blog' , element : <Blog /> },
      { path : 'services' , element : <Services /> },
      { path : 'contactUs' , element : <ContactUs /> },
      { path :'الزيارة-المنزلية' , element : <HomeVisit /> },
      { path :'العلاج-الطبيعي' , element : <PhysicalTherapy /> },
      { path :'خدمات-تمريضية' , element : <NursingServices /> },
      { path :'رعاية-المسنين' , element : <ElderlyCare /> },
      { path : '*' , element : <NotFound /> },
    ]}
  ])
  return <>
    <RouterProvider router={ route } ></RouterProvider>
    </>
}

export default App
