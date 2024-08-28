import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import BookAppointment from './Pages/BookAppointment/BookAppointment';
import Blog from './Pages/Blog/Blog';
import Services from './Pages/Services/Services';
import MyAccount from './Pages/MyAccount/MyAccount';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './Pages/NotFound/NotFound';
import HomeVisit from './Pages/HomeVisit/HomeVisit';

function App() {
  const route = createBrowserRouter([
    {path : '' , element : <Layout /> , children : [
      { index:true , element : <Home /> },
      { path : 'bookAppointment' , element : <BookAppointment /> },
      { path : 'blog' , element : <Blog /> },
      { path : 'services' , element : <Services /> },
      { path : 'myAccount' , element : <MyAccount /> },
      { path : 'contactUs' , element : <ContactUs /> },
      { path : 'homeVisit' , element : <HomeVisit /> },
      { path : '*' , element : <NotFound /> },
    ]}
  ])
  return <>
    <RouterProvider router={ route } ></RouterProvider>
    </>
}

export default App
